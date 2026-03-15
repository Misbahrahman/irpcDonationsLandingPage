'use client';

import { motion } from 'framer-motion';
import DonationCard from './DonationCard';
import BackgroundCarousel from './BackgroundCarousel';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background Carousel */}
      <BackgroundCarousel autoPlayInterval={6000} showControls={true} />

      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-24 w-full">
        {/* Logo - Glassmorphic Container */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6 sm:mb-8 md:mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.2 }}
            className="relative group"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl md:rounded-3xl blur-md md:blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>

            {/* Glassmorphic container */}
            <div className="relative bg-white/80 backdrop-blur-xl px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl border border-white/60 hover:border-white/80 transition-all duration-300">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/20 rounded-2xl md:rounded-3xl"></div>

              <Image
                src="/logo.png"
                alt="IRPC Logo"
                width={180}
                height={72}
                className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto relative z-10"
                priority
              />
            </div>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 md:space-y-8"
          >
            {/* Main Headline - Glassmorphic */}
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.4 }}
              className="relative group"
            >
              {/* Outer glow - Enhanced */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/40 via-white/30 to-secondary/40 rounded-[2rem] blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>

              {/* Glassmorphic container - More transparent on mobile */}
              <div className="relative bg-gradient-to-br from-black/15 via-black/10 to-black/15 md:from-black/30 md:via-black/20 md:to-black/25 backdrop-blur-2xl md:backdrop-blur-3xl rounded-[1.5rem] md:rounded-[2rem] p-6 sm:p-8 md:p-14 lg:p-16 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] md:shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] border border-white/30 md:border-2 md:border-white/40 hover:border-white/60 transition-all duration-500">
                {/* Multiple shine layers for depth */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 md:from-white/20 md:to-white/10 rounded-[1.5rem] md:rounded-[2rem] opacity-40 md:opacity-60"></div>
                <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 via-transparent to-secondary/5 md:from-primary/10 md:to-secondary/10 rounded-[1.5rem] md:rounded-[2rem]"></div>

                {/* Animated shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 md:via-white/10 to-transparent rounded-[1.5rem] md:rounded-[2rem]"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 2
                  }}
                />

                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 md:w-24 md:h-24 border-t-2 border-l-2 md:border-t-4 md:border-l-4 border-white/30 md:border-white/50 rounded-tl-[1.5rem] md:rounded-tl-[2rem]"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 md:w-24 md:h-24 border-b-2 border-r-2 md:border-b-4 md:border-r-4 border-white/30 md:border-white/50 rounded-br-[1.5rem] md:rounded-br-[2rem]"></div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight mb-4 sm:mb-6 md:mb-8 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
                >
                  Support Dawah &{' '}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                      Change Lives
                    </span>
                    {/* Underline accent */}
                    <motion.div
                      className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    />
                  </span>{' '}
                  This Ramadan
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative text-sm sm:text-base md:text-2xl lg:text-3xl text-white font-medium leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
                >
                  For over <span className="font-black text-primary drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]">13 years</span>,
                  the Islamic Research & Propagation Center has been spreading the
                  message of Islam, distributing Qur&apos;an, educating communities, and
                  supporting those in need.
                </motion.p>

                {/* Floating particles effect */}
                <div className="absolute inset-0 overflow-hidden rounded-[2rem] pointer-events-none">
                  <motion.div
                    className="absolute top-10 left-10 w-2 h-2 bg-white/40 rounded-full"
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    className="absolute top-20 right-16 w-3 h-3 bg-primary/30 rounded-full"
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                  <motion.div
                    className="absolute bottom-20 left-20 w-2 h-2 bg-secondary/30 rounded-full"
                    animate={{
                      y: [0, -25, 0],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Special Ramadan Message - Glassmorphic Blue */}
          </motion.div>

          {/* Right Column - Donation Card (Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:block sticky top-8"
          >
            <DonationCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
