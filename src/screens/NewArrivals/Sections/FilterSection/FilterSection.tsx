import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FilterSectionProps = {
  categories: string[];
  filters: {
    category: string[];
    priceRange: { min: number; max: number };
    rating: number;
  };
  handleCategoryFilter: (category: string) => void;
  handlePriceRangeFilter: (min: number, max: number) => void;
  handleRatingFilter: (rating: number) => void;
  resetFilters: () => void;
};

export const FilterSection = ({
  categories,
  filters,
  handleCategoryFilter,
  handlePriceRangeFilter,
  handleRatingFilter,
  resetFilters,
}: FilterSectionProps) => {
  const [showFilters, setShowFilters] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("all");

  // Toggle section visibility
  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? "all" : section);
  };

  return (
    <>
      {/* Filter Sidebar - Mobile Toggle */}
      <div className="md:hidden mb-6">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="w-full flex items-center justify-center px-5 py-3 border border-gray-200 shadow-md text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all duration-300"
        >
          <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>
      
      {/* Filter Sidebar */}
      <div 
        className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-80 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300`}
      >
        {/* Header with title and reset button */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-5 flex justify-between items-center">
          <h2 className="text-lg font-bold text-white">Refine Results</h2>
          <button 
            onClick={resetFilters}
            className="text-sm text-white hover:text-indigo-100 flex items-center transition-colors bg-white bg-opacity-20 px-3 py-1 rounded-full"
          >
            <svg className="h-3.5 w-3.5 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4V9H4.58152M19.9381 11C19.446 7.05369 16.0796 4 12 4C8.64262 4 5.76829 6.06817 4.58152 9M4.58152 9H9M20 20V15H19.4185M19.4185 15C18.2317 17.9318 15.3574 20 12 20C7.92038 20 4.55399 16.9463 4.06189 13M19.4185 15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Reset
          </button>
        </div>
        
        <div className="p-6 space-y-8">
          {/* Category Filter */}
          <div className="border-b border-gray-100 pb-6">
            <button 
              className="flex justify-between items-center w-full mb-4"
              onClick={() => toggleSection("category")}
            >
              <h3 className="text-base font-semibold text-gray-900">Categories</h3>
              <svg 
                className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${activeSection === "category" ? "transform rotate-180" : ""}`} 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className={`grid grid-cols-2 gap-x-4 gap-y-3 ${activeSection === "category" || activeSection === "all" ? "block" : "hidden"}`}>
              {categories.map(category => (
                <div key={category} className="flex items-center">
                  <div className="relative flex items-center">
                    <input
                      id={`category-${category}`}
                      name={`category-${category}`}
                      type="checkbox"
                      checked={filters.category.includes(category)}
                      onChange={() => handleCategoryFilter(category)}
                      className="opacity-0 absolute h-5 w-5 cursor-pointer"
                    />
                    <div className={`border ${filters.category.includes(category) ? 'bg-indigo-600 border-indigo-600' : 'bg-white border-gray-300'} rounded-md w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 transition-colors duration-200`}>
                      <svg className={`fill-current w-3 h-3 text-white ${filters.category.includes(category) ? 'opacity-100' : 'opacity-0'}`} viewBox="0 0 20 20">
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                      </svg>
                    </div>
                    <label htmlFor={`category-${category}`} className="text-sm text-gray-700 cursor-pointer">
                      {category}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Price Range Filter */}
          <div className="border-b border-gray-100 pb-6">
            <button 
              className="flex justify-between items-center w-full mb-4"
              onClick={() => toggleSection("price")}
            >
              <h3 className="text-base font-semibold text-gray-900">Price Range</h3>
              <svg 
                className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${activeSection === "price" ? "transform rotate-180" : ""}`} 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className={`space-y-6 ${activeSection === "price" || activeSection === "all" ? "block" : "hidden"}`}>
              <div className="flex items-center justify-between">
                <div className="bg-indigo-100 rounded-lg py-2 px-4">
                  <span className="text-sm font-medium text-indigo-800">${filters.priceRange.min}</span>
                </div>
                <span className="text-gray-500">to</span>
                <div className="bg-indigo-100 rounded-lg py-2 px-4">
                  <span className="text-sm font-medium text-indigo-800">${filters.priceRange.max}</span>
                </div>
              </div>
              
              <div className="relative mt-4">
                <div className="h-2 bg-gray-200 rounded-full">
                  <div 
                    className="absolute h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                    style={{ 
                      left: `${(filters.priceRange.min / 200) * 100}%`, 
                      width: `${((filters.priceRange.max - filters.priceRange.min) / 200) * 100}%` 
                    }}
                  ></div>
                </div>
                <input
                  type="range"
                  min="0"
                  max="200"
                  step="10"
                  value={filters.priceRange.max}
                  onChange={(e) => handlePriceRangeFilter(filters.priceRange.min, parseInt(e.target.value))}
                  className="absolute top-0 w-full h-2 opacity-0 cursor-pointer"
                />
              </div>
              
              <div className="flex flex-wrap gap-2 pt-2">
                <button
                  onClick={() => handlePriceRangeFilter(0, 50)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    filters.priceRange.min === 0 && filters.priceRange.max === 50
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Under $50
                </button>
                <button
                  onClick={() => handlePriceRangeFilter(50, 100)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    filters.priceRange.min === 50 && filters.priceRange.max === 100
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  $50-$100
                </button>
                <button
                  onClick={() => handlePriceRangeFilter(100, 200)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    filters.priceRange.min === 100 && filters.priceRange.max === 200
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  $100+
                </button>
              </div>
            </div>
          </div>
          
          {/* Rating Filter */}
          <div className="border-b border-gray-100 pb-6">
            <button 
              className="flex justify-between items-center w-full mb-4"
              onClick={() => toggleSection("rating")}
            >
              <h3 className="text-base font-semibold text-gray-900">Customer Rating</h3>
              <svg 
                className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${activeSection === "rating" ? "transform rotate-180" : ""}`} 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className={`space-y-3 ${activeSection === "rating" || activeSection === "all" ? "block" : "hidden"}`}>
              {[4, 3, 2, 1].map(rating => (
                <div 
                  key={rating} 
                  onClick={() => handleRatingFilter(rating)}
                  className={`flex items-center p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                    filters.rating === rating 
                      ? 'bg-indigo-50 border border-indigo-200' 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="relative w-5 h-5 mr-3">
                    <input
                      id={`rating-${rating}`}
                      name="rating"
                      type="radio"
                      checked={filters.rating === rating}
                      onChange={() => handleRatingFilter(rating)}
                      className="opacity-0 absolute h-5 w-5"
                    />
                    <div className={`absolute inset-0 rounded-full border ${filters.rating === rating ? 'border-indigo-600' : 'border-gray-300'}`}>
                      {filters.rating === rating && (
                        <div className="absolute inset-1 rounded-full bg-indigo-600"></div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-sm text-gray-700">{rating}+ stars</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Featured Section */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-5 mt-6">
            <h3 className="text-base font-semibold text-indigo-900 mb-4">Trending Now</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-3 shadow-sm flex items-center group hover:shadow-md transition-all duration-300">
                <div className="h-16 w-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                  <img 
                    src="/image-7-1.png" 
                    alt="Featured product" 
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">Wireless Earbuds</h4>
                  <div className="flex items-center mt-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`h-3 w-3 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="ml-auto text-sm font-bold text-indigo-600">$129.99</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-3 shadow-sm flex items-center group hover:shadow-md transition-all duration-300">
                <div className="h-16 w-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                  <img 
                    src="/image-6-2.png" 
                    alt="Featured product" 
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">Bluetooth Speaker</h4>
                  <div className="flex items-center mt-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`h-3 w-3 ${i < 5 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="ml-auto text-sm font-bold text-indigo-600">$79.99</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSection;