import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useAtom } from 'jotai';
import { motion } from "framer-motion";
import { Star, Heart, ShoppingCart, Share2, ChevronRight, ChevronLeft, Check, Info } from "lucide-react";
import NavbarSection from "../Homepage/sections/NavbarSection/NavbarSection";
import { FooterSection } from "../Homepage/sections/FooterSection/FooterSection";
import { NewsletterSection } from "../Homepage/sections/NewsletterSection";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { cartAtom } from "../../store/cart";
import { wishlistAtom, isInWishlistAtom } from "../../store/wishlist";
import { useToast } from "../../components/ui/use-toast";
import { PRODUCTS_DATA } from "../../store/products";

export const ProductDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('');
  const [activeTab, setActiveTab] = useState('description');
  const [cart, setCart] = useAtom(cartAtom);
  const [wishlist, setWishlist] = useAtom(wishlistAtom);
  const [isInWishlist] = useAtom(isInWishlistAtom);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = PRODUCTS_DATA.find(p => p.slug === slug);
  const relatedProducts = product
    ? PRODUCTS_DATA.filter(p => 
        p.category === product.category && 
        p.id !== product.id
      ).slice(0, 4)
    : [];

  useEffect(() => {
    if (product && product.colors.length > 0) {
      setSelectedColor(product.colors[0]);
    }
  }, [product]);

  const handleAddToCart = () => {
    if (!product) return;

    const existingItemIndex = cart.findIndex(
      item => item.id === product.id && item.color === selectedColor
    );

    if (existingItemIndex > -1) {
      const newCart = [...cart];
      newCart[existingItemIndex].quantity += quantity;
      setCart(newCart);
    } else {
      setCart([
        ...cart,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity,
          image: product.image,
          color: selectedColor,
        },
      ]);
    }

    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} has been added to your cart.`,
    });
  };

  const toggleWishlist = () => {
    if (!product) return;

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

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <NavbarSection />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <Button
            onClick={() => navigate('/products')}
            className="bg-indigo-600 hover:bg-indigo-700"
          >
            Back to Products
          </Button>
        </div>
        <FooterSection />
      </div>
    );
  }

  const productImages = [
    product.image,
    '/image-10-2.png',
    '/image-7-1.png',
    '/image-6-2.png',
  ];

  return (
    <div className="bg-gray-50">
      <NavbarSection />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-gray-900">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/products" className="hover:text-gray-900">Products</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to={`/products/${product.category.toLowerCase()}`} className="hover:text-gray-900">
            {product.category}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <motion.div 
              className="aspect-square rounded-2xl overflow-hidden bg-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="grid grid-cols-4 gap-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index 
                      ? 'border-indigo-600 ring-2 ring-indigo-600 ring-offset-2' 
                      : 'border-transparent hover:border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Header */}
              <div>
                <div className="flex items-center space-x-4 mb-2">
                  <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    New
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-500">
                      ({product.reviews} reviews)
                    </span>
                  </div>
                  <Separator orientation="vertical" className="h-4" />
                  <span className="text-sm text-gray-500">
                    {product.stock} in stock
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline space-x-4">
                <h2 className="text-3xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </h2>
                {product.originalPrice > product.price && (
                  <>
                    <span className="text-lg text-gray-500 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                    <span className="text-sm font-medium text-green-600">
                      Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </span>
                  </>
                )}
              </div>

              <Separator />

              {/* Description */}
              <div>
                <p className="text-gray-600">{product.description}</p>
              </div>

              {/* Colors */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-4">Color</h3>
                <div className="flex items-center space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ${
                        selectedColor === color
                          ? 'ring-2 ring-indigo-600'
                          : ''
                      }`}
                    >
                      <span className="sr-only">{color}</span>
                      <span 
                        className="h-8 w-8 rounded-full border border-black/10"
                        style={{
                          backgroundColor: color.toLowerCase().replace(' ', '')
                        }}
                      />
                      {selectedColor === color && (
                        <span
                          className="absolute inset-0 rounded-full ring-2 ring-indigo-600"
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-4">Quantity</h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    <span className="sr-only">Decrease quantity</span>
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-gray-900 text-lg font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    <span className="sr-only">Increase quantity</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-4">
                <Button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  onClick={toggleWishlist}
                  className={`${
                    isInWishlist(product.id)
                      ? 'bg-red-50 border-red-200 text-red-600 hover:bg-red-100'
                      : ''
                  }`}
                >
                  <Heart
                    className={`w-5 h-5 ${
                      isInWishlist(product.id) ? 'fill-red-500' : ''
                    }`}
                  />
                </Button>
                <Button variant="outline">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>

              {/* Features */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-sm font-medium text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Shipping Info */}
              <div className="bg-blue-50 rounded-xl p-6">
                <div className="flex items-start">
                  <Info className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-2">Free Shipping</h3>
                    <p className="text-sm text-gray-600">
                      Orders over $100 qualify for free shipping. Estimated delivery: 3-5 business days.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab('description')}
                className={`py-4 text-sm font-medium border-b-2 ${
                  activeTab === 'description'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('specifications')}
                className={`py-4 text-sm font-medium border-b-2 ${
                  activeTab === 'specifications'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Specifications
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`py-4 text-sm font-medium border-b-2 ${
                  activeTab === 'reviews'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Reviews
              </button>
            </div>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="prose prose-lg max-w-none"
              >
                <p className="text-gray-600">{product.description}</p>
                <h3 className="text-lg font-medium text-gray-900 mt-8">Features</h3>
                <ul className="mt-4 space-y-4">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {activeTab === 'specifications' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 gap-6 sm:grid-cols-2"
              >
                {Object.entries({
                  Category: product.category,
                  Subcategory: product.subcategory,
                  'Available Colors': product.colors.join(', '),
                  'Stock Level': `${product.stock} units`,
                  'Rating': `${product.rating} out of 5`,
                  'Reviews': product.reviews,
                }).map(([key, value], index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg border p-6 hover:shadow-md transition-shadow"
                  >
                    <dt className="text-sm font-medium text-gray-500">{key}</dt>
                    <dd className="mt-1 text-lg font-medium text-gray-900">{value}</dd>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'reviews' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      Customer Reviews ({product.reviews})
                    </h3>
                    <div className="flex items-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-500">
                        Based on {product.reviews} reviews
                      </span>
                    </div>
                  </div>
                  <Button>Write a Review</Button>
                </div>

                <div className="space-y-6">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="border-b border-gray-200 pb-6 last:border-0">
                      <div className="flex items-start">
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-medium text-gray-900">John Doe</h4>
                            <time className="text-sm text-gray-500">1 month ago</time>
                          </div>
                          <div className="flex items-center mt-1">
                            {[...Array(5)].map((_, j) => (
                              <Star
                                key={j}
                                className={`w-4 h-4 ${
                                  j < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <p className="mt-4 text-sm text-gray-600">
                            Great product! Exactly what I was looking for.
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((relatedProduct) => (
                <motion.div
                  key={relatedProduct.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="group relative"
                >
                  <div className="aspect-w-1 aspect-h-1 rounded-2xl overflow-hidden bg-gray-100 group-hover:opacity-75">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-sm font-medium text-gray-900">
                      <Link to={`/product/${relatedProduct.slug}`}>
                        {relatedProduct.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{relatedProduct.category}</p>
                    <p className="mt-1 text-sm font-medium text-gray-900">
                      ${relatedProduct.price.toFixed(2)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      <NewsletterSection />
      <FooterSection />
    </div>
  );
};

export default ProductDetails;