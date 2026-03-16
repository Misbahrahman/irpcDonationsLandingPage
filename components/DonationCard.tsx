'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, IndianRupee } from 'lucide-react';
import { openRazorpayCheckout, formatCurrency } from '@/lib/razorpay';
import { DonationAmount } from '@/types/donation';

const presetAmounts: DonationAmount[] = [
  { value: 100, label: '₹100' },
  { value: 500, label: '₹500' },
  { value: 1000, label: '₹1000' },
  { value: 5000, label: '₹5000' },
];

export default function DonationCard() {
  const [selectedAmount, setSelectedAmount] = useState<number>(1000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setIsCustom(false);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (value: string) => {
    const numValue = parseInt(value) || 0;
    setCustomAmount(value);
    setSelectedAmount(numValue);
    setIsCustom(true);
  };

  const handleDonate = async () => {
    if (selectedAmount < 100) {
      alert('Minimum donation amount is ₹100');
      return;
    }

    setIsProcessing(true);

    try {
      await openRazorpayCheckout(
        selectedAmount,
        (response) => {
          console.log('Payment successful:', response);
          setShowSuccess(true);
          setIsProcessing(false);
          setTimeout(() => setShowSuccess(false), 5000);
        },
        (error) => {
          console.error('Payment failed:', error);
          alert('Payment failed. Please try again.');
          setIsProcessing(false);
        }
      );
    } catch (error) {
      console.error('Error:', error);
      setIsProcessing(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative group"
    >
      {/* Outer glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

      {/* Main card */}
      <div className="relative bg-gradient-to-br from-white via-blue-50/30 to-white backdrop-blur-xl rounded-3xl shadow-2xl p-5 md:p-6 border border-white/60 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 opacity-50"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl"></div>

        <div className="relative z-10">
          {/* Success Message */}
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="mb-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl flex items-center gap-3 shadow-lg"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5, repeat: 2 }}
              >
                <Heart className="w-7 h-7 text-green-600 fill-green-600" />
              </motion.div>
              <div>
                <p className="font-bold text-green-900">Jazakallah Khair!</p>
                <p className="text-sm text-green-700">Your donation has been received.</p>
              </div>
            </motion.div>
          )}

          {/* Card Header */}
          <div className="text-center mb-5">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-3 shadow-lg"
            >
              <Heart className="w-8 h-8 text-white" />
            </motion.div>
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent mb-2">
              Make a Donation
            </h3>
            <p className="text-gray-700 text-sm md:text-base font-medium">
              Support our mission this blessed <span className="text-primary font-bold">Ramadan</span>
            </p>
          </div>

          {/* Ramadan 2026 Progress Bar - Clean & Simple */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            {/* Main Amount Display */}
            <div className="mb-3">
              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-2"
              >
                ₹21000
              </motion.h2>
              <p className="text-sm sm:text-base text-gray-600 font-medium">
                raised of <span className="text-gray-900 font-bold">₹1,00,000</span> goal
              </p>
            </div>

            {/* Simple Progress Bar */}
            <div className="mb-4">
              <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '21%' }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full"
                >
                  {/* Subtle shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                      repeatDelay: 1
                    }}
                  />
                </motion.div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>
                <span className="text-gray-700 font-semibold">
                  ₹54K <span className="text-gray-500 font-normal">raised</span>
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                <span className="text-gray-700 font-semibold">
                  ₹46K <span className="text-gray-500 font-normal">remaining</span>
                </span>
              </div>
            </div>

            {/* Campaign Badge */}
            <div className="mt-4 flex items-center justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-full">
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-2 h-2 rounded-full bg-teal-500"
                ></motion.div>
                <span className="text-xs font-bold text-teal-900 uppercase tracking-wide">
                  Ramadan 2026 Campaign
                </span>
              </div>
            </div>
          </motion.div>

          {/* Preset Amounts */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            {presetAmounts.map((amount) => (
              <motion.button
                key={amount.value}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleAmountSelect(amount.value)}
                className={`relative py-4 px-5 rounded-2xl font-bold text-lg transition-all duration-300 overflow-hidden ${
                  selectedAmount === amount.value && !isCustom
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-2xl'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-primary/30 shadow-md hover:shadow-lg'
                }`}
              >
                {selectedAmount === amount.value && !isCustom && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </>
                )}
                <span className="relative z-10">{amount.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Custom Amount */}
          <div className="mb-5">
            <label className="block text-sm font-bold text-gray-800 mb-2">
              Or enter custom amount
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <IndianRupee className="h-5 w-5 text-primary" />
              </div>
              <input
                type="number"
                value={customAmount}
                onChange={(e) => handleCustomAmountChange(e.target.value)}
                placeholder="Enter amount"
                className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-300 rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all text-lg font-semibold shadow-md focus:shadow-lg"
                min="100"
              />
            </div>
            <p className="text-xs text-gray-500 mt-1.5 ml-1">Minimum donation: ₹100</p>
          </div>

          {/* Donate Button */}
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleDonate}
            disabled={isProcessing || selectedAmount < 100}
            className="relative w-full bg-gradient-to-r from-primary via-secondary to-primary text-white font-bold py-5 px-6 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl disabled:opacity-50 disabled:cursor-not-allowed text-lg flex items-center justify-center gap-3 overflow-hidden group"
          >
            {/* Animated background on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-secondary via-primary to-secondary"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />

            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

            <span className="relative z-10 flex items-center gap-3">
              {isProcessing ? (
                <>
                  <div className="animate-spin rounded-full h-6 w-6 border-3 border-white border-t-transparent"></div>
                  Processing...
                </>
              ) : (
                <>
                  <Heart className="w-6 h-6 fill-white" />
                  Donate {selectedAmount > 0 && formatCurrency(selectedAmount)}
                </>
              )}
            </span>
          </motion.button>

          {/* Trust Indicators */}
          <div className="mt-5 pt-4 border-t-2 border-gray-200">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="flex items-center gap-2 bg-green-50 px-3 py-1.5 rounded-full border border-green-200">
                <Shield className="w-4 h-4 text-green-600" />
                <span className="text-xs font-semibold text-green-800">Secure Payment</span>
              </div>
            </div>
            <p className="text-xs text-gray-600 text-center font-medium">
              100% Transparent Usage • Track Your Impact
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
