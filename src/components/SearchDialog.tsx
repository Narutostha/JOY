import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogTitle } from './ui/dialog';
import { Input } from './ui/input';
import { searchQueryAtom, isSearchOpenAtom } from '../store/search';
import { X, Search, TrendingUp, Clock, ArrowRight } from 'lucide-react';
import { PRODUCTS_DATA } from '../store/products';

const RECENT_SEARCHES = ['Camera lens', 'Wireless headphones', 'Smart watch'];

const TRENDING_PRODUCTS = PRODUCTS_DATA.slice(0, 3).map(product => ({
  id: product.id,
  name: product.name,
  category: product.category
}));

export const SearchDialog = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useAtom(isSearchOpenAtom);
  const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [activeTab, setActiveTab] = useState('trending');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setIsOpen(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const maxIndex = activeTab === 'trending' 
        ? TRENDING_PRODUCTS.length - 1 
        : RECENT_SEARCHES.length - 1;
      setFocusedIndex(prev => (prev < maxIndex ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const maxIndex = activeTab === 'trending' 
        ? TRENDING_PRODUCTS.length - 1 
        : RECENT_SEARCHES.length - 1;
      setFocusedIndex(prev => (prev > 0 ? prev - 1 : maxIndex));
    } else if (e.key === 'Enter' && focusedIndex >= 0) {
      e.preventDefault();
      const term = activeTab === 'trending' 
        ? TRENDING_PRODUCTS[focusedIndex].name
        : RECENT_SEARCHES[focusedIndex];
      setSearchQuery(term);
      navigate(`/products?search=${encodeURIComponent(term)}`);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setFocusedIndex(-1);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        document.querySelector('input[type="search"]')?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[650px] p-0 rounded-xl overflow-hidden border-0 shadow-2xl">
        <DialogTitle className="sr-only">Search Products</DialogTitle>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="bg-white dark:bg-gray-900"
        >
          <div className="p-6 pb-4 border-b border-gray-100 dark:border-gray-800">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Search Products</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Close search"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <form onSubmit={handleSearch} className="relative mt-4">
              <Input
                type="search"
                placeholder="Search for products, brands, categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full pl-12 pr-4 py-3 text-base bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              
              {searchQuery && (
                <button
                  type="submit"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-1 transition-colors"
                  aria-label="Search"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              )}
            </form>
          </div>
          
          <div className="flex border-b border-gray-100 dark:border-gray-800">
            <button
              onClick={() => setActiveTab('trending')}
              className={`flex items-center px-6 py-3 text-sm font-medium transition-colors ${
                activeTab === 'trending'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              <TrendingUp className="h-4 w-4 mr-2" />
              Trending
            </button>
            <button
              onClick={() => setActiveTab('recent')}
              className={`flex items-center px-6 py-3 text-sm font-medium transition-colors ${
                activeTab === 'recent'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              <Clock className="h-4 w-4 mr-2" />
              Recent
            </button>
          </div>
          
          <div className="p-6 max-h-[400px] overflow-y-auto">
            <AnimatePresence mode="wait">
              {activeTab === 'trending' ? (
                <motion.div
                  key="trending"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Trending Products</h3>
                  <div className="space-y-2">
                    {TRENDING_PRODUCTS.map((product, index) => (
                      <motion.button
                        key={product.id}
                        whileHover={{ x: 5 }}
                        onClick={() => {
                          setSearchQuery(product.name);
                          navigate(`/products?search=${encodeURIComponent(product.name)}`);
                          setIsOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 rounded-lg flex items-center justify-between transition-colors ${
                          focusedIndex === index
                            ? 'bg-blue-50 dark:bg-blue-900/20'
                            : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                        }`}
                      >
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{product.name}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{product.category}</p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-gray-400" />
                      </motion.button>
                    ))}
                  </div>
                  
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-6 mb-3">Popular Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Smartphones', 'Laptops', 'Headphones', 'Smart Home', 'Wearables'].map((term) => (
                      <motion.button
                        key={term}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          setSearchQuery(term);
                          navigate(`/products?search=${encodeURIComponent(term)}`);
                          setIsOpen(false);
                        }}
                        className="px-4 py-2 text-sm bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors text-gray-800 dark:text-gray-200"
                      >
                        {term}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="recent"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Recent Searches</h3>
                    <button 
                      className="text-xs text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                      onClick={() => {
                        setActiveTab('trending');
                      }}
                    >
                      Clear all
                    </button>
                  </div>
                  
                  {RECENT_SEARCHES.length > 0 ? (
                    <div className="space-y-2">
                      {RECENT_SEARCHES.map((term, index) => (
                        <motion.button
                          key={term}
                          whileHover={{ x: 5 }}
                          onClick={() => {
                            setSearchQuery(term);
                            navigate(`/products?search=${encodeURIComponent(term)}`);
                            setIsOpen(false);
                          }}
                          className={`w-full text-left px-4 py-3 rounded-lg flex items-center justify-between transition-colors ${
                            focusedIndex === index
                              ? 'bg-blue-50 dark:bg-blue-900/20'
                              : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                          }`}
                        >
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 text-gray-400 mr-2" />
                            <span className="text-gray-900 dark:text-white">{term}</span>
                          </div>
                          <ArrowRight className="h-4 w-4 text-gray-400" />
                        </motion.button>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500 dark:text-gray-400">No recent searches</p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="px-6 py-3 border-t border-gray-100 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-400 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-gray-500 dark:text-gray-400 mr-1">↑</kbd>
                <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-gray-500 dark:text-gray-400">↓</kbd>
                <span className="ml-2">to navigate</span>
              </div>
              
              <div className="flex items-center">
                <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-gray-500 dark:text-gray-400">Enter</kbd>
                <span className="ml-2">to select</span>
              </div>
            </div>
            
            <div>
              <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-gray-500 dark:text-gray-400">Esc</kbd>
              <span className="ml-2">to close</span>
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};