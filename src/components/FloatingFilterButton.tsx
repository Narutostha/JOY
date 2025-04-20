import React from 'react';
import { motion } from 'framer-motion';
import { SlidersHorizontal } from 'lucide-react';

interface FloatingFilterButtonProps {
  onClick: () => void;
  isVisible: boolean;
}

export const FloatingFilterButton = ({ onClick, isVisible }: FloatingFilterButtonProps) => {
  if (!isVisible) return null;

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="fixed bottom-4 right-4 z-50 bg-white text-gray-900 p-4 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
    >
      <SlidersHorizontal className="h-6 w-6" />
    </motion.button>
  );
};

export default FloatingFilterButton;