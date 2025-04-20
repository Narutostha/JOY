import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";

interface HeroSlide {
  id: number;
  title: string;
  description: string;
  primaryImage: string;
  secondaryImage: string;
  buttonText: string;
  buttonLink: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "Apple Watch Series",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text.",
    primaryImage: "/public/apple-watch-image.png",
    secondaryImage: "/public/apple-watch-bands.png",
    buttonText: "Shop Now",
    buttonLink: "/products/apple-watch"
  },
  {
    id: 2,
    title: "iPhone 15 Pro",
    description: "Experience the next generation iPhone with revolutionary features and breakthrough technology.",
    primaryImage: "/public/SMARTPHONE.jpeg",
    secondaryImage: "/public/iphone 15.png",
    buttonText: "Learn More",
    buttonLink: "/products/iphone"
  },
  {
    id: 3,
    title: "MacBook Air M3",
    description: "Incredibly thin and light with the blazing-fast performance of M3 chip. Powerful enough for your most demanding workflows.",
    primaryImage: "/public/macbook-air.png",
    secondaryImage: "/public/macbook-accessories.png",
    buttonText: "Explore Features",
    buttonLink: "/products/macbook"
  },
  {
    id: 4,
    title: "AirPods Pro 2",
    description: "Immersive sound experience with adaptive audio and personalized spatial audio. Designed for all-day comfort.",
    primaryImage: "/public/airpods-pro.png",
    secondaryImage: "/public/airpods-case.png",
    buttonText: "Buy Now",
    buttonLink: "/products/airpods"
  }
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: 0.2 * custom,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const primaryImageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: -20 },
    visible: {
      opacity: 1, 
      scale: 1,
      x: 0,
      transition: { 
        delay: 0.4,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const secondaryImageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 20 },
    visible: {
      opacity: 1, 
      scale: 1,
      x: 0,
      transition: { 
        delay: 0.6,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative w-full h-[600px] bg-gray-50">
      <div className="relative h-full overflow-hidden">
        {heroSlides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className={`absolute inset-0 ${index === currentSlide ? 'z-10' : 'z-0'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="container mx-auto h-full px-4 flex items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <motion.h1
                    custom={1}
                    variants={textVariants}
                    initial="hidden"
                    animate={index === currentSlide ? "visible" : "hidden"}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    custom={2}
                    variants={textVariants}
                    initial="hidden"
                    animate={index === currentSlide ? "visible" : "hidden"}
                    className="text-gray-600 text-lg max-w-md"
                  >
                    {slide.description}
                  </motion.p>
                  <motion.div
                    custom={3}
                    variants={textVariants}
                    initial="hidden"
                    animate={index === currentSlide ? "visible" : "hidden"}
                  >
                    <Button
                      className="bg-[#AD5C10] hover:bg-[#8A4A0D] text-white px-8"
                      size="lg"
                    >
                      {slide.buttonText}
                    </Button>
                  </motion.div>
                </div>
                <div className="relative flex items-center justify-center h-[400px]">
                  <motion.div
                    variants={primaryImageVariants}
                    initial="hidden"
                    animate={index === currentSlide ? "visible" : "hidden"}
                    className="relative z-10 w-64 h-64"
                  >
                    <img
                      src={slide.primaryImage}
                      alt={`${slide.title} - Primary`}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                  <motion.div
                    variants={secondaryImageVariants}
                    initial="hidden"
                    animate={index === currentSlide ? "visible" : "hidden"}
                    className="absolute bottom-0 right-0 z-0 w-48 h-48"
                  >
                    <img
                      src={slide.secondaryImage}
                      alt={`${slide.title} - Secondary`}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => handleManualNavigation(goToPrevSlide)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      <button
        onClick={() => handleManualNavigation(goToNextSlide)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleManualNavigation(() => setCurrentSlide(index))}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'w-8 bg-[#AD5C10]'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;