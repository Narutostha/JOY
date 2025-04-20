import React from "react";
import NavbarSection from "../Homepage/sections/NavbarSection/NavbarSection";
import { FooterSection } from "../Homepage/sections/FooterSection/FooterSection";
import { motion } from "framer-motion";
import { Calculator } from "lucide-react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

const EMI = () => {
  const [amount, setAmount] = React.useState("");
  const [months, setMonths] = React.useState("");
  const [interestRate, setInterestRate] = React.useState("");
  const [emiAmount, setEmiAmount] = React.useState<number | null>(null);

  const calculateEMI = (e: React.FormEvent) => {
    e.preventDefault();
    const principal = parseFloat(amount);
    const rate = parseFloat(interestRate) / 12 / 100;
    const time = parseFloat(months);
    
    const emi = principal * rate * Math.pow(1 + rate, time) / (Math.pow(1 + rate, time) - 1);
    setEmiAmount(Math.round(emi * 100) / 100);
  };

  const banks = [
    {
      name: "Nepal Bank Limited",
      logo: "/bank-logos/nbl.png",
      interestRate: "12-15%",
      processingFee: "1-2%",
      tenure: "3-36 months"
    },
    {
      name: "NIC Asia Bank",
      logo: "/bank-logos/nic.png",
      interestRate: "11-14%",
      processingFee: "1%",
      tenure: "6-48 months"
    },
    {
      name: "Nabil Bank",
      logo: "/bank-logos/nabil.png",
      interestRate: "11.5-14.5%",
      processingFee: "1-1.5%",
      tenure: "3-36 months"
    }
  ];

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
              EMI Calculator
            </motion.h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-sm p-8"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <Calculator className="h-6 w-6 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Calculate Your EMI</h2>
              </div>

              <form onSubmit={calculateEMI} className="space-y-6">
                <div>
                  <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
                    Purchase Amount (NPR)
                  </label>
                  <Input
                    id="amount"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="months" className="block text-sm font-medium text-gray-700 mb-2">
                    Tenure (Months)
                  </label>
                  <Input
                    id="months"
                    type="number"
                    value={months}
                    onChange={(e) => setMonths(e.target.value)}
                    placeholder="Enter number of months"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                    Interest Rate (% per annum)
                  </label>
                  <Input
                    id="interest"
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    placeholder="Enter interest rate"
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
                  Calculate EMI
                </Button>
              </form>

              {emiAmount !== null && (
                <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">EMI Details</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monthly EMI:</span>
                      <span className="font-semibold text-gray-900">NPR {emiAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Amount:</span>
                      <span className="font-semibold text-gray-900">
                        NPR {(emiAmount * parseFloat(months)).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Interest:</span>
                      <span className="font-semibold text-gray-900">
                        NPR {((emiAmount * parseFloat(months)) - parseFloat(amount)).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Partner Banks</h2>
                
                <div className="space-y-6">
                  {banks.map((bank) => (
                    <div
                      key={bank.name}
                      className="border rounded-xl p-6 hover:border-indigo-200 transition-colors"
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-16 h-16 bg-gray-100 rounded-lg"></div>
                        <h3 className="text-lg font-semibold text-gray-900">{bank.name}</h3>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500">Interest Rate</p>
                          <p className="font-medium text-gray-900">{bank.interestRate}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Processing Fee</p>
                          <p className="font-medium text-gray-900">{bank.processingFee}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Tenure</p>
                          <p className="font-medium text-gray-900">{bank.tenure}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">EMI Terms & Conditions</h2>
                
                <div className="space-y-4 text-gray-600">
                  <p>• Minimum purchase amount: NPR 25,000</p>
                  <p>• Valid government-issued ID required</p>
                  <p>• Processing time: 2-3 working days</p>
                  <p>• Early payment charges may apply</p>
                  <p>• Interest rates subject to change</p>
                  <p>• Bank approval required</p>
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

export default EMI;