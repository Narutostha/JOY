import React from "react";
import NavbarSection from "../Homepage/sections/NavbarSection/NavbarSection";
import { FooterSection } from "../Homepage/sections/FooterSection/FooterSection";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const sections = [
  {
    title: "1. Information We Collect",
    content: `Personal Information:
• Name, email address, phone number
• Billing and shipping addresses
• Payment information
• Purchase history

Technical Information:
• IP address and browser details
• Device information
• Cookies and usage data
• Location data (if permitted)`
  },
  {
    title: "2. How We Use Your Information",
    content: `We use your information to:
• Process and fulfill your orders
• Communicate about your purchases
• Send promotional materials (with consent)
• Improve our services and website
• Prevent fraud and enhance security
• Comply with legal obligations`
  },
  {
    title: "3. Information Sharing",
    content: `We may share your information with:
• Payment processors for transactions
• Delivery partners for shipping
• Service providers for website operation
• Law enforcement when required by law

We never sell your personal information to third parties.`
  },
  {
    title: "4. Data Security",
    content: `We implement various security measures:
• Encryption of sensitive data
• Secure socket layer (SSL) technology
• Regular security assessments
• Limited access to personal information
• Employee confidentiality agreements`
  },
  {
    title: "5. Your Rights",
    content: `You have the right to:
• Access your personal information
• Correct inaccurate information
• Request deletion of your data
• Opt-out of marketing communications
• Lodge complaints with authorities`
  },
  {
    title: "6. Cookies and Tracking",
    content: `We use cookies to:
• Remember your preferences
• Analyze website traffic
• Improve user experience
• Provide personalized content
• Track marketing effectiveness

You can control cookie settings through your browser.`
  },
  {
    title: "7. Marketing Communications",
    content: `We may send you marketing communications:
• Only with your explicit consent
• Containing relevant products and offers
• With clear opt-out options
• At reasonable frequencies

You can unsubscribe at any time.`
  },
  {
    title: "8. Children's Privacy",
    content: `• We do not knowingly collect data from children under 13
• Parents can request removal of children's information
• We comply with children's privacy protection laws
• Special protections are in place for minor's data`
  },
  {
    title: "9. Changes to Privacy Policy",
    content: `• We may update this policy periodically
• Changes will be posted on this page
• Significant changes will be notified via email
• Continued use implies acceptance of changes`
  },
  {
    title: "10. Data Retention",
    content: `We retain your information:
• As long as necessary for service provision
• To comply with legal obligations
• For legitimate business purposes
• Until you request deletion

Data is securely deleted when no longer needed.`
  }
];

const PrivacyPolicy = () => {
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
                Privacy Policy
              </h1>
              <p className="text-indigo-100 max-w-2xl mx-auto">
                Your privacy is important to us. Learn how we collect, use, and protect your personal information.
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
                <Shield className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Privacy Overview</h2>
                <p className="text-gray-600">Last updated: March 1, 2024</p>
              </div>
            </div>

            <p className="text-gray-600">
              At Joy Store, we take your privacy seriously. This Privacy Policy describes how we collect,
              use, and protect your personal information when you use our website and services. By using
              our website, you agree to the collection and use of information in accordance with this policy.
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
              Contact Us About Privacy
            </h2>
            <p className="text-gray-600">
              If you have any questions about our Privacy Policy or how we handle your data, please contact our Data Protection Officer:
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>Email: privacy@joystore.com.np</li>
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

export default PrivacyPolicy;