import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const CameraDealsSection = (): JSX.Element => {
  return (
    <Card className="w-full max-w-[589px] h-auto rounded-[10px] bg-[#f2f2f2] overflow-hidden">
      <CardContent className="p-6 flex flex-col items-center">
        <div className="text-center mb-6">
          <h3 className="font-['Overpass',Helvetica] text-[22px] text-[#000000a6] mb-2">
            Security Smart Camera
          </h3>
          <h2 className="font-['Gabarito',Helvetica] text-[32px] text-black">
            Just Starting at NPR 10,000
          </h2>
        </div>

        <Button className="bg-[#ad5c10] hover:bg-[#964f0d] text-white rounded-[40px] px-6 py-3 mb-6">
          Shop Now
        </Button>

        <img
          className="w-[203px] h-[169px] object-cover"
          alt="Security Camera"
          src="/image-7-1.png"
        />
      </CardContent>
    </Card>
  );
};
