import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ChevronDownIcon, ShoppingCartIcon, UserIcon, MenuIcon, XIcon, SearchIcon, Heart, Phone, Package } from "lucide-react";
import { SearchDialog } from "../../../../components/SearchDialog";
import { ProfileMenu } from "../../../../components/ProfileMenu";
import { useAtom } from 'jotai';
import { cartCountAtom } from "../../../../store/cart";
import { isSearchOpenAtom } from "../../../../store/search";

interface NavItem {
  name: string;
  hasDropdown: boolean;
  dropdownItems?: { name: string; link: string }[];
  link?: string;
}

const navItems: NavItem[] = [
  {
    name: "Apple",
    hasDropdown: true,
    dropdownItems: [
      { name: "iPhone", link: "/products?category=iphone" },
      { name: "iPad", link: "/products?category=ipad" },
      { name: "MacBook", link: "/products?category=macbook" },
      { name: "Apple Watch", link: "/products?category=apple-watch" },
      { name: "AirPods", link: "/products?category=airpods" }
    ]
  },
  {
    name: "Accessories",
    hasDropdown: true,
    dropdownItems: [
      { name: "Phone Cases", link: "/products/cases" },
      { name: "Chargers", link: "/products/chargers" },
      { name: "Screen Protectors", link: "/products/screen-protectors" },
      { name: "Stands", link: "/products/stands" }
    ]
  },
  {
    name: "Marshell",
    hasDropdown: true,
    dropdownItems: [
      { name: "Headphones", link: "/products/marshall-headphones" },
      { name: "Speakers", link: "/products/marshall-speakers" },
      { name: "Amplifiers", link: "/products/marshall-amplifiers" }
    ]
  },
  {
    name: "JBL",
    hasDropdown: true,
    dropdownItems: [
      { name: "Earbuds", link: "/products/jbl-earbuds" },
      { name: "Bluetooth Speakers", link: "/products/jbl-speakers" },
      { name: "Soundbars", link: "/products/jbl-soundbars" }
    ]
  },
  {
    name: "Belkin",
    hasDropdown: true,
    dropdownItems: [
      { name: "Cables", link: "/products/belkin-cables" },
      { name: "Power Banks", link: "/products/belkin-power-banks" },
      { name: "Wireless Chargers", link: "/products/belkin-wireless-chargers" }
    ]
  },
  {
    name: "Momax",
    hasDropdown: true,
    dropdownItems: [
      { name: "Phone Accessories", link: "/products/momax-phone-accessories" },
      { name: "Smart Home", link: "/products/momax-smart-home" },
      { name: "Travel Accessories", link: "/products/momax-travel" }
    ]
  },
  {
    name: "Bose",
    hasDropdown: true,
    dropdownItems: [
      { name: "Headphones", link: "/products/bose-headphones" },
      { name: "Speakers", link: "/products/bose-speakers" },
      { name: "Soundbars", link: "/products/bose-soundbars" }
    ]
  },
  {
    name: "ING",
    hasDropdown: true,
    dropdownItems: [
      { name: "Accessories", link: "/products/ing-accessories" },
      { name: "Gadgets", link: "/products/ing-gadgets" }
    ]
  },
  {
    name: "Services",
    hasDropdown: true,
    dropdownItems: [
      { name: "Repair", link: "/services/repair" },
      { name: "Support", link: "/services/support" },
      { name: "Training", link: "/services/training" }
    ]
  }
];

export const NavbarSection: React.FC = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [cartCount] = useAtom(cartCountAtom);
  const [, setIsSearchOpen] = useAtom(isSearchOpenAtom);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-all duration-300 ${
      scrolled ? 'shadow-md' : ''
    }`}>
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            {/* Left Section */}
            <div className="flex items-center space-x-4">
              <Link to="/store-locations" className="text-sm text-gray-600 hover:text-gray-900">
                Store Locations
              </Link>
              <div className="hidden sm:flex items-center space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-5 h-5 bg-black rounded-full flex items-center justify-center hover:bg-gray-800"
                  >
                    <img src={`/iconss-${i}.svg`} alt={`Social ${i}`} className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>Call Us Now:</span>
                <a href="tel:9867678345" className="text-gray-900 font-medium">9867678345</a>
                <span>/</span>
                <a href="tel:9814566873" className="text-gray-900 font-medium">9814566873</a>
                <span>/</span>
                <a href="tel:9762465445" className="text-gray-900 font-medium">9762465445</a>
              </div>
              <div className="flex items-center space-x-2">
                <span>FOR SUPPORT ENQUIRIES:</span>
                <a href="tel:9866745880" className="text-gray-900 font-medium">9866745880</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="/public/finalll.png"
                alt="Joy Store"
                className="h-8 sm:h-10 md:h-12 w-auto object-contain"
              />
            </Link>

            {/* Search Bar */}
            <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  onClick={() => {
                    setIsSearchOpen(true);
                    navigate('/products');
                  }}
                />
                <button
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  onClick={() => {
                    setIsSearchOpen(true);
                    navigate('/products');
                  }}
                >
                  <SearchIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button className="hidden lg:flex items-center px-4 py-2 bg-[#AD5C10] text-white rounded-lg">
                Special Deals
              </button>
              <span className="text-sm font-medium">₨</span>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => {
                    setIsSearchOpen(true);
                    navigate('/products');
                  }} 
                  className="lg:hidden"
                >
                  <SearchIcon className="h-6 w-6" />
                </button>
                <Link to="/products" className="hover:text-indigo-600">
                  <Package className="h-6 w-6" />
                </Link>
                <Link to="/wishlist">
                  <Heart className="h-6 w-6" />
                </Link>
                <ProfileMenu>
                  <button>
                    <UserIcon className="h-6 w-6" />
                  </button>
                </ProfileMenu>
                <Link to="/cart" className="relative">
                  <ShoppingCartIcon className="h-6 w-6" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Link>
              </div>
              <button
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <XIcon className="h-6 w-6" />
                ) : (
                  <MenuIcon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Navigation */}
      <nav className="hidden lg:block bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex space-x-8 h-12">
            {navItems.map((item, index) => (
              <li key={index} className="relative group">
                <button
                  className="h-full flex items-center space-x-1 text-gray-700 hover:text-gray-900"
                  onClick={() => toggleDropdown(index)}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDownIcon className={`h-4 w-4 transition-transform ${
                      activeDropdown === index ? 'rotate-180' : ''
                    }`} />
                  )}
                </button>
                {item.hasDropdown && activeDropdown === index && (
                  <div className="absolute left-0 mt-px w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                    {item.dropdownItems?.map((dropdownItem, idx) => (
                      <Link
                        key={idx}
                        to={dropdownItem.link}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 absolute w-full">
          <div className="px-4 py-2 space-y-1 max-h-[calc(100vh-10rem)] overflow-y-auto">
            {navItems.map((item, index) => (
              <div key={index}>
                <button
                  className="w-full flex items-center justify-between py-2 text-gray-700"
                  onClick={() => toggleDropdown(index)}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDownIcon className={`h-4 w-4 transition-transform ${
                      activeDropdown === index ? 'rotate-180' : ''
                    }`} />
                  )}
                </button>
                {item.hasDropdown && activeDropdown === index && (
                  <div className="pl-4 space-y-1">
                    {item.dropdownItems?.map((dropdownItem, idx) => (
                      <Link
                        key={idx}
                        to={dropdownItem.link}
                        className="block py-2 text-sm text-gray-600 hover:text-gray-900"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setActiveDropdown(null);
                        }}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <SearchDialog />
    </header>
  );
};

export default NavbarSection;