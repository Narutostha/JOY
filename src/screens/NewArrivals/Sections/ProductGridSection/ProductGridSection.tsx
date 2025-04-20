import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { Product } from "../../NewArrivals";
import { Button } from "../../../../components/ui/button";
import { useToast } from "../../../../components/ui/use-toast";
import { useAtom } from "jotai";
import { cartAtom } from "../../../../store/cart";
import { wishlistAtom, isInWishlistAtom } from "../../../../store/wishlist";

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
  filteredProducts = [],
  currentProducts = [],
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
  const navigate = useNavigate();
  const { toast } = useToast();
  const [cart, setCart] = useAtom(cartAtom);
  const [wishlist, setWishlist] = useAtom(wishlistAtom);
  const [isInWishlist] = useAtom(isInWishlistAtom);

  const handleQuickView = (product: Product) => {
    navigate(`/product/${product.slug}`);
  };

  const handleAddToCart = (product: Product) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const toggleWishlist = (product: Product) => {
    if (isInWishlist(product.id)) {
      setWishlist(wishlist.filter(item => item.id !== product.id));
      toast({
        title: "Removed from wishlist",
        description: `${product.name} has been removed from your wishlist.`,
      });
    } else {
      setWishlist([...wishlist, product]);
      toast({
        title: "Added to wishlist",
        description: `${product.name} has been added to your wishlist.`,
      });
    }
  };

  return (
    <>
      {/* Sorting and Results Count */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-gray-600">
            Showing <span className="font-medium text-gray-900">{indexOfFirstProduct + 1}</span> to{' '}
            <span className="font-medium text-gray-900">
              {indexOfLastProduct > filteredProducts.length ? filteredProducts.length : indexOfLastProduct}
            </span>{' '}
            of <span className="font-medium text-gray-900">{filteredProducts.length}</span> products
          </p>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <div className="relative inline-flex rounded-lg shadow-sm">
              {[
                { key: 'name', label: 'Name' },
                { key: 'price', label: 'Price' },
                { key: 'date', label: 'Newest' }
              ].map((option, index) => (
                <button
                  key={option.key}
                  onClick={() => toggleSort(option.key)}
                  className={`
                    relative inline-flex items-center px-4 py-2 text-sm font-medium
                    ${index === 0 ? 'rounded-l-lg' : index === 2 ? 'rounded-r-lg' : ''}
                    ${sortBy === option.key
                      ? 'bg-indigo-600 text-white z-10'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                    }
                    ${index !== 0 ? '-ml-px' : ''}
                    transition-colors duration-200
                  `}
                >
                  {option.label}
                  {sortBy === option.key && (
                    <svg
                      className={`ml-1.5 h-4 w-4 transition-transform duration-200 ${
                        sortOrder === 'asc' ? 'rotate-0' : 'rotate-180'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Active Filters */}
      {(filters.category.length > 0 || filters.rating > 0 || 
        filters.priceRange.min > 0 || filters.priceRange.max < 2000) && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-gray-700">Active Filters:</span>
            
            {filters.category.map(cat => (
              <motion.span
                key={cat}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-indigo-50 text-indigo-800"
              >
                {cat}
                <button
                  type="button"
                  onClick={() => handleCategoryFilter(cat)}
                  className="ml-1.5 inline-flex text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.span>
            ))}
            
            {filters.rating > 0 && (
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-indigo-50 text-indigo-800"
              >
                {filters.rating}+ Stars
                <button
                  type="button"
                  onClick={() => handleRatingFilter(0)}
                  className="ml-1.5 inline-flex text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.span>
            )}
            
            {(filters.priceRange.min > 0 || filters.priceRange.max < 2000) && (
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-indigo-50 text-indigo-800"
              >
                ${filters.priceRange.min} - ${filters.priceRange.max}
                <button
                  type="button"
                  onClick={() => handlePriceRangeFilter(0, 2000)}
                  className="ml-1.5 inline-flex text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.span>
            )}
            
            <button
              onClick={resetFilters}
              className="ml-auto text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors flex items-center"
            >
              <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Reset All
            </button>
          </div>
        </div>
      )}

      {/* No Results */}
      {currentProducts.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center"
        >
          <div className="mx-auto w-24 h-24 rounded-full bg-indigo-50 flex items-center justify-center mb-6">
            <svg className="w-12 h-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-600 mb-6">Try adjusting your search or filter to find what you're looking for.</p>
          <button
            onClick={resetFilters}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Reset filters
          </button>
        </motion.div>
      )}

      {/* Products Grid */}
      {currentProducts.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/image-10-2.png';
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300" />
                
                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-white hover:bg-indigo-50 transition-colors"
                    onClick={() => toggleWishlist(product)}
                  >
                    <Heart
                      className={`h-4 w-4 ${
                        isInWishlist(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'
                      }`}
                    />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-white hover:bg-indigo-50 transition-colors"
                    onClick={() => handleQuickView(product)}
                  >
                    <Eye className="h-4 w-4 text-gray-600" />
                  </Button>
                </div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                  {product.originalPrice > product.price && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </span>
                  )}
                  {new Date(product.date) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                      New
                    </span>
                  )}
                  {product.stock < 10 && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Low Stock
                    </span>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <Link to={`/product/${product.slug}`} className="block">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                </Link>
                
                <div className="mt-2 flex items-center">
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
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-gray-500">{product.category}</span>
                </div>

                {/* Features */}
                <div className="mt-4">
                  <ul className="space-y-1">
                    {product.features?.slice(0, 2).map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-500 flex items-center">
                        <svg className="h-4 w-4 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price and Actions */}
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</p>
                    {product.originalPrice > product.price && (
                      <p className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</p>
                    )}
                  </div>
                  <Button
                    onClick={() => handleAddToCart(product)}
                    className="bg-indigo-600 hover:bg-indigo-700"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    <span className="sr-only">Add to cart</span>
                  </Button>
                </div>

                {/* Stock Status */}
                <div className="mt-4">
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block text-indigo-600">
                          Stock Level
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-indigo-600">
                          {product.stock} units
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-indigo-200">
                      <div
                        style={{ width: `${(product.stock / 100) * 100}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsGridSection;