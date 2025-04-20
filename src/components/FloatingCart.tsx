import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { cartCountAtom } from '../store/cart';

export const FloatingCart = () => {
  const navigate = useNavigate();
  const [cartCount] = useAtom(cartCountAtom);

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => navigate('/cart')}
      className="fixed bottom-20 right-4 z-50 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
    >
      <ShoppingCart className="h-6 w-6" />
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
          {cartCount}
        </span>
      )}
    </motion.button>
  );
};

export default FloatingCart;