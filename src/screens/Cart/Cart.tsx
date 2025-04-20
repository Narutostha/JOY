import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { ShoppingCart, Trash2, Plus, Minus, CreditCard, Truck, Store, DollarSign } from "lucide-react";
import { cartAtom, cartTotalAtom } from "../../store/cart";
import NavbarSection from "../Homepage/sections/NavbarSection/NavbarSection";
import { FooterSection } from "../Homepage/sections/FooterSection/FooterSection";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";

type PaymentMethod = 'stripe' | 'paypal' | 'cod' | 'pickup';

export const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useAtom(cartAtom);
  const [total] = useAtom(cartTotalAtom);
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>('stripe');
  const [pickupLocation, setPickupLocation] = useState('main-store');

  const updateQuantity = (id: number, color: string | undefined, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCart(cart.map(item => 
      item.id === id && item.color === color
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const removeItem = (id: number, color: string | undefined) => {
    setCart(cart.filter(item => !(item.id === id && item.color === color)));
  };

  const handleCheckout = () => {
    const orderDetails = {
      orderId: "ORD" + Math.random().toString(36).substr(2, 9).toUpperCase(),
      paymentMethod: selectedPayment === 'stripe' 
        ? 'Credit Card' 
        : selectedPayment === 'paypal'
        ? 'PayPal'
        : selectedPayment === 'cod'
        ? 'Cash on Delivery'
        : 'Store Pickup',
      total: finalTotal,
      items: cart.reduce((total, item) => total + item.quantity, 0),
      estimatedDelivery: selectedPayment === 'pickup' ? 'Ready for pickup in 2 hours' : '3-5 business days'
    };

    // Clear the cart
    setCart([]);

    // Navigate to confirmation page with order details
    navigate('/order-confirmation', { state: { orderDetails } });
  };

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

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <NavbarSection />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block p-6 rounded-full bg-gray-100 mb-8"
            >
              <ShoppingCart className="w-12 h-12 text-gray-400" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Your cart is empty
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 mb-8"
            >
              Looks like you haven't added anything to your cart yet.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/products">
                <Button className="bg-indigo-600 hover:bg-indigo-700">
                  Continue Shopping
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
        <FooterSection />
      </div>
    );
  }

  const subtotal = total;
  const shipping = selectedPayment === 'cod' ? 10 : 0;
  const tax = total * 0.13;
  const finalTotal = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarSection />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            variants={itemVariants}
            className="text-3xl font-bold text-gray-900 mb-8"
          >
            Shopping Cart ({cart.length} {cart.length === 1 ? 'item' : 'items'})
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-8"
            >
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="divide-y divide-gray-200">
                  {cart.map((item, index) => (
                    <motion.div
                      key={`${item.id}-${item.color}`}
                      variants={itemVariants}
                      className="p-6"
                    >
                      <div className="flex items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 rounded-lg object-cover"
                        />
                        <div className="ml-6 flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="text-lg font-medium text-gray-900">
                                {item.name}
                              </h3>
                              {item.color && (
                                <p className="mt-1 text-sm text-gray-500">
                                  Color: {item.color}
                                </p>
                              )}
                              <p className="mt-1 text-lg font-medium text-gray-900">
                                ${item.price.toFixed(2)}
                              </p>
                            </div>
                            <button
                              onClick={() => removeItem(item.id, item.color)}
                              className="text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                          <div className="mt-4 flex items-center">
                            <div className="flex items-center border border-gray-200 rounded-lg">
                              <button
                                onClick={() => updateQuantity(item.id, item.color, item.quantity - 1)}
                                className="p-2 hover:bg-gray-50"
                              >
                                <Minus className="w-4 h-4 text-gray-400" />
                              </button>
                              <span className="px-4 py-2 text-gray-900 font-medium">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.color, item.quantity + 1)}
                                className="p-2 hover:bg-gray-50"
                              >
                                <Plus className="w-4 h-4 text-gray-400" />
                              </button>
                            </div>
                            <div className="ml-auto">
                              <p className="text-lg font-medium text-gray-900">
                                ${(item.price * item.quantity).toFixed(2)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-6">Payment Method</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    onClick={() => setSelectedPayment('stripe')}
                    className={`p-4 border rounded-xl flex items-center gap-3 transition-all ${
                      selectedPayment === 'stripe'
                        ? 'border-indigo-600 bg-indigo-50'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <CreditCard className={`w-5 h-5 ${selectedPayment === 'stripe' ? 'text-indigo-600' : 'text-gray-400'}`} />
                    <div className="text-left">
                      <p className="font-medium text-gray-900">Credit Card</p>
                      <p className="text-sm text-gray-500">Pay securely with Stripe</p>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelectedPayment('paypal')}
                    className={`p-4 border rounded-xl flex items-center gap-3 transition-all ${
                      selectedPayment === 'paypal'
                        ? 'border-indigo-600 bg-indigo-50'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <img src="/paypal-logo.png" alt="PayPal" className="w-5 h-5" />
                    <div className="text-left">
                      <p className="font-medium text-gray-900">PayPal</p>
                      <p className="text-sm text-gray-500">Pay with your PayPal account</p>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelectedPayment('cod')}
                    className={`p-4 border rounded-xl flex items-center gap-3 transition-all ${
                      selectedPayment === 'cod'
                        ? 'border-indigo-600 bg-indigo-50'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <DollarSign className={`w-5 h-5 ${selectedPayment === 'cod' ? 'text-indigo-600' : 'text-gray-400'}`} />
                    <div className="text-left">
                      <p className="font-medium text-gray-900">Cash on Delivery</p>
                      <p className="text-sm text-gray-500">Pay when you receive</p>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelectedPayment('pickup')}
                    className={`p-4 border rounded-xl flex items-center gap-3 transition-all ${
                      selectedPayment === 'pickup'
                        ? 'border-indigo-600 bg-indigo-50'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <Store className={`w-5 h-5 ${selectedPayment === 'pickup' ? 'text-indigo-600' : 'text-gray-400'}`} />
                    <div className="text-left">
                      <p className="font-medium text-gray-900">Store Pickup</p>
                      <p className="text-sm text-gray-500">Pick up from our store</p>
                    </div>
                  </button>
                </div>

                {selectedPayment === 'pickup' && (
                  <div className="mt-6">
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Select Pickup Location</h3>
                    <select
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      className="w-full border-gray-200 rounded-lg"
                    >
                      <option value="main-store">Main Store - Kathmandu</option>
                      <option value="branch-1">Branch 1 - Pokhara</option>
                      <option value="branch-2">Branch 2 - Chitwan</option>
                    </select>
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="lg:col-span-4"
            >
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-6">
                <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Subtotal</span>
                    <span className="text-gray-900">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Shipping</span>
                    <span className="text-gray-900">
                      {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Tax</span>
                    <span className="text-gray-900">${tax.toFixed(2)}</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between items-center">
                  <span className="text-base font-medium text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-gray-900">
                    ${finalTotal.toFixed(2)}
                  </span>
                </div>

                <Button 
                  onClick={handleCheckout}
                  className="w-full bg-indigo-600 hover:bg-indigo-700"
                >
                  {selectedPayment === 'pickup' ? 'Complete Order' : 'Proceed to Payment'}
                </Button>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-500">
                      {selectedPayment === 'cod' ? 'Cash on delivery available' : 'Free shipping on all orders'}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-500">30-day money-back guarantee</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-500">Secure checkout</span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Link 
                  to="/products"
                  className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Continue Shopping
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <FooterSection />
    </div>
  );
};

export default Cart;