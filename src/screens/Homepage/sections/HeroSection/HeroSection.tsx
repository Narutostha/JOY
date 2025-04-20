import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

interface HeroSlide {
  id: number;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
  textColor: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "Experience Innovation",
    description: "Discover the latest in technology with our premium selection of devices and accessories.",
    image: "/public/SMARTPHONE.jpeg",
    buttonText: "Shop Now",
    buttonLink: "/products",
    textColor: "text-white"
  },
  {
    id: 2,
    title: "Premium Audio",
    description: "Immerse yourself in crystal-clear sound with our collection of high-end audio devices.",
    image: "/public/HEADDPHONE.webp",
    buttonText: "Explore Audio",
    buttonLink: "/products?category=audio",
    textColor: "text-gray-900"
  },
  {
    id: 3,
    title: "Smart Living",
    description: "Transform your home with cutting-edge smart devices and accessories.",
    image: "/public/MACBOOK.png",
    buttonText: "View Collection",
    buttonLink: "/products?category=smart-home",
    textColor: "text-white"
  }
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(goToNextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, goToNextSlide]);

  const handleManualNavigation = (callback: () => void) => {
    setIsAutoPlaying(false);
    callback();
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleManualNavigation(goToNextSlide);
    } else if (isRightSwipe) {
      handleManualNavigation(goToPrevSlide);
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div 
      className="relative h-[calc(100vh-80px)] min-h-[500px] w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait">
        {heroSlides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className={`absolute inset-0 ${index === currentSlide ? 'z-10' : 'z-0'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0">
              <div 
                className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"
                style={{ backdropFilter: 'blur(5px)' }}
              />
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Content */}
            <div className="relative z-20 h-full flex items-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="max-w-2xl"
                >
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${slide.textColor}`}
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className={`text-lg md:text-xl mb-8 ${slide.textColor}`}
                  >
                    {slide.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <Link to={slide.buttonLink}>
                      <Button 
                        size="lg"
                        className="bg-[#AD5C10] hover:bg-[#8A4A0D] text-white"
                      >
                        {slide.buttonText}
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={() => handleManualNavigation(goToPrevSlide)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      <button
        onClick={() => handleManualNavigation(goToNextSlide)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleManualNavigation(() => setCurrentSlide(index))}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'w-8 bg-[#AD5C10]'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;