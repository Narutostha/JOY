import { ChevronDownIcon, ShoppingCartIcon, UserIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { Separator } from "../../components/ui/separator";
import { CameraDealsSection } from "./sections/CameraDealsSection/CameraDealsSection";
import { CustomerReviewsSection } from "./sections/CustomerReviewsSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { NewsletterSection } from "./sections/NewsletterSection";
import { SpeakerDealsSection } from "./sections/SpeakerDealsSection";
import { SpecialDealsSection } from "./sections/SpecialDealsSection";

export const Homepage = (): JSX.Element => {
  // Popular categories data
  const popularCategories = [
    { name: "SmartPhone", image: "/image-21-1.png" },
    { name: "SmartWatch", image: "/image-10-2.png" },
    { name: "iPad", image: "/image-22-2.png" },
    { name: "Laptop", image: "/image-6-2.png" },
    { name: "HeadPhone", image: "/image-19-2.png" },
  ];

  // Product data for New Arrivals and Top Selling sections
  const productData = [
    {
      name: "Apple Watch SE",
      price: "NPR 1800.00",
      originalPrice: "NPR 2500.00",
      image: "/image-10-2.png",
      stars: 4.5,
    },
    {
      name: "iPhone 16 128 GB",
      price: "NPR 1,50.000.00",
      originalPrice: "NPR 2,00,000.00",
      image: "/image-17-1-3.png",
      stars: 4,
    },
    {
      name: "770 NC Wireless HeadPhone",
      price: "NPR 2,000.00",
      originalPrice: "NPR 2500.00",
      image: "/image-5-1-1.png",
      stars: 4,
    },
    {
      name: "iPad Air 11 inch (2024-M2) 1TB WiFi",
      price: "NPR 1,50.000.00",
      originalPrice: "NPR 2,00,000.00",
      image: "/image-4-1-1.png",
      stars: 3,
    },
  ];

  // Brand logos data
  const brandLogos = [
    { image: "/pngimg-com---apple-logo-png19690-3.png" },
    { image: "/belkin-logo-2.png" },
    {
      image:
        "/kisspng-guitar-amplifier-marshall-amplification-logo-font-marsha-2.png",
    },
  ];

  // Payment options data
  const paymentOptions = [
    { image: "/nepalpay-4.png", logo: "/logo-white-5.png" },
    { image: "/nepalpay-4.png", logo: "/logo-white-5.png" },
    { image: "/nepalpay-4.png", logo: "/logo-white-5.png" },
    { image: "/nepalpay-4.png", logo: "/logo-white-5.png" },
  ];

  // Navigation menu items
  const navItems = [
    { name: "Apple Products", hasDropdown: true },
    { name: "Accessories", hasDropdown: true },
    { name: "Marshell", hasDropdown: true },
    { name: "JBL", hasDropdown: true },
    { name: "Belkin", hasDropdown: true },
    { name: "Momax", hasDropdown: true },
    { name: "Services", hasDropdown: true },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full relative">
        {/* Top bar */}
        <div className="w-full border-b border-[#a8a5a5] bg-white">
          <div className="flex justify-between items-center px-24 py-2 max-w-[1440px] mx-auto">
            <div className="flex items-center space-x-4">
              {/* Social media icons */}
              <div className="flex space-x-2">
                <div className="w-6 h-[23px] bg-black rounded-[11.78px/11.5px] flex items-center justify-center">
                  <img
                    className="w-2.5 h-2.5"
                    alt="Social icon"
                    src="/iconss-8.svg"
                  />
                </div>
                <div className="w-6 h-[23px] bg-black rounded-[11.78px/11.5px] flex items-center justify-center">
                  <img
                    className="w-2.5 h-2.5"
                    alt="Social icon"
                    src="/iconss-9.svg"
                  />
                </div>
                <div className="w-6 h-[23px] bg-black rounded-[11.78px/11.5px] flex items-center justify-center">
                  <img
                    className="w-[7px] h-3"
                    alt="Social icon"
                    src="/iconss-22.svg"
                  />
                </div>
                <div className="w-6 h-[23px] bg-black rounded-[11.78px/11.5px] flex items-center justify-center">
                  <img
                    className="w-2.5 h-2.5"
                    alt="Social icon"
                    src="/iconss-8.svg"
                  />
                </div>
              </div>

              <div className="font-medium text-black text-base">
                Our Store Locations
              </div>
            </div>

            <div className="text-center [font-family:'Gabarito',Helvetica] font-black text-[#d33b09] text-[32px] tracking-[-0.32px]">
              Special Deals
            </div>

            <div className="flex items-center">
              <div className="font-semibold text-black text-base">
                <span className="font-semibold">NPR</span>
                <span className="font-medium"> Currency</span>
              </div>
              <img
                className="w-4 h-4 ml-1"
                alt="Dropdown icon"
                src="/iconss-2.svg"
              />
            </div>
          </div>
        </div>

        {/* Logo and navigation */}
        <div className="flex justify-between items-center px-24 py-4 max-w-[1440px] mx-auto">
          <div className="flex items-center">
            <div className="relative h-[47px]">
              <img
                className="w-[154px] h-[29px] object-cover"
                alt="Joy finalogo"
                src="/joy-finalogo-1-1-1.png"
              />
              <img
                className="absolute w-[102px] h-[47px] top-0 left-[147px] object-cover"
                alt="Joy finalogo logo"
                src="/joy-finalogo-logo-1-1.png"
              />
            </div>
          </div>

          <NavigationMenu className="max-w-none">
            <NavigationMenuList className="flex space-x-2">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <div className="flex items-center justify-center p-2 font-semibold text-black text-base">
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDownIcon className="w-4 h-4 ml-1" />
                    )}
                  </div>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-4">
            <img className="w-[27px] h-[27px]" alt="Search" src="/iconss.svg" />
            <img
              className="w-[41px] h-[41px]"
              alt="Wishlist"
              src="/-pngtree-love-interface-line-vector-single-5184394-1.png"
            />
            <UserIcon className="w-8 h-8" />
            <div className="relative">
              <ShoppingCartIcon className="w-8 h-8" />
              <div className="absolute w-4 h-[17px] top-0 left-0 bg-[#f3e2e2] rounded-[100px] flex items-center justify-center">
                <div className="[font-family:'Gabarito',Helvetica] font-medium text-black text-xs">
                  0
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="w-full" />

        {/* Hero Section */}
        <div className="w-full relative">
          <HeroSection />
          <Button className="flex items-center justify-center gap-2.5 p-4 absolute top-[425px] left-[100px] bg-[#ad5c10] rounded-[40px] text-black">
            Shop Now
            <img className="w-[19px] h-[19px]" alt="Next" src="/next-1-1.png" />
          </Button>
        </div>

        {/* Popular Categories Section */}
        <div className="w-full py-16">
          <h2 className="text-center [font-family:'Gabarito',Helvetica] font-normal text-black text-[32px] mb-8">
            Popular Categories
          </h2>

          <div className="flex justify-center gap-8 px-24 relative">
            <button className="absolute left-10 top-1/2 transform -translate-y-1/2">
              <img
                className="w-[37px] h-[35px]"
                alt="Previous"
                src="/iconss-12.svg"
              />
            </button>

            <div className="flex gap-8">
              {popularCategories.map((category, index) => (
                <Card
                  key={index}
                  className="w-[197px] h-[222px] bg-[#f8f8f8] rounded-[10px] overflow-hidden"
                >
                  <CardContent className="p-0 flex flex-col items-center justify-between h-full">
                    <div className="flex items-center justify-center h-[140px]">
                      <img
                        className="object-cover max-h-[109px]"
                        alt={category.name}
                        src={category.image}
                      />
                    </div>
                    <div className="text-center py-4">
                      <div className="[font-family:'Overpass',Helvetica] font-normal text-grey-800 text-[22px]">
                        {category.name}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <button className="absolute right-10 top-1/2 transform -translate-y-1/2">
              <img
                className="w-[37px] h-[35px]"
                alt="Next"
                src="/iconss-1.svg"
              />
            </button>
          </div>
        </div>

        {/* Special Deals Section */}
        <SpecialDealsSection />

        {/* New Arrivals Section */}
        <div className="w-full py-16">
          <h2 className="text-center [font-family:'Gabarito',Helvetica] font-normal text-black text-[32px] mb-8">
            New Arrivals
          </h2>

          <div className="flex justify-between items-center px-24 mb-4">
            <div></div>
            <div className="flex items-center gap-2.5">
              <div className="[font-family:'Overpass',Helvetica] font-medium text-black text-lg">
                view all products
              </div>
              <div className="w-[27px] h-[23px] bg-[url(/arrow-right.svg)] bg-[100%_100%]"></div>
            </div>
          </div>

          <div className="flex justify-center gap-8 px-24 relative">
            <button className="absolute left-10 top-1/2 transform -translate-y-1/2">
              <img
                className="w-[37px] h-[35px]"
                alt="Previous"
                src="/iconss-12.svg"
              />
            </button>

            <div className="flex gap-8">
              {productData.map((product, index) => (
                <div key={index} className="flex flex-col">
                  <Card className="w-[203px] h-60 bg-[#f8f8f8] rounded-lg overflow-hidden mb-4">
                    <CardContent className="p-0 flex items-center justify-center h-full">
                      <img
                        className="object-cover"
                        alt={product.name}
                        src={product.image}
                      />
                    </CardContent>
                  </Card>

                  <div className="flex flex-col">
                    <div className="flex">
                      {Array(Math.floor(product.stars))
                        .fill(0)
                        .map((_, i) => (
                          <img
                            key={i}
                            className="w-[21px] h-5"
                            alt="Star"
                            src="/star-5.svg"
                          />
                        ))}
                      {product.stars % 1 > 0 && (
                        <img
                          className="w-2.5 h-[21px]"
                          alt="Half star"
                          src="/iconss-19.svg"
                        />
                      )}
                    </div>

                    <div className="font-medium text-black text-xl mt-2">
                      {product.name}
                    </div>

                    <div className="[font-family:'Overpass',Helvetica] font-bold text-[#d33b09] text-base mt-2">
                      {product.price}
                    </div>

                    <div className="relative mt-1">
                      <div className="[font-family:'Overpass',Helvetica] font-bold text-grey-600 text-sm">
                        {product.originalPrice}
                      </div>
                      <img
                        className="absolute w-full h-0.5 top-2"
                        alt="Line"
                        src="/line-2-6.svg"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="absolute right-10 top-1/2 transform -translate-y-1/2">
              <img
                className="w-[37px] h-[35px]"
                alt="Next"
                src="/iconss-1.svg"
              />
            </button>
          </div>
        </div>

        {/* Camera Deals Section */}
        <CameraDealsSection />

        {/* Speaker Deals Section */}
        <SpeakerDealsSection />

        {/* Top Selling Section */}
        <div className="w-full py-16">
          <h2 className="text-center [font-family:'Gabarito',Helvetica] font-normal text-black text-[32px] mb-8">
            Top Selling
          </h2>

          <div className="flex justify-between items-center px-24 mb-4">
            <div></div>
            <div className="flex items-center gap-2.5">
              <div className="[font-family:'Overpass',Helvetica] font-medium text-black text-lg">
                view all products
              </div>
              <div className="w-[27px] h-[23px] bg-[url(/arrow-right.svg)] bg-[100%_100%]"></div>
            </div>
          </div>

          <div className="flex justify-center gap-8 px-24 relative">
            <button className="absolute left-10 top-1/2 transform -translate-y-1/2">
              <img
                className="w-[37px] h-[35px]"
                alt="Previous"
                src="/iconss-12.svg"
              />
            </button>

            <div className="flex gap-8">
              {productData.map((product, index) => (
                <div key={index} className="flex flex-col">
                  <Card className="w-[203px] h-60 bg-[#f8f8f8] rounded-lg overflow-hidden mb-4">
                    <CardContent className="p-0 flex items-center justify-center h-full">
                      <img
                        className="object-cover"
                        alt={product.name}
                        src={product.image}
                      />
                    </CardContent>
                  </Card>

                  <div className="flex flex-col">
                    <div className="flex">
                      {Array(Math.floor(product.stars))
                        .fill(0)
                        .map((_, i) => (
                          <img
                            key={i}
                            className="w-[21px] h-5"
                            alt="Star"
                            src="/star-5.svg"
                          />
                        ))}
                      {product.stars % 1 > 0 && (
                        <img
                          className="w-2.5 h-[21px]"
                          alt="Half star"
                          src="/iconss-19.svg"
                        />
                      )}
                    </div>

                    <div className="font-medium text-black text-xl mt-2">
                      {product.name}
                    </div>

                    <div className="[font-family:'Overpass',Helvetica] font-bold text-[#d33b09] text-base mt-2">
                      {product.price}
                    </div>

                    <div className="relative mt-1">
                      <div className="[font-family:'Overpass',Helvetica] font-bold text-grey-600 text-sm">
                        {product.originalPrice}
                      </div>
                      <img
                        className="absolute w-full h-0.5 top-2"
                        alt="Line"
                        src="/line-2-6.svg"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="absolute right-10 top-1/2 transform -translate-y-1/2">
              <img
                className="w-[37px] h-[35px]"
                alt="Next"
                src="/iconss-1.svg"
              />
            </button>
          </div>
        </div>

        {/* Trusted Brands Section */}
        <div className="w-full py-14 bg-white">
          <div className="max-w-[1061px] mx-auto">
            <h3 className="text-center [font-family:'Overpass',Helvetica] font-semibold italic text-black text-xl mb-8">
              trusted by the top brands in the globe
            </h3>

            <div className="grid grid-cols-3 gap-8 mb-8">
              {brandLogos.map((logo, index) => (
                <div key={index} className="flex justify-center">
                  <img
                    className="h-[89px] object-cover"
                    alt="Brand logo"
                    src={logo.image}
                  />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-8">
              {brandLogos.map((logo, index) => (
                <div key={index} className="flex justify-center">
                  <img
                    className="h-[89px] object-cover"
                    alt="Brand logo"
                    src={logo.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <CustomerReviewsSection />

        {/* Payment Options Section */}
        <div className="w-full py-16">
          <h2 className="text-center [font-family:'Gabarito',Helvetica] font-normal text-black text-[32px] mb-8">
            Choose Your Payment Options
          </h2>

          <div className="flex justify-center gap-16 px-24 relative">
            <button className="absolute left-10 top-1/2 transform -translate-y-1/2">
              <img
                className="w-[37px] h-[35px]"
                alt="Previous"
                src="/iconss-12.svg"
              />
            </button>

            <div className="flex gap-16">
              {paymentOptions.map((option, index) => (
                <div key={index} className="flex items-center gap-4">
                  <img
                    className="w-[108px] h-[67px] object-cover"
                    alt="Payment option"
                    src={option.image}
                  />
                  <img
                    className="w-[117px] h-9 object-cover"
                    alt="Logo"
                    src={option.logo}
                  />
                </div>
              ))}
            </div>

            <button className="absolute right-10 top-1/2 transform -translate-y-1/2">
              <img
                className="w-[37px] h-[35px]"
                alt="Next"
                src="/iconss-1.svg"
              />
            </button>
          </div>
        </div>

        {/* Newsletter Section */}
        <NewsletterSection />

        {/* Footer Section */}
        <FooterSection />
      </div>
    </div>
  );
};
