import React, { useState } from "react";
import { motion } from "framer-motion";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

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
  const [priceRange, setPriceRange] = useState([filters.priceRange.min, filters.priceRange.max]);

  const handlePriceChange = (values: number[]) => {
    setPriceRange(values);
    handlePriceRangeFilter(values[0], values[1]);
  };

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? "all" : section);
  };

  return (
    <div className="relative">
      {/* Mobile Toggle */}
      <div className="md:hidden mb-6">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="w-full flex items-center justify-center px-5 py-3 bg-white rounded-xl border border-gray-200 shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all"
        >
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>

      {/* Filter Content */}
      <motion.div
        initial={false}
        animate={{
          height: showFilters || window.innerWidth >= 768 ? "auto" : 0,
          opacity: showFilters || window.innerWidth >= 768 ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className={`${showFilters ? 'block' : 'hidden md:block'} bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-white">Filters</h2>
          <button 
            onClick={resetFilters}
            className="text-sm text-white hover:text-indigo-100 flex items-center bg-white/20 px-3 py-1 rounded-full transition-colors"
          >
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Reset
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Categories */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-semibold text-gray-900">Categories</h3>
              <button 
                onClick={() => toggleSection("categories")}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className={`w-5 h-5 transform transition-transform ${activeSection === "categories" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <motion.div
              initial={false}
              animate={{
                height: activeSection === "categories" || activeSection === "all" ? "auto" : 0,
                opacity: activeSection === "categories" || activeSection === "all" ? 1 : 0
              }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-2 gap-3">
                {categories.map(category => (
                  <label
                    key={category}
                    className={`relative flex items-center p-3 rounded-lg cursor-pointer transition-all ${
                      filters.category.includes(category)
                        ? 'bg-indigo-50 border-indigo-200 text-indigo-900'
                        : 'bg-gray-50 hover:bg-gray-100 border-transparent'
                    } border`}
                  >
                    <input
                      type="checkbox"
                      className="absolute opacity-0"
                      checked={filters.category.includes(category)}
                      onChange={() => handleCategoryFilter(category)}
                    />
                    <span className="text-sm">{category}</span>
                    {filters.category.includes(category) && (
                      <svg className="w-4 h-4 text-indigo-600 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </label>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Price Range */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-semibold text-gray-900">Price Range</h3>
              <button 
                onClick={() => toggleSection("price")}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className={`w-5 h-5 transform transition-transform ${activeSection === "price" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <motion.div
              initial={false}
              animate={{
                height: activeSection === "price" || activeSection === "all" ? "auto" : 0,
                opacity: activeSection === "price" || activeSection === "all" ? 1 : 0
              }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden space-y-6"
            >
              <div className="flex justify-between items-center">
                <div className="bg-indigo-50 rounded-lg py-2 px-3">
                  <span className="text-sm font-medium text-indigo-900">${priceRange[0]}</span>
                </div>
                <span className="text-gray-500">to</span>
                <div className="bg-indigo-50 rounded-lg py-2 px-3">
                  <span className="text-sm font-medium text-indigo-900">${priceRange[1]}</span>
                </div>
              </div>

              <div className="px-2">
                <RangeSlider
                  min={0}
                  max={2000}
                  step={10}
                  value={priceRange}
                  onInput={handlePriceChange}
                  className="range-slider"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Under $500", min: 0, max: 500 },
                  { label: "$500-$1000", min: 500, max: 1000 },
                  { label: "$1000+", min: 1000, max: 2000 }
                ].map((range) => (
                  <button
                    key={range.label}
                    onClick={() => handlePriceChange([range.min, range.max])}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                      priceRange[0] === range.min && priceRange[1] === range.max
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Rating Filter */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-semibold text-gray-900">Rating</h3>
              <button 
                onClick={() => toggleSection("rating")}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className={`w-5 h-5 transform transition-transform ${activeSection === "rating" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <motion.div
              initial={false}
              animate={{
                height: activeSection === "rating" || activeSection === "all" ? "auto" : 0,
                opacity: activeSection === "rating" || activeSection === "all" ? 1 : 0
              }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="space-y-2">
                {[4, 3, 2, 1].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => handleRatingFilter(rating)}
                    className={`w-full flex items-center p-3 rounded-lg transition-all ${
                      filters.rating === rating
                        ? 'bg-indigo-50 text-indigo-900'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center flex-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-2 text-sm">& Up</span>
                    </div>
                    {filters.rating === rating && (
                      <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <style jsx>{`
          .range-slider {
            height: 4px;
            background: #e5e7eb;
            border-radius: 2px;
          }
          
          .range-slider .range-slider__range {
            background: #4f46e5;
            border-radius: 2px;
          }
          
          .range-slider .range-slider__thumb {
            width: 16px;
            height: 16px;
            background: #4f46e5;
            border: 2px solid #fff;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            cursor: pointer;
          }
          
          .range-slider .range-slider__thumb:hover {
            transform: scale(1.1);
          }
        `}</style>
      </motion.div>
    </div>
  );
};

export default FilterSection;