'use client';

import { motion } from 'framer-motion';
import {
  BookOpen,
  Users,
  Library,
  Globe,
  MessageSquare,
  Video,
  Award,
  GraduationCap,
  Megaphone,
  Heart,
  Home,
  Shirt,
  UtensilsCrossed,
  Stethoscope,
  Cloud,
  Phone,
  Presentation
} from 'lucide-react';

interface AchievementMetric {
  value: string;
  label: string;
  icon: any;
  color: string;
}

interface ActivityMetric {
  title: string;
  icon: any;
  color: string;
}

const achievementMetrics: AchievementMetric[] = [
  { value: '6,500+', label: 'Quran Distribution', icon: BookOpen, color: 'from-teal-500 to-cyan-600' },
  { value: '10,000+', label: 'Islamic Book & Pamphlets Distribution', icon: Library, color: 'from-green-500 to-emerald-600' },
  { value: '6,000+', label: 'People Benefited by Social Work', icon: Users, color: 'from-emerald-500 to-teal-600' },
  { value: '6,000+', label: 'Video on Dawah and Islam & Comparative Religion', icon: Video, color: 'from-amber-500 to-orange-600' },
  { value: '28 Crore+', label: 'Social Media Reach', icon: Globe, color: 'from-red-500 to-pink-600' },
  { value: '15,000+', label: 'Questions About Islam Replied', icon: MessageSquare, color: 'from-blue-500 to-indigo-600' },
  { value: '27,000+', label: 'Dawah Center & Library Visits', icon: Award, color: 'from-orange-500 to-amber-600' },
  { value: '700+', label: 'Public Talks on Dawah & Islam', icon: Presentation, color: 'from-green-500 to-lime-600' },
  { value: '400+', label: 'Live Discussion on Social Media', icon: Megaphone, color: 'from-lime-500 to-green-600' },
  { value: '55+', label: 'Courses on Dawah', icon: GraduationCap, color: 'from-rose-500 to-red-600' },
];

const activitiesMetrics: ActivityMetric[] = [
  { title: 'Weekly Programme (Online & Offline)', icon: Globe, color: 'from-purple-500 to-indigo-600' },
  { title: 'Dawah & Arabic Classes', icon: BookOpen, color: 'from-blue-500 to-cyan-600' },
  { title: 'Dawah Training Programme', icon: GraduationCap, color: 'from-indigo-500 to-purple-600' },
  { title: 'Free Food Distribution', icon: UtensilsCrossed, color: 'from-orange-500 to-red-600' },
  { title: 'Book Store & Free Quran Distribution', icon: Library, color: 'from-teal-500 to-green-600' },
  { title: 'Free Blanket Distribution', icon: Cloud, color: 'from-cyan-500 to-blue-600' },
  { title: 'Old Age Home & Orphanage Visit', icon: Home, color: 'from-pink-500 to-rose-600' },
  { title: 'Raincoat & Umbrella Distribution', icon: Cloud, color: 'from-sky-500 to-blue-600' },
  { title: 'Free Medical Camp', icon: Stethoscope, color: 'from-red-500 to-pink-600' },
  { title: 'Free Quran & Computer Classes', icon: BookOpen, color: 'from-emerald-500 to-teal-600' },
  { title: 'Dawah Centre', icon: Award, color: 'from-amber-500 to-orange-600' },
  { title: 'Social Media (@irpcindia)', icon: Globe, color: 'from-violet-500 to-purple-600' },
  { title: 'Pamphlet Distribution', icon: BookOpen, color: 'from-lime-500 to-green-600' },
  { title: 'Library & Study Centre', icon: Library, color: 'from-blue-500 to-indigo-600' },
  { title: 'IRPC Call QA\'s', icon: Phone, color: 'from-green-500 to-emerald-600' },
  { title: 'Public Talk', icon: Presentation, color: 'from-rose-500 to-pink-600' },
  { title: 'Debate & Live Discussions', icon: Megaphone, color: 'from-orange-500 to-amber-600' },
  { title: 'Free Clothes Distribution', icon: Shirt, color: 'from-teal-500 to-cyan-600' },
];

// Duplicate the arrays for seamless looping
const achievementMetricsLoop = [...achievementMetrics, ...achievementMetrics];
const activitiesMetricsLoop = [...activitiesMetrics, ...activitiesMetrics];

