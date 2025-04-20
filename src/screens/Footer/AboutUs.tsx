import React from "react";
import NavbarSection from "../Homepage/sections/NavbarSection/NavbarSection";
import { FooterSection } from "../Homepage/sections/FooterSection/FooterSection";
import { motion } from "framer-motion";

const AboutUs = () => {
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
              About Us
            </motion.h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-sm p-8 space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-900">Welcome to Joy Store</h2>
            
            <p className="text-gray-600">
              Joy Store is Nepal's premier destination for premium electronics and accessories. 
              As an authorized reseller of leading brands, we take pride in offering authentic products 
              with comprehensive warranty coverage and exceptional after-sales service.
            </p>

            <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
            <p className="text-gray-600">
              To provide our customers with the latest technology products while ensuring the highest 
              standards of customer service and support. We strive to make premium technology accessible 
              to everyone in Nepal.
            </p>

            <h3 className="text-xl font-semibold text-gray-900">Our Values</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Customer Satisfaction</li>
              <li>Product Authenticity</li>
              <li>Professional Service</li>
              <li>Innovation</li>
              <li>Integrity</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900">Why Choose Us?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Authorized Retailer</h4>
                <p className="text-gray-600">Official partner of premium brands ensuring authentic products</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Expert Support</h4>
                <p className="text-gray-600">Dedicated team of professionals for all your technical needs</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Warranty Coverage</h4>
                <p className="text-gray-600">Comprehensive warranty and after-sales support</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Nationwide Delivery</h4>
                <p className="text-gray-600">Fast and secure delivery across Nepal</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default AboutUs;