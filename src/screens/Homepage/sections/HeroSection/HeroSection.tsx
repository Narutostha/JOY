import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  // Data for the hero section
  const heroData = {
    title: "Apple Watch Series",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \nLorem Ipsum has been the industry's standard dummy text.",
    buttonText: "Shop Now",
    image: "/apple-watch-image.png",
  };

  return (
    <section className="relative w-full h-[672px] bg-[#f2f2f2]">
      <div className="relative w-full max-w-[1204px] h-[362px] mx-auto pt-28 px-[100px]">
        <div className="relative w-full h-[344px]">
          <img
            className="absolute w-[611px] h-[344px] top-0 right-0 object-cover"
            alt="Apple watch image"
            src={heroData.image}
          />

          <div className="absolute w-[650px] top-52 left-0 font-['Overpass',Helvetica] font-semibold text-[#6c6565] text-base">
            {heroData.description}
          </div>
        </div>

        <h1 className="absolute h-[72px] top-[119px] left-0 font-['Gabarito',Helvetica] font-semibold text-[#1c1b1b] text-6xl whitespace-nowrap">
          {heroData.title}
        </h1>

        <Button className="absolute top-[313px] left-0 flex items-center justify-center gap-2.5 p-4 w-40 h-[49px] bg-[#ad5c10] rounded-[40px] hover:bg-[#9a520e]">
          <span className="font-['DM_Sans',Helvetica] font-normal text-black text-base">
            {heroData.buttonText}
          </span>
          <img className="w-[19px] h-[19px]" alt="Next" src="/next-1-1.png" />
        </Button>
      </div>

      {/* Navigation buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute w-[43px] h-[42px] top-[281px] right-[27px] bg-[#443f3f] rounded-[21px] border-none hover:bg-[#333030]"
      >
        <ChevronRightIcon className="h-[18px] w-[18px] text-white" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute w-[43px] h-[42px] top-[281px] left-[27px] bg-[#443f3f] rounded-[21px] border-none hover:bg-[#333030]"
      >
        <ChevronLeftIcon className="h-[18px] w-[18px] text-white" />
      </Button>
    </section>
  );
};
