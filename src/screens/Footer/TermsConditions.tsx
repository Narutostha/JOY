import React from "react";
import NavbarSection from "../Homepage/sections/NavbarSection/NavbarSection";
import { FooterSection } from "../Homepage/sections/FooterSection/FooterSection";
import { motion } from "framer-motion";
import { ScrollText } from "lucide-react";

const sections = [
  {
    title: "1. Introduction",
    content: `These Terms and Conditions govern your use of Joy Store's website and services. By accessing or using our website, you agree to be bound by these terms. Please read them carefully before proceeding with any purchase or transaction.`
  },
  {
    title: "2. Definitions",
    content: `"Website" refers to Joy Store's e-commerce platform
"User" refers to any person accessing or using the website
"Products" refers to items available for purchase on the website
"Services" refers to any services provided through the website`
  },
  {
    title: "3. Account Registration",
    content: `Users must provide accurate and complete information during registration
Users are responsible for maintaining the confidentiality of their account
Users must immediately notify Joy Store of any unauthorized use of their account
Joy Store reserves the right to suspend or terminate accounts that violate these terms`
  },
  {
    title: "4. Product Information",
    content: `Product descriptions and specifications are provided for informational purposes
Images are representative and may vary from actual products
Prices are subject to change without notice
Stock availability is not guaranteed until order confirmation`
  },
  {
    title: "5. Ordering and Payment",
    content: `Orders are subject to acceptance and availability
Payments must be made through approved payment methods
Prices are inclusive of applicable taxes unless stated otherwise
Payment information is processed securely through trusted payment gateways`
  },
  {
    title: "6. Shipping and Delivery",
    content: `Delivery times are estimates and may vary by location
Shipping costs are calculated based on delivery location and order value
Risk of loss transfers to the customer upon delivery
Customers must inspect products upon delivery and report any damages`
  },
  {
    title: "7. Returns and Refunds",
    content: `Products can be returned within 7 days of delivery
Returns must be in original condition with all packaging and accessories
Refunds will be processed within 7-14 business days
Some products may be exempt from returns (e.g., personalized items)`
  },
  {
    title: "8. Warranty",
    content: `Products are covered by manufacturer warranty where applicable
Warranty terms vary by product and manufacturer
Warranty claims must be supported by proof of purchase
Warranty does not cover damage from misuse or unauthorized modifications`
  },
  {
    title: "9. Privacy and Data Protection",
    content: `Personal information is collected and processed according to our Privacy Policy
User data is protected using industry-standard security measures
Information may be shared with service providers for order fulfillment
Users have the right to access and correct their personal information`
  },
  {
    title: "10. Intellectual Property",
    content: `All content on the website is protected by copyright and other intellectual property rights
Users may not reproduce, distribute, or modify website content without permission
Trademarks and logos are the property of their respective owners
Unauthorized use of intellectual property may result in legal action`
  }
];

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarSection />
      
      <main className="pt-[150px] sm:pt-[170px] md:pt-[80px]">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold text-white mb-4">
                Terms and Conditions
              </h1>
              <p className="text-indigo-100 max-w-2xl mx-auto">
                Please read these terms and conditions carefully before using our services
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-sm p-8 mb-8"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-indigo-100 p-3 rounded-full">
                <ScrollText className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Terms Overview</h2>
                <p className="text-gray-600">Last updated: March 1, 2024</p>
              </div>
            </div>

            <p className="text-gray-600">
              Welcome to Joy Store. These terms and conditions outline the rules and regulations
              for the use of our website and services. By accessing this website, we assume you
              accept these terms and conditions in full. Do not continue to use Joy Store's website
              if you do not accept all of the terms and conditions stated on this page.
            </p>
          </motion.div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm p-8"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <div className="prose prose-indigo max-w-none">
                  <p className="text-gray-600 whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + sections.length * 0.1 }}
            className="bg-indigo-50 rounded-2xl p-8 mt-8"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>Email: legal@joystore.com.np</li>
              <li>Phone: +977 01-456723</li>
              <li>Address: Bhatbhateni Building, 2nd Floor, Koteshwor, Kathmandu</li>
            </ul>
          </motion.div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default TermsConditions;