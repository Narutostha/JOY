import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const SpeakerDealsSection = (): JSX.Element => {
  return (
    <Card className="w-full max-w-[569px] h-auto rounded-[10px] bg-[#f2f2f2] overflow-hidden">
      <CardContent className="flex flex-col items-center justify-center p-6 pt-16 pb-16">
        <div className="text-center mb-8">
          <p className="font-['Overpass',Helvetica] font-normal text-[#000000a6] text-[22px] mb-2">
            Unmatchable Speaker
          </p>
          <h3 className="font-['Gabarito',Helvetica] font-normal text-black text-[32px]">
            Just Starting at NPR 5,000
          </h3>
        </div>

        <Button className="bg-[#ad5c10] text-white rounded-[40px] h-[49px] w-40 font-['DM_Sans',Helvetica] hover:bg-[#964f0e] mb-8">
          Shop Now
        </Button>

        <img
          className="w-48 h-44 object-cover"
          alt="Speaker"
          src="/image-3-1.png"
        />
      </CardContent>
    </Card>
  );
};
