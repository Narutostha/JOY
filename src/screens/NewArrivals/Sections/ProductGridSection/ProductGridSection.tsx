import React from "react";
import { Product } from "../../NewArrivals";

type ProductsGridSectionProps = {
  filteredProducts: Product[];
  currentProducts: Product[];
  indexOfFirstProduct: number;
  indexOfLastProduct: number;
  sortBy: string;
  sortOrder: string;
  toggleSort: (field: string) => void;
  filters: {
    category: string[];
    priceRange: { min: number; max: number };
    rating: number;
  };
  handleCategoryFilter: (category: string) => void;
  handleRatingFilter: (rating: number) => void;
  handlePriceRangeFilter: (min: number, max: number) => void;
  resetFilters: () => void;
};

export const ProductsGridSection = ({
  filteredProducts,
  currentProducts,
  indexOfFirstProduct,
  indexOfLastProduct,
  sortBy,
  sortOrder,
  toggleSort,
  filters,
  handleCategoryFilter,
  handleRatingFilter,
  handlePriceRangeFilter,
  resetFilters,
}: ProductsGridSectionProps) => {
  return (
    <>
      {/* Sorting and Results Count */}
      <div className="bg-white backdrop-blur-sm bg-opacity-80 p-5 rounded-xl shadow-sm mb-6 border border-gray-100">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium text-indigo-600">{indexOfFirstProduct + 1}</span> to{' '}
            <span className="font-medium text-indigo-600">
              {indexOfLastProduct > filteredProducts.length ? filteredProducts.length : indexOfLastProduct}
            </span>{' '}
            of <span className="font-medium text-indigo-600">{filteredProducts.length}</span> products
          </p>
          <div className="flex mt-3 sm:mt-0">
            <div className="relative inline-flex rounded-md overflow-hidden shadow-md">
              <button
                onClick={() => toggleSort('name')}
                className={`inline-flex items-center px-4 py-2.5 border border-transparent text-sm font-medium transition-all duration-300 ${
                  sortBy === 'name'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Name
                {sortBy === 'name' && (
                  <span className="ml-1">
                    {sortOrder === 'asc' ? '↑' : '↓'}
                  </span>
                )}
              </button>
              <button
                onClick={() => toggleSort('price')}
                className={`inline-flex items-center px-4 py-2.5 border-t border-b border-transparent text-sm font-medium transition-all duration-300 ${
                  sortBy === 'price'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Price
                {sortBy === 'price' && (
                  <span className="ml-1">
                    {sortOrder === 'asc' ? '↑' : '↓'}
                  </span>
                )}
              </button>
              <button
                onClick={() => toggleSort('date')}
                className={`inline-flex items-center px-4 py-2.5 border border-transparent text-sm font-medium transition-all duration-300 ${
                  sortBy === 'date'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Newest
                {sortBy === 'date' && (
                  <span className="ml-1">
                    {sortOrder === 'asc' ? '↑' : '↓'}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Active Filters */}
      {(filters.category.length > 0 || filters.rating > 0 || 
        filters.priceRange.min > 0 || filters.priceRange.max < 200) && (
        <div className="bg-white backdrop-blur-sm bg-opacity-80 p-5 rounded-xl shadow-sm mb-6 border border-gray-100">
          <div className="flex items-center flex-wrap gap-2">
            <span className="text-sm text-gray-700 font-medium">Active Filters:</span>
            
            {filters.category.map(cat => (
              <span key={cat} className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 shadow-sm animate-fadeIn">
                {cat}
                <button
                  type="button"
                  onClick={() => handleCategoryFilter(cat)}
                  className="ml-1.5 inline-flex text-indigo-500 hover:text-indigo-700 transition-colors focus:outline-none"
                >
                  <span className="sr-only">Remove filter for {cat}</span>
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </span>
            ))}
            
            {filters.rating > 0 && (
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 shadow-sm animate-fadeIn">
                {filters.rating}+ Stars
                <button
                  type="button"
                  onClick={() => handleRatingFilter(0)}
                  className="ml-1.5 inline-flex text-indigo-500 hover:text-indigo-700 transition-colors focus:outline-none"
                >
                  <span className="sr-only">Remove rating filter</span>
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </span>
            )}
            
            {(filters.priceRange.min > 0 || filters.priceRange.max < 200) && (
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 shadow-sm animate-fadeIn">
                ${filters.priceRange.min} - ${filters.priceRange.max}
                <button
                  type="button"
                  onClick={() => handlePriceRangeFilter(0, 200)}
                  className="ml-1.5 inline-flex text-indigo-500 hover:text-indigo-700 transition-colors focus:outline-none"
                >
                  <span className="sr-only">Remove price filter</span>
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </span>
            )}
            
            <button
              onClick={resetFilters}
              className="ml-auto text-xs font-medium text-indigo-600 hover:text-indigo-800 transition-colors flex items-center"
            >
              <svg className="h-3.5 w-3.5 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4V9H4.58152M19.9381 11C19.446 7.05369 16.0796 4 12 4C8.64262 4 5.76829 6.06817 4.58152 9M4.58152 9H9M20 20V15H19.4185M19.4185 15C18.2317 17.9318 15.3574 20 12 20C7.92038 20 4.55399 16.9463 4.06189 13M19.4185 15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Reset All
            </button>
          </div>
        </div>
      )}
      
      {/* No Results */}
      {currentProducts.length === 0 && (
        <div className="bg-white backdrop-blur-sm bg-opacity-80 p-8 rounded-xl shadow-sm text-center border border-gray-100 animate-fadeIn">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 14L12 12M12 12L14 10M12 12L10 10M12 12L14 14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="mt-2 text-lg font-medium text-gray-900">No products found</h3>
          <p className="mt-1 text-base text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
          <div className="mt-6">
            <button
              onClick={resetFilters}
              className="inline-flex items-center px-5 py-3 border border-transparent text-sm font-medium rounded-md shadow-md text-white bg-indigo-600 hover:bg-indigo-700 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4V9H4.58152M19.9381 11C19.446 7.05369 16.0796 4 12 4C8.64262 4 5.76829 6.06817 4.58152 9M4.58152 9H9M20 20V15H19.4185M19.4185 15C18.2317 17.9318 15.3574 20 12 20C7.92038 20 4.55399 16.9463 4.06189 13M19.4185 15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Reset filters
            </button>
          </div>
        </div>
      )}
      
      {/* Products Grid */}
      {currentProducts.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="group bg-white backdrop-blur-sm bg-opacity-95 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 animate-fadeIn"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-52 object-cover transform transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/image-10-2.png';
                  }} 
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-2 right-2 bg-indigo-600 text-white text-xs px-2.5 py-1.5 rounded-full shadow-md">
                  New
                </div>
                <div className="absolute bottom-2 left-2 right-2 flex justify-between transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="bg-white/90 backdrop-blur-sm text-gray-800 hover:bg-white px-3 py-1.5 rounded-full text-xs font-medium transition-colors">
                    Quick View
                  </button>
                  <button className="bg-indigo-600/90 backdrop-blur-sm text-white hover:bg-indigo-700 px-3 py-1.5 rounded-full text-xs font-medium transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="p-4">
                <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md">{product.category}</span>
                <h3 className="text-gray-900 font-medium text-lg mt-2 line-clamp-1">{product.name}</h3>
                <div className="flex items-center mt-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-1 text-xs text-gray-500">({product.rating})</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsGridSection;