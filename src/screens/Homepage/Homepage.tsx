import React from "react";
import NavbarSection from "./sections/NavbarSection/NavbarSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { PopularCategories } from "./sections/PopularCategories/PopularCategories";
import { NewArrivals } from "./sections/NewArrivals/NewArrivals";
import { TopSelling } from "./sections/TopSelling/TopSelling";
import { PaymentOptions } from "./sections/PaymentOptions/PaymentOptions";
import { NewsletterSection } from "./sections/NewsletterSection/NewsletterSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";

export const Homepage = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavbarSection />
      <main>
        <HeroSection />
        <PopularCategories />
        <NewArrivals />
        <TopSelling />
        <PaymentOptions />
        <NewsletterSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Homepage;