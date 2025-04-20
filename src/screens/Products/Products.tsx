import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import NavbarSection from "../Homepage/sections/NavbarSection/NavbarSection";
import { FooterSection } from "../Homepage/sections/FooterSection/FooterSection";
import { NewsletterSection } from "../Homepage/sections/NewsletterSection";
import { FilterSection } from "../NewArrivals/Sections/FilterSection/FilterSection";
import { ProductsGridSection } from "../NewArrivals/Sections/ProductGridSection/ProductGridSection";
import { PaginationSection } from "../NewArrivals/Sections/PaginationSection/PaginationSection";
import { FloatingCart } from "../../components/FloatingCart";
import { FloatingFilterButton } from "../../components/FloatingFilterButton";
import { useProducts } from "../../hooks/useProducts";
import { getUniqueCategories, getUniqueSubcategories } from "../../store/products";
import { X } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
};

export const Products = () => {
  const { category } = useParams();
  const { products, filters, updateFilters, resetFilters } = useProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [showFilters, setShowFilters] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const productsPerPage = 8;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setShowFilters(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (category) {
      updateFilters({
        category: [category],
        subcategory: []
      });
    } else {
      resetFilters();
    }
  }, [category]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products?.slice(indexOfFirstProduct, indexOfLastProduct) || [];
  const totalPages = Math.ceil((products?.length || 0) / productsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const toggleSort = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  return (
    <div className="bg-gray-50">
      <NavbarSection />
      
      <div className="min-h-screen pt-[150px] sm:pt-[170px] md:pt-[80px]">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-90"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6"
            >
              {category || "All Products"}
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-indigo-100 text-center max-w-3xl mx-auto"
            >
              Discover our amazing collection of {category?.toLowerCase() || "products"} from top brands around the world.
            </motion.p>

            <motion.nav 
              variants={itemVariants}
              className="mt-8 flex justify-center"
              aria-label="Breadcrumb"
            >
              <ol className="flex items-center space-x-2 text-indigo-100">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">Home</Link>
                </li>
                <span>/</span>
                <li>
                  <Link to="/products" className="hover:text-white transition-colors">Products</Link>
                </li>
                {category && (
                  <>
                    <span>/</span>
                    <li className="font-medium text-white">{category}</li>
                  </>
                )}
              </ol>
            </motion.nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filter Section - Desktop */}
            <AnimatePresence>
              {(!isMobile || showFilters) && (
                <motion.div
                  initial={isMobile ? { x: -300 } : false}
                  animate={{ x: 0 }}
                  exit={isMobile ? { x: -300 } : false}
                  className={`${
                    isMobile
                      ? 'fixed inset-0 z-50 bg-white overflow-y-auto'
                      : 'md:w-80'
                  }`}
                >
                  {isMobile && (
                    <div className="sticky top-0 z-10 bg-white p-4 border-b flex justify-between items-center">
                      <h2 className="text-lg font-semibold">Filters</h2>
                      <button
                        onClick={() => setShowFilters(false)}
                        className="p-2 hover:bg-gray-100 rounded-full"
                      >
                        <X className="h-6 w-6" />
                      </button>
                    </div>
                  )}
                  <div className={isMobile ? 'p-4' : ''}>
                    <FilterSection 
                      categories={getUniqueCategories()}
                      subcategories={category ? getUniqueSubcategories(category) : []}
                      filters={filters}
                      updateFilters={updateFilters}
                      resetFilters={resetFilters}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Products Grid Section */}
            <motion.div 
              variants={itemVariants}
              className="flex-1"
            >
              <ProductsGridSection 
                filteredProducts={products || []}
                currentProducts={currentProducts}
                indexOfFirstProduct={indexOfFirstProduct}
                indexOfLastProduct={indexOfLastProduct}
                sortBy={sortBy}
                sortOrder={sortOrder}
                toggleSort={toggleSort}
                filters={filters}
                handleCategoryFilter={(cat) => updateFilters({ category: filters.category.filter(c => c !== cat) })}
                handleRatingFilter={(rating) => updateFilters({ rating })}
                handlePriceRangeFilter={(min, max) => updateFilters({ priceRange: { min, max } })}
                resetFilters={resetFilters}
              />
              
              {/* Pagination */}
              {(products?.length || 0) > 0 && (
                <motion.div variants={itemVariants}>
                  <PaginationSection 
                    currentPage={currentPage}
                    totalPages={totalPages}
                    paginate={paginate}
                    filteredProducts={products || []}
                    indexOfFirstProduct={indexOfFirstProduct}
                    indexOfLastProduct={indexOfLastProduct}
                  />
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
      
      <FloatingCart />
      <FloatingFilterButton 
        onClick={() => setShowFilters(true)}
        isVisible={isMobile && !showFilters}
      />
      
      <NewsletterSection />
      <FooterSection />
    </div>
  );
};

export default Products;