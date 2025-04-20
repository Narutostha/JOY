import React from 'react';
import { Link } from 'react-router-dom';
import { useAtom } from 'jotai';
import { motion } from 'framer-motion';
import { Heart, Trash2, ShoppingCart } from 'lucide-react';
import { Button } from '../../components/ui/button';
import NavbarSection from '../Homepage/sections/NavbarSection/NavbarSection';
import { FooterSection } from '../Homepage/sections/FooterSection/FooterSection';
import { wishlistAtom } from '../../store/wishlist';
import { cartAtom } from '../../store/cart';
import { useToast } from '../../components/ui/use-toast';

const WishlistContent = () => {
  const [wishlist, setWishlist] = useAtom(wishlistAtom);
  const [cart, setCart] = useAtom(cartAtom);
  const { toast } = useToast();
  
  const removeFromWishlist = (productId: number) => {
    setWishlist((prev) => prev.filter((item) => item.id !== productId));
    toast({
      title: 'Item removed',
      description: 'Item has been removed from your wishlist.',
    });
  };
  
  const addToCart = (item: any) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart((prev) =>
        prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart((prev) => [...prev, { ...item, quantity: 1 }]);
    }
    removeFromWishlist(item.id);
    toast({
      title: 'Added to cart',
      description: 'Item has been moved to your cart.',
    });
  };
  
  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <NavbarSection />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-8">
              <Heart className="h-8 w-8 text-gray-400" />
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Your wishlist is empty
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Add products you like to your wishlist to save them for later.
            </p>
            <div className="mt-8">
              <Link to="/products">
                <Button className="inline-flex items-center px-4 py-2">
                  Start shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <FooterSection />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-8">
          My Wishlist ({wishlist.length})
        </h1>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {wishlist.map((item) => (
            <motion.div
              key={item.id}
              className="group relative bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-64 w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                <p className="mt-1 text-xl font-bold text-gray-900">${item.price.toFixed(2)}</p>
                <div className="mt-4 flex justify-between gap-2">
                  <Button
                    onClick={() => addToCart(item)}
                    className="flex-1 bg-primary"
                    variant="default"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </Button>
                  <Button
                    onClick={() => removeFromWishlist(item.id)}
                    variant="outline"
                    className="p-2"
                  >
                    <Trash2 className="h-5 w-5 text-red-500" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export function Wishlist() {
  return (
    <WishlistContent />
  );
}

export default Wishlist;