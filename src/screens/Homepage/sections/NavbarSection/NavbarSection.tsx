import React, { useState, useEffect } from "react";
import { ChevronDownIcon, ShoppingCartIcon, UserIcon, MenuIcon, XIcon, SearchIcon } from "lucide-react";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Navigation menu items with dropdown content
  interface DropdownItem {
    name: string;
    link: string;
  }

  interface NavItem {
    name: string;
    hasDropdown: boolean;
    dropdownItems?: DropdownItem[];
  }

  const navItems: NavItem[] = [
    {
      name: "Apple Products",
      hasDropdown: true,
      dropdownItems: [
        { name: "iPhone", link: "/iphone" },
        { name: "iPad", link: "/ipad" },
        { name: "MacBook", link: "/macbook" },
        { name: "Apple Watch", link: "/apple-watch" },
        { name: "AirPods", link: "/airpods" }
      ]
    },
    {
      name: "Accessories",
      hasDropdown: true,
      dropdownItems: [
        { name: "Phone Cases", link: "/cases" },
        { name: "Chargers", link: "/chargers" },
        { name: "Screen Protectors", link: "/screen-protectors" },
        { name: "Stands", link: "/stands" }
      ]
    },
    {
      name: "Marshall",
      hasDropdown: true,
      dropdownItems: [
        { name: "Headphones", link: "/marshall-headphones" },
        { name: "Speakers", link: "/marshall-speakers" },
        { name: "Amplifiers", link: "/marshall-amplifiers" }
      ]
    },
    {
      name: "JBL",
      hasDropdown: true,
      dropdownItems: [
        { name: "Earbuds", link: "/jbl-earbuds" },
        { name: "Bluetooth Speakers", link: "/jbl-speakers" },
        { name: "Soundbars", link: "/jbl-soundbars" }
      ]
    },
    {
      name: "Belkin",
      hasDropdown: true,
      dropdownItems: [
        { name: "Cables", link: "/belkin-cables" },
        { name: "Power Banks", link: "/belkin-power-banks" },
        { name: "Wireless Chargers", link: "/belkin-wireless-chargers" }
      ]
    },
    {
      name: "Momax",
      hasDropdown: true,
      dropdownItems: [
        { name: "Phone Accessories", link: "/momax-phone-accessories" },
        { name: "Smart Home", link: "/momax-smart-home" },
        { name: "Travel Accessories", link: "/momax-travel" }
      ]
    },
    {
      name: "Services",
      hasDropdown: true,
      dropdownItems: [
        { name: "Repair", link: "/repair" },
        { name: "Trade-In", link: "/trade-in" },
        { name: "Extended Warranty", link: "/warranty" },
        { name: "Technical Support", link: "/support" }
      ]
    },
  ];

  // Social media links
  interface SocialLink {
    icon: string;
    alt: string;
    link: string;
  }

  const socialLinks: SocialLink[] = [
    { icon: "/iconss-8.svg", alt: "Facebook", link: "#" },
    { icon: "/iconss-9.svg", alt: "Twitter", link: "#" },
    { icon: "/iconss-22.svg", alt: "Instagram", link: "#" },
    { icon: "/iconss-8.svg", alt: "LinkedIn", link: "#" }
  ];

  // Listen for scroll events to add shadow and background color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDropdown = (index: number) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Close any open dropdown when toggling mobile menu
    setActiveDropdown(null);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown !== null && !(event.target as Element).closest('.nav-item-dropdown')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  return (
    <header className={`w-full bg-white fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      {/* Top bar */}
      <div className="w-full border-b border-[#a8a5a5] bg-white hidden sm:block">
        <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 lg:px-24 py-2 max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-2 sm:mb-0">
            {/* Social media icons */}
            <div className="flex space-x-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="w-6 h-[23px] bg-black rounded-[11.78px/11.5px] flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <img
                    className="w-2.5 h-2.5"
                    alt={social.alt}
                    src={social.icon}
                  />
                </a>
              ))}
            </div>

            <div className="font-medium text-black text-base">
              Our Store Locations
            </div>
          </div>

          <div className="text-center font-black text-[#d33b09] text-2xl sm:text-[32px] tracking-[-0.32px] mb-2 sm:mb-0">
            Special Deals
          </div>

          <div className="flex items-center">
            <div className="font-semibold text-black text-base">
              <span className="font-semibold">NPR</span>
              <span className="font-medium"> Currency</span>
            </div>
            <ChevronDownIcon className="w-4 h-4 ml-1" />
          </div>
        </div>
      </div>

      {/* Logo and navigation */}
      <div className="flex justify-between items-center px-4 sm:px-8 lg:px-24 py-4 max-w-[1440px] mx-auto">
        <div className="flex items-center">
          <div className="relative h-[47px]">
            <img
              className="w-[120px] md:w-[154px] h-[29px] object-cover"
              alt="Joy finalogo"
              src="/joy-finalogo-1-1-1.png"
            />
            <img
              className="absolute w-[80px] md:w-[102px] h-[47px] top-0 left-[110px] md:left-[147px] object-cover"
              alt="Joy finalogo logo"
              src="/joy-finalogo-logo-1-1.png"
            />
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="sm:hidden flex items-center">
          <button 
            onClick={handleMobileMenuToggle}
            className="p-2 rounded-md hover:bg-gray-100"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:block">
          <nav className="max-w-none">
            <ul className="flex space-x-1 lg:space-x-2">
              {navItems.map((item, index) => (
                <li key={index} className="relative nav-item-dropdown">
                  <button
                    className="flex items-center justify-center p-2 font-semibold text-black text-xs sm:text-sm lg:text-base hover:text-[#d33b09] transition-colors"
                    onClick={() => toggleDropdown(index)}
                    aria-expanded={activeDropdown === index}
                    aria-haspopup="true"
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDownIcon className={`w-4 h-4 ml-1 transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} />
                    )}
                  </button>
                  {/* Dropdown menu */}
                  {item.hasDropdown && activeDropdown === index && (
                    <div className="absolute z-10 left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-2">
                      {item.dropdownItems?.map((dropdownItem, idx) => (
                        <a
                          key={idx}
                          href={dropdownItem.link}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#d33b09]"
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Desktop Icons */}
        <div className="hidden sm:flex items-center space-x-4">
          <button className="hover:text-[#d33b09] transition-colors" aria-label="Search">
            <SearchIcon className="w-6 h-6 sm:w-[27px] sm:h-[27px]" />
          </button>
          <button className="hover:text-[#d33b09] transition-colors" aria-label="Wishlist">
            <img
              className="w-[30px] h-[30px] sm:w-[41px] sm:h-[41px]"
              alt="Wishlist"
              src="/-pngtree-love-interface-line-vector-single-5184394-1.png"
            />
          </button>
          <button className="hover:text-[#d33b09] transition-colors" aria-label="User Account">
            <UserIcon className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
          <button className="relative hover:text-[#d33b09] transition-colors" aria-label="Shopping Cart">
            <ShoppingCartIcon className="w-6 h-6 sm:w-8 sm:h-8" />
            <div className="absolute w-4 h-4 top-0 left-0 bg-[#f3e2e2] rounded-full flex items-center justify-center">
              <div className="font-medium text-black text-xs">
                0
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-t border-gray-200 py-2 px-4 max-h-[calc(100vh-120px)] overflow-y-auto">
          {/* Mobile nav items */}
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <button
                  className="flex items-center justify-between w-full py-2 text-left font-semibold"
                  onClick={() => toggleDropdown(index)}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDownIcon className={`w-4 h-4 transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} />
                  )}
                </button>
                {/* Mobile dropdown */}
                {item.hasDropdown && activeDropdown === index && (
                  <div className="pl-4 mt-1 border-l-2 border-gray-200">
                    {item.dropdownItems?.map((dropdownItem, idx) => (
                      <a
                        key={idx}
                        href={dropdownItem.link}
                        className="block py-2 text-sm text-gray-700 hover:text-[#d33b09]"
                      >
                        {dropdownItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
          
          {/* Mobile icons */}
          <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
            <button className="p-2 hover:text-[#d33b09]" aria-label="Search">
              <SearchIcon className="w-6 h-6" />
            </button>
            <button className="p-2 hover:text-[#d33b09]" aria-label="Wishlist">
              <img
                className="w-6 h-6"
                alt="Wishlist"
                src="/-pngtree-love-interface-line-vector-single-5184394-1.png"
              />
            </button>
            <button className="p-2 hover:text-[#d33b09]" aria-label="User Account">
              <UserIcon className="w-6 h-6" />
            </button>
            <button className="p-2 relative hover:text-[#d33b09]" aria-label="Shopping Cart">
              <ShoppingCartIcon className="w-6 h-6" />
              <div className="absolute w-4 h-4 top-0 right-0 bg-[#f3e2e2] rounded-full flex items-center justify-center">
                <div className="font-medium text-black text-[10px]">
                  0
                </div>
              </div>
            </button>
          </div>
          
          {/* Mobile special deals & currency */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="text-center font-bold text-[#d33b09] text-xl mb-3">
              Special Deals
            </div>
            <div className="flex justify-center items-center">
              <div className="font-semibold text-black text-sm">
                <span className="font-semibold">NPR</span>
                <span className="font-medium"> Currency</span>
              </div>
              <ChevronDownIcon className="w-4 h-4 ml-1" />
            </div>
          </div>
        </div>
      )}

      <div className="w-full h-px bg-gray-200"></div>
    </header>
  );
};

export default Navbar;