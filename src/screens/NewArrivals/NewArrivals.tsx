import React, { useState, useEffect } from "react";
import NavbarSection from "../Homepage/sections/NavbarSection/NavbarSection";
import { FooterSection } from "../Homepage/sections/FooterSection/FooterSection";
import { NewsletterSection } from "../Homepage/sections/NewsletterSection";
import BreadcrumbSection from "./Sections/BreadCrumb/BreadCrumb";
import { FilterSection } from "./Sections/FilterSection/FilterSection";
import { ProductsGridSection } from "./Sections/ProductGridSection/ProductGridSection";
import { PaginationSection } from "./Sections/PaginationSection/PaginationSection";

// Product data types
export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  date: string;
};

// Sample product data
export const PRODUCTS_DATA: Product[] = [
  { id: 1, name: 'Modern Desk Lamp', category: 'Home Decor', price: 49.99, image: '/image-10-2.png', rating: 4.5, date: '2025-04-01' },
  { id: 2, name: 'Wireless Earbuds', category: 'Electronics', price: 129.99, image: '/image-7-1.png', rating: 4.8, date: '2025-04-02' },
  { id: 3, name: 'Minimalist Watch', category: 'Accessories', price: 89.99, image: '/apple-watch-image.png', rating: 4.2, date: '2025-04-03' },
  { id: 4, name: 'Organic Cotton T-shirt', category: 'Clothing', price: 24.99, image: '/image-5-1-1.png', rating: 4.0, date: '2025-04-01' },
  { id: 5, name: 'Smart Water Bottle', category: 'Health', price: 34.99, image: '/image-22-2.png', rating: 4.7, date: '2025-04-04' },
  { id: 6, name: 'Bluetooth Speaker', category: 'Electronics', price: 79.99, image: '/image-6-2.png', rating: 4.4, date: '2025-04-02' },
  { id: 7, name: 'Ceramic Plant Pot', category: 'Home Decor', price: 19.99, image: '/image-21-1.png', rating: 4.3, date: '2025-04-05' },
  { id: 8, name: 'Yoga Mat', category: 'Fitness', price: 29.99, image: '/image-19-2.png', rating: 4.6, date: '2025-04-03' },
  { id: 9, name: 'Leather Backpack', category: 'Accessories', price: 119.99, image: '/image-17-1-3.png', rating: 4.9, date: '2025-04-06' },
  { id: 10, name: 'Stainless Steel Water Bottle', category: 'Health', price: 24.99, image: '/image-3-1.png', rating: 4.5, date: '2025-04-07' },
  { id: 11, name: 'Wireless Keyboard', category: 'Electronics', price: 59.99, image: '/image-4-1-1.png', rating: 4.2, date: '2025-04-04' },
  { id: 12, name: 'Scented Candle Set', category: 'Home Decor', price: 39.99, image: '/image-10-2.png', rating: 4.7, date: '2025-04-05' },
  // Add more products as needed
];

// All unique categories for filter options
export const ALL_CATEGORIES = [...new Set(PRODUCTS_DATA.map(product => product.category))];

