import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const NewsletterSection = (): JSX.Element => {
  return (
    <section className="w-full py-24 bg-[#f2f2f2]">
      <div className="container max-w-3xl mx-auto px-4">
        <Card className="border-0 bg-transparent shadow-none">
          <CardContent className="p-0 space-y-8">
            <h2 className="text-4xl font-semibold text-black text-center font-['Gabarito',Helvetica]">
              Stay Updated
            </h2>

            <p className="text-xl font-medium text-[#4f4f4f] text-center font-['Overpass',Helvetica]">
              Subscribe to our newsletter and get 10% off&nbsp;&nbsp;of your
              first purchase
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input
                  className="h-[61px] px-[22px] py-[7px] text-xl text-[#4f4f4f] font-['DM_Sans',Helvetica] rounded-[10px] border-[#c6c6c6]"
                  placeholder="Enter your email"
                />
              </div>
              <Button className="h-[61px] bg-[#ad5c10] hover:bg-[#964f0e] text-xl font-semibold text-white font-['DM_Sans',Helvetica]">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
