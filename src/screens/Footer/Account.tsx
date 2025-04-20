import React from "react";
import NavbarSection from "../Homepage/sections/NavbarSection/NavbarSection";
import { FooterSection } from "../Homepage/sections/FooterSection/FooterSection";
import { motion } from "framer-motion";
import { User, Package, Heart, Settings, LogOut } from "lucide-react";
import { Button } from "../../components/ui/button";

const Account = () => {
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
              My Account
            </motion.h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="h-20 w-20 rounded-full bg-indigo-100 flex items-center justify-center">
                    <User className="h-10 w-10 text-indigo-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">John Doe</h2>
                    <p className="text-gray-600">john.doe@example.com</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Button
                    variant="outline"
                    className="flex items-center justify-center space-x-2 h-16"
                  >
                    <Package className="h-6 w-6" />
                    <span>My Orders</span>
                  </Button>

                  <Button
                    variant="outline"
                    className="flex items-center justify-center space-x-2 h-16"
                  >
                    <Heart className="h-6 w-6" />
                    <span>Wishlist</span>
                  </Button>

                  <Button
                    variant="outline"
                    className="flex items-center justify-center space-x-2 h-16"
                  >
                    <Settings className="h-6 w-6" />
                    <span>Settings</span>
                  </Button>

                  <Button
                    variant="outline"
                    className="flex items-center justify-center space-x-2 h-16 text-red-600 hover:text-red-700"
                  >
                    <LogOut className="h-6 w-6" />
                    <span>Logout</span>
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Full Name</p>
                    <p className="text-gray-900">John Doe</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-900">john.doe@example.com</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-gray-900">+977 98XXXXXXXX</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Shipping Address</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="text-gray-900">123 Main Street</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">City</p>
                    <p className="text-gray-900">Kathmandu</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Postal Code</p>
                    <p className="text-gray-900">44600</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 bg-white rounded-2xl shadow-sm p-8"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Orders</h3>
              <div className="space-y-6">
                {[1, 2, 3].map((order) => (
                  <div
                    key={order}
                    className="flex items-center justify-between p-4 border rounded-lg hover:border-indigo-200 transition-colors"
                  >
                    <div>
                      <p className="font-medium text-gray-900">Order #{order}23456</p>
                      <p className="text-sm text-gray-500">Placed on March {order}, 2024</p>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default Account;