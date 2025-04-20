import React from "react";
import NavbarSection from "../Homepage/sections/NavbarSection/NavbarSection";
import { FooterSection } from "../Homepage/sections/FooterSection/FooterSection";
import { motion } from "framer-motion";
import { Truck, Clock, MapPin, AlertCircle } from "lucide-react";

const deliveryZones = [
  {
    zone: "Zone 1 - Kathmandu Valley",
    areas: ["Kathmandu", "Lalitpur", "Bhaktapur"],
    time: "1-2 business days",
    cost: "Free delivery on orders above NPR 1,000"
  },
  {
    zone: "Zone 2 - Major Cities",
    areas: ["Pokhara", "Chitwan", "Biratnagar", "Birgunj"],
    time: "2-3 business days",
    cost: "NPR 100 - 200"
  },
  {
    zone: "Zone 3 - Other Locations",
    areas: ["All other districts"],
    time: "3-5 business days",
    cost: "NPR 200 - 400"
  }
];

const DeliveryDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarSection />
      
      <main className="pt-[150px] sm:pt-[170px] md:pt-[80px]">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-white text-center"
            >
              Delivery Information
            </motion.h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Delivery Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <Truck className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fast Delivery</h3>
              <p className="text-gray-600">
                We ensure quick and reliable delivery across Nepal through our trusted delivery partners.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <Clock className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-time Tracking</h3>
              <p className="text-gray-600">
                Track your order status in real-time from dispatch to delivery at your doorstep.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <MapPin className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Nationwide Coverage</h3>
              <p className="text-gray-600">
                We deliver to all major cities and remote locations across Nepal.
              </p>
            </div>
          </motion.div>

          {/* Delivery Zones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-sm p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Delivery Zones & Charges</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {deliveryZones.map((zone, index) => (
                <div
                  key={index}
                  className="border rounded-xl p-6 hover:border-indigo-200 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{zone.zone}</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Areas Covered</p>
                      <p className="text-gray-900">{zone.areas.join(", ")}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Delivery Time</p>
                      <p className="text-gray-900">{zone.time}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Delivery Cost</p>
                      <p className="text-gray-900">{zone.cost}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Additional Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-sm p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Delivery Process</h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-600 font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Order Confirmation</h3>
                    <p className="text-gray-600">You'll receive an order confirmation email</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-600 font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Order Processing</h3>
                    <p className="text-gray-600">We prepare your order for shipping</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-600 font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Order Dispatch</h3>
                    <p className="text-gray-600">Your order is handed over to our delivery partner</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-600 font-semibold">4</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Delivery</h3>
                    <p className="text-gray-600">Order is delivered to your specified address</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <AlertCircle className="h-6 w-6 text-indigo-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Important Notes</h2>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-600">• Delivery times are estimates and may vary based on location and weather conditions</p>
                  <p className="text-gray-600">• Orders placed after 2 PM will be processed the next business day</p>
                  <p className="text-gray-600">• A valid phone number is required for delivery coordination</p>
                  <p className="text-gray-600">• Someone must be present to receive and sign for the delivery</p>
                  <p className="text-gray-600">• We may contact you to confirm delivery details</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Delivery Support</h2>
                
                <div className="space-y-4">
                  <p className="text-gray-600">For any delivery-related queries:</p>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-indigo-600" />
                    <p className="text-gray-900">+977 01-456723</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-indigo-600" />
                    <p className="text-gray-900">delivery@joystore.com.np</p>
                  </div>
                  <p className="text-gray-600">Available Monday to Saturday, 10 AM - 6 PM</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default DeliveryDetails;