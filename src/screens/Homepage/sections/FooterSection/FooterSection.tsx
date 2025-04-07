import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const FooterSection = (): JSX.Element => {
  // Store data for footer links to make the code more maintainable
  const exploreLinks = [
    "About Us",
    "Contact Us",
    "Location",
    "EMI",
    "Account",
    "Cart",
  ];

  const helpLinks = [
    "Customer Support",
    "Delievery Details",
    "Terms & Conditions",
    "Privacy Policy",
  ];

  const categoryLinks = [
    "SamrtPhones",
    "iPads",
    "Cameras",
    "SmartWatches",
    "Apple Accessories",
    "Cover and Cases",
    "iPad Accessories",
    "Mac Accessories",
    "Gaming Products",
    "HeadPhones",
    "Speakers",
  ];

  const socialIcons = [
    { src: "/iconss-7.svg", alt: "Iconss" },
    { src: "/iconss-16.svg", alt: "Iconss" },
    { src: "/iconss-10.svg", alt: "Iconss" },
  ];

  const paymentMethods = [
    {
      src: "/esewa-logo-1.png",
      alt: "Esewa logo",
      width: "58px",
      height: "15px",
    },
    {
      src: "/logo-white-1.png",
      alt: "Logo white",
      width: "50px",
      height: "15px",
    },
    { src: "/group.png", alt: "Group", width: "59px", height: "3.5" },
  ];

  return (
    <footer className="relative w-full bg-[#212121] py-[100px] px-[100px]">
      <div className="flex flex-wrap gap-x-16 gap-y-8">
        {/* Company Info */}
        <div className="w-[318px]">
          <div className="h-[37px] relative mb-[28px]">
            <img
              className="absolute w-[198px] h-[37px] top-0 left-0 object-cover"
              alt="Joy finalogo"
              src="/joy-finalogo-1-1-1.png"
            />
            <img
              className="absolute w-20 h-[37px] top-0 left-[198px] object-cover"
              alt="Joy finalogo logo"
              src="/joy-finalogo-logo-1-1.png"
            />
          </div>

          <div className="[font-family:'DM_Sans',Helvetica] font-normal text-white text-base">
            <p>Apple Authorized Reseller</p>
            <p className="mt-4">Main Store Name</p>
            <p>Bhatbhateni Building, 2nd Floor.</p>
            <p>Opposite to China Pool, Koteshwor, Kathmandu.</p>
            <p>Kathmandu, Postal Code 44600</p>
            <p>
              Tel:{" "}
              <a
                href="tel:01-5339035"
                rel="noopener noreferrer"
                target="_blank"
                className="underline"
              >
                +977 01-
              </a>
              456723
            </p>
            <p>
              Cell:{" "}
              <a
                href="tel:+977 9801131696"
                rel="noopener noreferrer"
                target="_blank"
                className="underline"
              >
                +977 98
              </a>
              67854367
            </p>
          </div>
        </div>

        {/* Explore Links */}
        <div className="w-[102px]">
          <h3 className="[font-family:'Gabarito',Helvetica] font-bold text-white text-xl mb-4">
            Explore
          </h3>
          <ul className="space-y-[35px]">
            {exploreLinks.map((link, index) => (
              <li
                key={index}
                className="[font-family:'DM_Sans',Helvetica] font-normal text-white text-base cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Help Links */}
        <div className="w-[153px]">
          <h3 className="[font-family:'Gabarito',Helvetica] font-bold text-white text-xl mb-4">
            HELP
          </h3>
          <ul className="space-y-[36px]">
            {helpLinks.map((link, index) => (
              <li
                key={index}
                className="[font-family:'DM_Sans',Helvetica] font-normal text-white text-base cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div className="w-[169px]">
          <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-xl mb-4">
            Categories
          </h3>
          <ul className="space-y-[36px]">
            {categoryLinks.map((link, index) => (
              <li
                key={index}
                className={`font-normal text-white text-base cursor-pointer ${
                  index === 0 || index === 1 || index === 3
                    ? "[font-family:'Overpass',Helvetica]"
                    : "[font-family:'DM_Sans',Helvetica]"
                }`}
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Connect and Payment */}
        <div className="w-[171px]">
          <div className="mb-[22px]">
            <h3 className="[font-family:'Gabarito',Helvetica] font-bold text-white text-xl mb-2">
              Connect With Us
            </h3>
            <div className="flex gap-[11px] mt-2">
              {socialIcons.map((icon, index) => (
                <div
                  key={index}
                  className="w-10 h-[35px] bg-[#333131] rounded-[19.96px/17.5px] border border-solid border-[#4d4d4d] flex items-center justify-center cursor-pointer"
                >
                  <img
                    className="w-[18px] h-[15px]"
                    alt={icon.alt}
                    src={icon.src}
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="[font-family:'Gabarito',Helvetica] font-bold text-white text-xl mb-4">
              Payment Methods
            </h3>
            <div className="flex flex-wrap gap-4">
              <img
                className="w-[58px] h-[15px] object-cover"
                alt="Esewa logo"
                src="/esewa-logo-1.png"
              />
              <img
                className="w-[50px] h-[15px] object-cover"
                alt="Logo white"
                src="/logo-white-1.png"
              />
              <div className="w-[59px] h-[15px] mt-[11px]">
                <img className="w-[59px] h-3.5" alt="Group" src="/group.png" />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="w-[212px] mt-[100px] ml-auto">
          <h3 className="[font-family:'Gabarito',Helvetica] font-bold text-white text-xl mb-4">
            Contact Info
          </h3>
          <div className="[font-family:'Overpass',Helvetica] font-normal text-white text-sm space-y-[9px]">
            <p>BhatBhateni Building 2nd Floor</p>
            <p>Koteshwor, Kathmandu</p>
            <p>Postal Code 44600</p>
            <p className="underline">Info@joystore.com.np</p>
            <p>
              Tel: <span className="font-semibold">01-456734</span>
            </p>
            <p>
              Phone: <span className="font-bold">+977 9867015432</span>
            </p>
            <p>
              Phone: <span className="font-bold">+977 9867015432</span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-[142px]">
        <Separator className="bg-white/20 mb-5" />
        <div className="flex items-center">
          <img
            className="w-[27px] h-[27px] mr-2 object-cover"
            alt="Copyright symbol"
            src="/copyright-symbol-png-11434-1.png"
          />
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-white text-lg">
            2025 JoyStore.com | Powered by Neptune Technologies
          </p>
        </div>
      </div>
    </footer>
  );
};
