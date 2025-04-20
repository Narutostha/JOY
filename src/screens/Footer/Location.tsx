import React from "react";
import NavbarSection from "../Homepage/sections/NavbarSection/NavbarSection";
import { FooterSection } from "../Homepage/sections/FooterSection/FooterSection";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const locations = [
  {
    name: "Main Store - Koteshwor",
    address: "Bhatbhateni Building, 2nd Floor, Koteshwor",
    city: "Kathmandu",
    phone: "+977 01-456723",
    email: "koteshwor@joystore.com.np",
    hours: "10:00 AM - 7:00 PM",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.0305842767036!2d85.3461!3d27.6749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c3dddddddd%3A0x2dd3dddddddddddd!2sKoteshwor%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1629789145684!5m2!1sen!2snp"
  },
  {
    name: "Pokhara Branch",
    address: "Lakeside Road, Near Barahi Temple",
    city: "Pokhara",
    phone: "+977 061-123456",
    email: "pokhara@joystore.com.np",
    hours: "10:00 AM - 7:00 PM",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.0305842767036!2d83.9461!3d28.2049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c3dddddddd%3A0x2dd3dddddddddddd!2sLakeside%2C%20Pokhara!5e0!3m2!1sen!2snp!4v1629789145684!5m2!1sen!2snp"
  },
  {
    name: "Chitwan Branch",
    address: "Bharatpur-10, Near Central Bus Terminal",
    city: "Chitwan",
    phone: "+977 056-789012",
    email: "chitwan@joystore.com.np",
    hours: "10:00 AM - 7:00 PM",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0305842767036!2d84.4461!3d27.6849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c3dddddddd%3A0x2dd3dddddddddddd!2sBharatpur%2C%20Chitwan!5e0!3m2!1sen!2snp!4v1629789145684!5m2!1sen!2snp"
  }
];

const Location = () => {
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
              Our Locations
            </motion.h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 gap-12">
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-sm overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">{location.name}</h2>
                    
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-indigo-100 p-3 rounded-full">
                          <MapPin className="h-6 w-6 text-indigo-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Address</p>
                          <p className="text-gray-600">{location.address}</p>
                          <p className="text-gray-600">{location.city}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="bg-indigo-100 p-3 rounded-full">
                          <Phone className="h-6 w-6 text-indigo-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Phone</p>
                          <p className="text-gray-600">{location.phone}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="bg-indigo-100 p-3 rounded-full">
                          <Mail className="h-6 w-6 text-indigo-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Email</p>
                          <p className="text-gray-600">{location.email}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="bg-indigo-100 p-3 rounded-full">
                          <Clock className="h-6 w-6 text-indigo-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Business Hours</p>
                          <p className="text-gray-600">Monday - Saturday: {location.hours}</p>
                          <p className="text-gray-600">Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="h-[400px] lg:h-auto">
                    <iframe
                      src={location.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default Location;