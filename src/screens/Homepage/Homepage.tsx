import React from "react";
import Navbar from "../Homepage/sections/NavbarSection/NavbarSection";
import { HeroSection } from "./sections/HeroSection";
import { SpecialDealsSection } from "./sections/SpecialDealsSection";
import { CameraDealsSection } from "./sections/CameraDealsSection/CameraDealsSection";
import { SpeakerDealsSection } from "./sections/SpeakerDealsSection";
import { CustomerReviewsSection } from "./sections/CustomerReviewsSection";
import { NewsletterSection } from "./sections/NewsletterSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";

export const Homepage = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full relative">
        {/* Navbar Component */}
        <Navbar />
        
        {/* Rest of the page content */}
        <HeroSection />
        <SpecialDealsSection />
        {/* Other sections... */}
        <CameraDealsSection />
        <SpeakerDealsSection />
        <CustomerReviewsSection />
        <NewsletterSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default Homepage;