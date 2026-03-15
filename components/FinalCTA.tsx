'use client';

import { motion } from 'framer-motion';
import { Heart, Smartphone, Building2, QrCode, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function FinalCTA() {
  const [showBankDetails, setShowBankDetails] = useState(false);

  const handleDonateClick = () => {
    // Scroll to top donation card
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary via-primary to-secondary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Help Us Continue This Mission
          </motion.h2>

          {/* Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto mb-8"
          >
            <p className="text-lg md:text-xl text-blue-50 leading-relaxed mb-4">
              &quot;The example of those who spend their wealth in the way of Allah is like a seed that grows seven spikes; in each spike is a hundred grains.&quot;
            </p>
            <p className="text-base md:text-lg text-blue-100">
              — Qur&apos;an 2:261
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto mb-10"
          >
            <p className="text-base md:text-lg text-blue-50">
              In these blessed nights of <span className="font-bold text-white">Ramadan</span> and{' '}
              <span className="font-bold text-white">Laylatul Qadr</span>, your charity is multiplied manifold.
              Support our Dawah efforts and help us spread the light of Islam.
            </p>
          </motion.div>

          {/* Main CTA Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDonateClick}
            className="inline-flex items-center gap-3 bg-white text-primary hover:bg-blue-50 font-bold text-lg md:text-xl px-8 md:px-12 py-4 md:py-5 rounded-full shadow-2xl transition-all duration-200 mb-12"
          >
            <Heart className="w-6 h-6" />
            Donate Now
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Alternative Payment Methods */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* UPI Payment */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/20 rounded-xl">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                UPI Payment
              </h3>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4">
                <p className="text-sm text-gray-600 mb-2">UPI ID</p>
                <p className="text-lg md:text-xl font-bold text-primary font-mono">
                  irpc@upi
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  (Replace with actual UPI ID)
                </p>
              </div>

              <div className="bg-white/10 rounded-xl p-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-xl mb-3 flex items-center justify-center">
                    <QrCode className="w-16 h-16 md:w-20 md:h-20 text-primary" />
                  </div>
                  <p className="text-sm text-blue-100">
                    Scan QR Code to Pay
                  </p>
                  <p className="text-xs text-blue-200 mt-1">
                    (Add actual QR code image)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bank Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/20 rounded-xl">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Bank Transfer
              </h3>
            </div>

            <button
              onClick={() => setShowBankDetails(!showBankDetails)}
              className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 mb-4"
            >
              {showBankDetails ? 'Hide' : 'Show'} Bank Details
            </button>

            {showBankDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-white rounded-xl p-4 space-y-3"
              >
                <div>
                  <p className="text-xs text-gray-500 mb-1">Account Name</p>
                  <p className="text-sm font-semibold text-gray-800">
                    Islamic Research & Propagation Center
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Account Number</p>
                  <p className="text-sm font-mono font-semibold text-gray-800">
                    XXXX XXXX XXXX
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">IFSC Code</p>
                  <p className="text-sm font-mono font-semibold text-gray-800">
                    XXXXXXXX
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Bank Name</p>
                  <p className="text-sm font-semibold text-gray-800">
                    Bank Name Here
                  </p>
                </div>
                <p className="text-xs text-gray-500 italic pt-2 border-t">
                  Replace with actual bank details
                </p>
              </motion.div>
            )}

            {!showBankDetails && (
              <div className="text-center py-8">
                <p className="text-blue-100 text-sm">
                  Click above to view complete bank details for direct transfer
                </p>
              </div>
            )}
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-blue-100 text-sm md:text-base">
            All donations are eligible for 80G tax exemption • Your contribution is Amanah
          </p>
          <p className="text-blue-200 text-xs md:text-sm mt-2">
            May Allah accept your charity and multiply your rewards
          </p>
        </motion.div>
      </div>
    </section>
  );
}