export default function ImpactSection() {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-3 md:mb-4">
            Our <span className="text-primary">Impact</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Alhamdulillah, together we have achieved remarkable milestones in spreading Islamic knowledge
          </p>
        </motion.div>
      </div>

      {/* Achievement Metrics Marquee - Left to Right */}
      <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-14">
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: '-50%' }}
              transition={{
                duration: 50,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-8 w-max"
            >
              {achievementMetricsLoop.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="group relative bg-white rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl hover:shadow-3xl transition-all duration-500 p-4 sm:p-6 md:p-8 lg:p-12 w-[280px] sm:w-[340px] md:w-[420px] lg:w-[520px] flex-shrink-0 border-2 border-gray-200 hover:border-primary/40 overflow-hidden"
                  >
                    {/* Background gradient effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/60 via-transparent to-transparent opacity-40"></div>

                    {/* Animated glow on hover */}
                    <div className={`absolute -inset-1 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 rounded-2xl md:rounded-3xl`}></div>

                    <div className="relative z-10 flex items-start gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                      <motion.div
                        className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-xl md:rounded-2xl bg-gradient-to-br ${metric.color} flex items-center justify-center shadow-lg md:shadow-2xl`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 text-white drop-shadow-lg" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent mb-1 sm:mb-2 md:mb-3 drop-shadow-sm">
                          {metric.value}
                        </h4>
                        <p className="text-gray-800 font-bold text-sm sm:text-base md:text-xl lg:text-2xl leading-tight">
                          {metric.label}
                        </p>
                      </div>
                    </div>

                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 opacity-10">
                      <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} rounded-bl-full`}></div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
          {/* Enhanced Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-24 md:w-32 lg:w-40 bg-gradient-to-r from-blue-50 via-blue-50/60 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-24 md:w-32 lg:w-40 bg-gradient-to-l from-blue-50 via-blue-50/60 to-transparent pointer-events-none z-10"></div>
        </div>
      </div>

      {/* Activities Metrics Marquee - Right to Left */}
      <div>
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              initial={{ x: '-50%' }}
              animate={{ x: 0 }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-8 w-max"
            >
              {activitiesMetricsLoop.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="group relative bg-white rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl hover:shadow-3xl transition-all duration-500 p-4 sm:p-6 md:p-8 lg:p-12 w-[290px] sm:w-[360px] md:w-[460px] lg:w-[560px] flex-shrink-0 border-2 border-gray-200 hover:border-secondary/40 overflow-hidden"
                  >
                    {/* Background gradient effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/60 via-transparent to-transparent opacity-40"></div>

                    {/* Animated glow on hover */}
                    <div className={`absolute -inset-1 bg-gradient-to-br ${activity.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 rounded-2xl md:rounded-3xl`}></div>

                    <div className="relative z-10 flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                      <motion.div
                        className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-xl md:rounded-2xl bg-gradient-to-br ${activity.color} flex items-center justify-center shadow-lg md:shadow-2xl`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 text-white drop-shadow-lg" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-black text-gray-900 leading-tight group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {activity.title}
                        </h4>
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute bottom-0 left-0 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 opacity-10">
                      <div className={`absolute inset-0 bg-gradient-to-tr ${activity.color} rounded-tr-full`}></div>
                    </div>

                    {/* Border highlight on hover */}
                    <div className={`absolute inset-0 rounded-2xl md:rounded-3xl border-2 border-transparent group-hover:border-gradient-to-br ${activity.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
          {/* Enhanced Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-24 md:w-32 lg:w-40 bg-gradient-to-r from-white via-white/60 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-24 md:w-32 lg:w-40 bg-gradient-to-l from-white via-white/60 to-transparent pointer-events-none z-10"></div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 mt-8 sm:mt-10 md:mt-14 lg:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.01 }}
          className="relative group"
        >
          {/* Outer glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl md:rounded-3xl blur-lg md:blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

          {/* Main container */}
          <div className="relative bg-gradient-to-br from-white via-blue-50/50 to-white rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-12 border-2 border-primary/30 shadow-xl md:shadow-2xl overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>

            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-t-2 sm:border-t-4 border-l-2 sm:border-l-4 border-primary/40 rounded-tl-2xl md:rounded-tl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-b-2 sm:border-b-4 border-r-2 sm:border-r-4 border-secondary/40 rounded-br-2xl md:rounded-br-3xl"></div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                {/* Icon with animation */}
                <motion.div
                  className="flex-shrink-0"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="relative">
                    {/* Pulsing ring */}
                    <motion.div
                      className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary to-secondary opacity-40"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.4, 0.2, 0.4],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-xl md:shadow-2xl">
                      <Heart className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white fill-white" />
                    </div>
                  </div>
                </motion.div>

                <div className="flex-1">
                  {/* Title with gradient */}
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent mb-4 sm:mb-5 md:mb-6"
                  >
                    Our Mission
                  </motion.h3>

                  {/* Content with staggered animation */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="space-y-3 sm:space-y-4 md:space-y-5"
                  >
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed font-medium"
                    >
                      The Islamic Research & Propagation Center (IRPC) is dedicated to spreading authentic Islamic knowledge through various initiatives including <span className="text-primary font-bold">Qur&apos;an distribution</span>, <span className="text-primary font-bold">Islamic education programs</span>, community outreach, and social welfare activities.
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed font-medium"
                    >
                      We operate a comprehensive Islamic library, conduct regular Dawah programs, organize educational seminars, and provide support to those in need. Our work extends both <span className="text-secondary font-bold">online and offline</span>, reaching <span className="text-secondary font-bold">millions through social media</span> while maintaining strong community connections.
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="relative mt-4 sm:mt-5 md:mt-6"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl md:rounded-2xl blur"></div>
                      <div className="relative bg-gradient-to-r from-primary/5 to-secondary/5 border-l-2 sm:border-l-4 border-primary rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6">
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-900 leading-relaxed font-bold">
                          Every donation helps us continue this vital work of spreading Islam&apos;s message of peace, knowledge, and compassion. <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Join us in making a lasting impact this Ramadan.</span>
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Stats row */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mt-5 sm:mt-6 md:mt-8"
                  >
                    <div className="text-center p-2 sm:p-3 md:p-4 bg-white/80 rounded-lg md:rounded-xl border border-primary/20 hover:border-primary/40 transition-all hover:scale-105 cursor-pointer">
                      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary">13+</p>
                      <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 font-semibold">Years Active</p>
                    </div>
                    <div className="text-center p-2 sm:p-3 md:p-4 bg-white/80 rounded-lg md:rounded-xl border border-secondary/20 hover:border-secondary/40 transition-all hover:scale-105 cursor-pointer">
                      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-secondary">28Cr+</p>
                      <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 font-semibold">People Reached</p>
                    </div>
                    <div className="text-center p-2 sm:p-3 md:p-4 bg-white/80 rounded-lg md:rounded-xl border border-primary/20 hover:border-primary/40 transition-all hover:scale-105 cursor-pointer">
                      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary">6.5K+</p>
                      <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 font-semibold">Qurans Shared</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
