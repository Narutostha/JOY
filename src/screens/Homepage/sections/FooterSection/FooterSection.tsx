import React from "react";

export const FooterSection: React.FC = () => {
  // Store data for footer links to make the code more maintainable
  const exploreLinks: string[] = [
    "About Us",
    "Contact Us",
    "Location",
    "EMI",
    "Account",
    "Cart",
  ];

  const helpLinks: string[] = [
    "Customer Support",
    "Delivery Details",
    "Terms & Conditions",
    "Privacy Policy",
  ];

  const categoryLinks: string[] = [
    "SmartPhones",
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

  interface SocialIcon {
    src: string;
    alt: string;
  }

  const socialIcons: SocialIcon[] = [
    { src: "/iconss-7.svg", alt: "Facebook" },
    { src: "/iconss-16.svg", alt: "Instagram" },
    { src: "/iconss-10.svg", alt: "Twitter" },
  ];

  interface PaymentMethod {
    src: string;
    alt: string;
  }

  const paymentMethods: PaymentMethod[] = [
    {
      src: "/esewa-logo-1.png",
      alt: "Esewa logo",
    },
    {
      src: "/logo-white-1.png",
      alt: "Logo white",
    },
    { 
      src: "/group.png", 
      alt: "Group" 
    },
  ];

  return (
    <footer className="w-full bg-[#212121] py-12 px-4 md:py-16 md:px-8 lg:py-24 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="h-[37px] relative mb-6">
              <img
                className="w-[198px] h-[37px] object-cover"
                alt="Joy finalogo"
                src="/joy-finalogo-1-1-1.png"
              />
              <img
                className="absolute w-20 h-[37px] top-0 left-[198px] object-cover"
                alt="Joy finalogo logo"
                src="/joy-finalogo-logo-1-1.png"
              />
            </div>

            <div className="text-white text-sm md:text-base space-y-2">
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
                  className="underline hover:text-gray-300 transition-colors"
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
                  className="underline hover:text-gray-300 transition-colors"
                >
                  +977 98
                </a>
                67854367
              </p>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="font-bold text-white text-lg md:text-xl mb-4">
              Explore
            </h3>
            <ul className="space-y-3 md:space-y-4">
              {exploreLinks.map((link, index) => (
                <li
                  key={index}
                  className="font-normal text-white text-sm md:text-base cursor-pointer hover:text-gray-300 transition-colors"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="font-bold text-white text-lg md:text-xl mb-4">
              HELP
            </h3>
            <ul className="space-y-3 md:space-y-4">
              {helpLinks.map((link, index) => (
                <li
                  key={index}
                  className="font-normal text-white text-sm md:text-base cursor-pointer hover:text-gray-300 transition-colors"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="hidden sm:block lg:col-span-1">
            <h3 className="font-bold text-white text-lg md:text-xl mb-4">
              Categories
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {categoryLinks.slice(0, 6).map((link, index) => (
                <li
                  key={index}
                  className="font-normal text-white text-sm md:text-base cursor-pointer hover:text-gray-300 transition-colors"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Categories - hidden on small screens */}
          <div className="hidden xl:block">
            <h3 className="font-bold text-white text-lg md:text-xl mb-4 opacity-0">
              _
            </h3>
            <ul className="space-y-2 md:space-y-3 mt-11">
              {categoryLinks.slice(6).map((link, index) => (
                <li
                  key={index}
                  className="font-normal text-white text-sm md:text-base cursor-pointer hover:text-gray-300 transition-colors"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect and Payment Methods */}
          <div>
            <div className="mb-8">
              <h3 className="font-bold text-white text-lg md:text-xl mb-4">
                Connect With Us
              </h3>
              <div className="flex gap-3 mt-2">
                {socialIcons.map((icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-[#333131] rounded-full border border-solid border-[#4d4d4d] flex items-center justify-center cursor-pointer hover:bg-[#444242] transition-colors"
                  >
                    <img
                      className="w-[18px] h-[15px]"
                      alt={icon.alt}
                      src={icon.src}
                    />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-white text-lg md:text-xl mb-4">
                Payment Methods
              </h3>
              <div className="flex flex-wrap gap-4">
                {paymentMethods.map((method, index) => (
                  <img
                    key={index}
                    className="h-[15px] object-contain"
                    alt={method.alt}
                    src={method.src}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-3 xl:col-span-1">
            <h3 className="font-bold text-white text-lg md:text-xl mb-4">
              Contact Info
            </h3>
            <div className="text-white text-sm space-y-2">
              <p>BhatBhateni Building 2nd Floor</p>
              <p>Koteshwor, Kathmandu</p>
              <p>Postal Code 44600</p>
              <p className="underline cursor-pointer hover:text-gray-300 transition-colors">
                Info@joystore.com.np
              </p>
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
        <div className="mt-12 md:mt-16 lg:mt-24">
          <hr className="border-white/20 mb-6" />
          <div className="flex items-center">
            <img
              className="w-6 h-6 mr-2 object-cover"
              alt="Copyright symbol"
              src="/copyright-symbol-png-11434-1.png"
            />
            <p className="text-white text-sm md:text-base">
              2025 JoyStore.com | Powered by Neptune Technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;