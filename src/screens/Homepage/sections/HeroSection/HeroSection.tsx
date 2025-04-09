import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React, { useState, useEffect, useCallback } from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  // Multiple hero slides data
  const heroSlides = [
    {
      id: 1,
      title: "Apple Watch Series",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \nLorem Ipsum has been the industry's standard dummy text.",
      buttonText: "Shop Now",
      image: "/apple-watch-image.png",
      bgColor: "#f2f2f2",
    },
    {
      id: 2,
      title: "iPhone 16 Pro",
      description:
        "Experience the next generation of iPhone with revolutionary features and breakthrough technology. Designed to transform how you connect, create, and communicate.",
      buttonText: "Explore",
      image: "/iphone-16-pro.png",
      bgColor: "#e8f0fe",
    },
    {
      id: 3,
      title: "MacBook Air M3",
      description:
        "Incredibly thin and light with the blazing-fast M3 chip. Perfect for everyday tasks and creative projects with all-day battery life.",
      buttonText: "Learn More",
      image: "/macbook-air.png",
      bgColor: "#f5f5f7",
    },
    {
      id: 4,
      title: "AirPods Pro",
      description:
        "Immersive sound with active noise cancellation and adaptive transparency. Custom spatial audio with dynamic head tracking for an unparalleled listening experience.",
      buttonText: "Buy Now",
      image: "/airpods-pro.png",
      bgColor: "#f0f0f0",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Function to go to next slide
  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
  }, [heroSlides.length]);

  // Function to go to previous slide
  const goToPrevSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + heroSlides.length) % heroSlides.length);
  }, [heroSlides.length]);

  // Auto change slides every 3 seconds
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      intervalId = setInterval(goToNextSlide, 3000);
    }
    
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isAutoPlaying, goToNextSlide]);
  
  // Pause auto-play when user interacts with navigation
  const handleManualNavigation = (callback: () => void) => {
    setIsAutoPlaying(false); // Pause autoplay
    callback(); // Execute the navigation callback
    
    // Resume autoplay after 5 seconds of inactivity
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 5000);
  };

  const currentHero = heroSlides[currentSlide];

  return (
    <section 
      className="relative w-full h-[672px] transition-colors duration-500 mt-[150px] sm:mt-[170px] md:mt-[80px]"
      style={{ backgroundColor: currentHero.bgColor }}
    >
      <div className="relative w-full max-w-[1204px] h-[362px] mx-auto pt-28 px-4 sm:px-8 lg:px-[100px]">
        <div className="relative w-full h-[344px]">
          {/* Images with transition */}
          {heroSlides.map((slide, index) => (
            <img
              key={slide.id}
              className={`absolute w-full md:w-[611px] h-auto md:h-[344px] top-0 right-0 object-cover max-w-full transition-opacity duration-500 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              alt={slide.title}
              src={slide.image}
              aria-hidden={index !== currentSlide}
            />
          ))}

          <div className="absolute w-full md:w-[650px] top-52 left-0 font-['Overpass',Helvetica] font-semibold text-[#6c6565] text-sm sm:text-base transition-opacity duration-500">
            {currentHero.description}
          </div>
        </div>

        <h1 className="absolute h-[72px] top-[119px] left-4 sm:left-8 lg:left-[100px] font-['Gabarito',Helvetica] font-semibold text-[#1c1b1b] text-4xl sm:text-5xl md:text-6xl whitespace-normal md:whitespace-nowrap transition-opacity duration-500">
          {currentHero.title}
        </h1>

        <Button className="absolute top-[313px] left-4 sm:left-8 lg:left-[100px] flex items-center justify-center gap-2.5 p-4 w-40 h-[49px] bg-[#ad5c10] rounded-[40px] hover:bg-[#9a520e] transition-all duration-300">
          <span className="font-['DM_Sans',Helvetica] font-normal text-black text-base">
            {currentHero.buttonText}
          </span>
          <img className="w-[19px] h-[19px]" alt="Next" src="/next-1-1.png" />
        </Button>
      </div>

      {/* Progress indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "w-8 bg-[#ad5c10]" 
                : "bg-gray-400 hover:bg-gray-600"
            }`}
            onClick={() => handleManualNavigation(() => setCurrentSlide(index))}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute w-[43px] h-[42px] top-[281px] right-[27px] bg-[#443f3f] rounded-[21px] border-none hover:bg-[#333030] z-10"
        onClick={() => handleManualNavigation(goToNextSlide)}
        aria-label="Next slide"
      >
        <ChevronRightIcon className="h-[18px] w-[18px] text-white" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute w-[43px] h-[42px] top-[281px] left-[27px] bg-[#443f3f] rounded-[21px] border-none hover:bg-[#333030] z-10"
        onClick={() => handleManualNavigation(goToPrevSlide)}
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="h-[18px] w-[18px] text-white" />
      </Button>
    </section>
  );
};

export default HeroSection;