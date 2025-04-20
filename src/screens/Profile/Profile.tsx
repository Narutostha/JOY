import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Package, Heart, Settings, LogOut } from 'lucide-react';
import NavbarSection from '../Homepage/sections/NavbarSection/NavbarSection';
import { FooterSection } from '../Homepage/sections/FooterSection/FooterSection';

const menuItems = [
  {
    icon: User,
    label: 'Profile Settings',
    description: 'Manage your account details and preferences',
    route: '/profile/settings',
  },
  {
    icon: Package,
    label: 'My Orders',
    description: 'Track orders and view order history',
    route: '/orders',
  },
  {
    icon: Heart,
    label: 'Wishlist',
    description: 'View and manage your saved items',
    route: '/wishlist',
  },
  {
    icon: Settings,
    label: 'Account Settings',
    description: 'Manage your security preferences',
    route: '/settings',
  },
  {
    icon: LogOut,
    label: 'Sign Out',
    description: 'Sign out of your account',
    action: 'logout',
  },
];

export const Profile = () => {
  const navigate = useNavigate();

  const handleMenuClick = (item: typeof menuItems[0]) => {
    if (item.action === 'logout') {
      // Handle logout
      console.log('Logging out...');
    } else {
      navigate(item.route);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarSection />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-8">
              <div className="flex items-center space-x-6">
                <div className="h-24 w-24 rounded-full bg-white/20 flex items-center justify-center">
                  <User className="h-12 w-12 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">John Doe</h1>
                  <p className="text-indigo-100">john.doe@example.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <button
                  onClick={() => handleMenuClick(item)}
                  className="w-full text-left"
                >
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-200 hover:shadow-md hover:border-indigo-100">
                    <div className="flex items-start space-x-4">
                      <div className="bg-indigo-50 rounded-lg p-3">
                        <item.icon className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{item.label}</h3>
                        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default Profile;