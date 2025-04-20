import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, Package, Truck, MapPin } from "lucide-react";
import NavbarSection from "../Homepage/sections/NavbarSection/NavbarSection";
import { FooterSection } from "../Homepage/sections/FooterSection/FooterSection";
import { Button } from "../../components/ui/button";
import { generateInvoicePDF } from '../../utils/generateInvoicePDF';

export const OrderConfirmation = () => {
  const location = useLocation();
  const orderDetails = location.state?.orderDetails || {
    orderId: "ORD" + Math.random().toString(36).substr(2, 9).toUpperCase(),
    paymentMethod: "Credit Card",
    total: 999.99,
    items: 3,
    estimatedDelivery: "3-5 business days",
  };

  const steps = [
    {
      title: "Order Placed",
      description: "Your order has been confirmed",
      icon: CheckCircle,
      status: "completed",
    },
    {
      title: "Processing",
      description: "We're preparing your items",
      icon: Package,
      status: "current",
    },
    {
      title: "Shipping",
      description: "Your order will be shipped soon",
      icon: Truck,
      status: "upcoming",
    },
    {
      title: "Delivery",
      description: "Expected delivery in 3-5 days",
      icon: MapPin,
      status: "upcoming",
    },
  ];

  const handleDownloadInvoice = () => {
    generateInvoicePDF(orderDetails);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarSection />

      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-8 sm:px-6 sm:py-12">
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/25 backdrop-blur-sm"
              >
                <CheckCircle className="h-12 w-12 text-white" />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                Order Confirmed!
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-2 text-lg text-indigo-100"
              >
                Thank you for your purchase
              </motion.p>
            </div>
          </div>

          {/* Order Details */}
          <div className="px-4 py-6 sm:px-6 lg:p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              <div className="rounded-lg bg-gray-50 p-6">
                <dt className="text-sm font-medium text-gray-500">Order number</dt>
                <dd className="mt-1 text-lg font-semibold text-gray-900">{orderDetails.orderId}</dd>
              </div>
              <div className="rounded-lg bg-gray-50 p-6">
                <dt className="text-sm font-medium text-gray-500">Payment method</dt>
                <dd className="mt-1 text-lg font-semibold text-gray-900">{orderDetails.paymentMethod}</dd>
              </div>
              <div className="rounded-lg bg-gray-50 p-6">
                <dt className="text-sm font-medium text-gray-500">Total amount</dt>
                <dd className="mt-1 text-lg font-semibold text-gray-900">${orderDetails.total.toFixed(2)}</dd>
              </div>
              <div className="rounded-lg bg-gray-50 p-6">
                <dt className="text-sm font-medium text-gray-500">Items</dt>
                <dd className="mt-1 text-lg font-semibold text-gray-900">{orderDetails.items} items</dd>
              </div>
            </motion.div>

            {/* Order Progress */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12"
            >
              <h2 className="text-lg font-medium text-gray-900 mb-8">Order Progress</h2>
              <div className="relative">
                {/* Progress Line */}
                <div className="absolute left-1/2 top-0 h-full w-px bg-gray-200 -translate-x-1/2" />

                {/* Steps */}
                <div className="relative space-y-8">
                  {steps.map((step, index) => (
                    <div
                      key={step.title}
                      className={`flex items-center ${
                        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                      }`}
                    >
                      <div className={`flex-1 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                        <h3 className="text-lg font-medium text-gray-900">{step.title}</h3>
                        <p className="mt-1 text-sm text-gray-500">{step.description}</p>
                      </div>
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-full border-2 ${
                          step.status === "completed"
                            ? "bg-indigo-600 border-indigo-600"
                            : step.status === "current"
                            ? "bg-white border-indigo-600"
                            : "bg-white border-gray-300"
                        }`}
                      >
                        <step.icon
                          className={`h-6 w-6 ${
                            step.status === "completed"
                              ? "text-white"
                              : step.status === "current"
                              ? "text-indigo-600"
                              : "text-gray-400"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Estimated Delivery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 rounded-lg bg-gray-50 p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Estimated Delivery</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Your order will be delivered in {orderDetails.estimatedDelivery}
                  </p>
                </div>
                <Truck className="h-8 w-8 text-gray-400" />
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-12 flex flex-wrap gap-4 justify-center"
            >
              <Link to="/products">
                <Button variant="outline" className="w-full sm:w-auto">
                  Continue Shopping
                </Button>
              </Link>
              <Button 
                className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700"
                onClick={() => handleDownloadInvoice()}
              >
                Download Invoice
              </Button>
              <Button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700">
                Track Order
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default OrderConfirmation;