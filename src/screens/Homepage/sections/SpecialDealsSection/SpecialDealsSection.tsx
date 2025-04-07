import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const SpecialDealsSection = (): JSX.Element => {
  return (
    <section className="w-full py-10 bg-[#f2f2f2] overflow-hidden">
      <div className="container flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center md:items-start space-y-6 md:w-1/2">
          <Button className="bg-[#ad5c10] hover:bg-[#ad5c10]/90 text-white font-semibold rounded-[10px] px-6">
            <span className="font-['DM_Sans',Helvetica] text-xl">Hurry Up</span>
          </Button>

          <Card className="border-none shadow-none bg-transparent">
            <CardContent className="p-0 flex flex-col items-center md:items-start space-y-4">
              <p className="font-['Overpass',Helvetica] font-light text-[#3b3838] text-xl text-center md:text-left">
                up to 20% OFF
              </p>

              <h2 className="font-['Gabarito',Helvetica] font-bold text-[#d33b09] text-6xl text-center md:text-left whitespace-nowrap">
                Check it Out
              </h2>

              <p className="font-['Overpass',Helvetica] font-light text-grey-900 text-xl text-center md:text-left">
                20 Feb to 28 Feb
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            className="w-full max-w-[457px] h-auto object-cover mx-auto"
            alt="Camera pic"
            src="/camera-pic.png"
          />
        </div>
      </div>
    </section>
  );
};