export const NewArrivals = () => {
  const [products, setProducts] = useState<Product[]>(PRODUCTS_DATA);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(PRODUCTS_DATA);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');
  const [filters, setFilters] = useState({
    category: [] as string[],
    priceRange: { min: 0, max: 200 },
    rating: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  
  const productsPerPage = 8;

  // Simulate loading effect
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);

  // Apply filters and sorting
  useEffect(() => {
    let result = [...products];
    
    // Apply category filter
    if (filters.category.length > 0) {
      result = result.filter(product => filters.category.includes(product.category));
    }
    
    // Apply price range filter
    result = result.filter(product => 
      product.price >= filters.priceRange.min && 
      product.price <= filters.priceRange.max
    );
    
    // Apply rating filter
    if (filters.rating > 0) {
      result = result.filter(product => product.rating >= filters.rating);
    }
    
    // Apply sorting
    result.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a[sortBy as keyof Product] > b[sortBy as keyof Product] ? 1 : -1;
      } else {
        return a[sortBy as keyof Product] < b[sortBy as keyof Product] ? 1 : -1;
      }
    });
    
    setFilteredProducts(result);
    setCurrentPage(1); // Reset to first page when filters/sort change
  }, [filters, sortBy, sortOrder, products]);
  
  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  
  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
  // Toggle sort order
  const toggleSort = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };
  
  // Handle filter changes
  const handleCategoryFilter = (category: string) => {
    setFilters(prev => {
      const newCategories = prev.category.includes(category)
        ? prev.category.filter(c => c !== category)
        : [...prev.category, category];
      
      return { ...prev, category: newCategories };
    });
  };
  
  const handlePriceRangeFilter = (min: number, max: number) => {
    setFilters(prev => ({
      ...prev,
      priceRange: { min, max }
    }));
  };
  
  const handleRatingFilter = (rating: number) => {
    setFilters(prev => ({
      ...prev,
      rating
    }));
  };
  
  // Reset all filters
  const resetFilters = () => {
    setFilters({
      category: [],
      priceRange: { min: 0, max: 200 },
      rating: 0
    });
    setSortBy('date');
    setSortOrder('desc');
  };
  
  if (isLoading) {
    return (
      <div className="bg-white flex flex-row justify-center w-full min-h-screen">
        <div className="bg-white overflow-hidden w-full relative flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-600">Loading products...</p>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50 flex flex-row justify-center w-full">
      <div className="bg-gray-50 overflow-hidden w-full relative">
        {/* Navbar Component */}
        <NavbarSection />
        
        {/* Main Content */}
        <div className="min-h-screen">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 py-12 relative">
            <div className="absolute inset-0 bg-black opacity-10 pattern-dot pattern-size-2 pattern-opacity-5"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <h1 className="text-4xl font-bold text-white animate-fadeIn">New Arrivals</h1>
              <p className="mt-2 text-indigo-100 max-w-xl animate-fadeIn delay-100">
                Discover our latest products and trending items from top brands around the world.
              </p>
            </div>
          </div>
          
          {/* Breadcrumb */}
          <BreadcrumbSection />
          
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Filter Section */}
              <FilterSection 
                categories={ALL_CATEGORIES}
                filters={filters}
                handleCategoryFilter={handleCategoryFilter}
                handlePriceRangeFilter={handlePriceRangeFilter}
                handleRatingFilter={handleRatingFilter}
                resetFilters={resetFilters}
              />
              
              {/* Products Grid Section */}
              <div className="flex-1">
                <ProductsGridSection 
                  filteredProducts={filteredProducts}
                  currentProducts={currentProducts}
                  indexOfFirstProduct={indexOfFirstProduct}
                  indexOfLastProduct={indexOfLastProduct}
                  sortBy={sortBy}
                  sortOrder={sortOrder}
                  toggleSort={toggleSort}
                  filters={filters}
                  handleCategoryFilter={handleCategoryFilter}
                  handleRatingFilter={handleRatingFilter}
                  handlePriceRangeFilter={handlePriceRangeFilter}
                  resetFilters={resetFilters}
                />
                
                {/* Pagination */}
                {filteredProducts.length > 0 && (
                  <PaginationSection 
                    currentPage={currentPage}
                    totalPages={totalPages}
                    paginate={paginate}
                    filteredProducts={filteredProducts}
                    indexOfFirstProduct={indexOfFirstProduct}
                    indexOfLastProduct={indexOfLastProduct}
                  />
                )}
              </div>
            </div>
          </main>
        </div>
        
        {/* Newsletter Section */}
        <NewsletterSection />
        
        {/* Footer Section */}
        <FooterSection />
      </div>
    </div>
  );
};

export default NewArrivals;