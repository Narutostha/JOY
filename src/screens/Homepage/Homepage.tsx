import React from "react";
import NavbarSection from "./sections/NavbarSection/NavbarSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { PopularCategories } from "./sections/PopularCategories/PopularCategories";
import { NewArrivals } from "./sections/NewArrivals/NewArrivals";
import { TopSelling } from "./sections/TopSelling/TopSelling";
import { PaymentOptions } from "./sections/PaymentOptions/PaymentOptions";
import { NewsletterSection } from "./sections/NewsletterSection/NewsletterSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { FloatingCart } from "../../components/FloatingCart";

export const Homepage = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavbarSection />
      <main className="pt-[150px] sm:pt-[170px] md:pt-[80px]">
        <HeroSection />
        <PopularCategories />
        <NewArrivals />
        <TopSelling />
        <PaymentOptions />
        <NewsletterSection />
      </main>
      <FloatingCart />
      <FooterSection />
    </div>
  );
};

export default Homepage;