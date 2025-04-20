import React from "react";
import NavbarSection from "../Homepage/sections/NavbarSection/NavbarSection";
import { FooterSection } from "../Homepage/sections/FooterSection/FooterSection";
import { motion } from "framer-motion";
import { HelpCircle, MessageCircle, Phone, Mail } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

const faqs = [
  {
    question: "What is your return policy?",
    answer: "We offer a 7-day return policy for most items. Products must be in their original condition with all packaging and accessories. Some restrictions apply to certain products."
  },
  {
    question: "How long does delivery take?",
    answer: "Delivery times vary by location. Within Kathmandu Valley, delivery typically takes 1-2 business days. For other locations in Nepal, it may take 3-5 business days."
  },
  {
    question: "Do you offer warranty on products?",
    answer: "Yes, all our products come with manufacturer warranty. The warranty period varies by product and brand. Please check individual product pages for specific warranty information."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods including cash on delivery, credit/debit cards, eSewa, Khalti, and bank transfers. EMI options are also available for eligible purchases."
  }
];

const CustomerSupport = () => {
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
              Customer Support
            </motion.h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Support Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Live Chat</h3>
              <p className="text-gray-600 mb-6">Chat with our support team in real-time</p>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                Start Chat
              </Button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Call Us</h3>
              <p className="text-gray-600 mb-6">Available Mon-Sat, 10AM-7PM</p>
              <Button variant="outline" className="w-full">
                +977 01-456723
              </Button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Email Support</h3>
              <p className="text-gray-600 mb-6">Get response within 24 hours</p>
              <Button variant="outline" className="w-full">
                support@joystore.com.np
              </Button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-sm p-8"
            >
              <div className="flex items-center space-x-4 mb-8">
                <HelpCircle className="h-8 w-8 text-indigo-600" />
                <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
              </div>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-sm p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h2>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <Input id="name" type="text" placeholder="John Doe" required />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input id="subject" type="text" placeholder="How can we help?" required />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>

                <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default CustomerSupport;