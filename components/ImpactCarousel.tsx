'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import {
  BookOpen,
  Users,
  Heart,
  Video,
  Globe,
  MessageCircle,
  Building2,
  Mic,
  Radio,
  GraduationCap
} from 'lucide-react';

interface ImpactMetric {
  number: string;
  label: string;
  icon: any;
  gradient: string;
}

const impactMetrics: ImpactMetric[] = [
  {
    number: '6,500+',
    label: 'Qurans Distributed',
    icon: BookOpen,
    gradient: 'from-teal-500 to-cyan-600',
  },
  {
    number: '70,000+',
    label: 'Islamic Books & Pamphlets',
    icon: BookOpen,
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    number: '6,000+',
    label: 'People Benefited by Social Work',
    icon: Heart,
    gradient: 'from-rose-500 to-pink-600',
  },
  {
    number: '6,000+',
    label: 'Videos on Dawah & Islam',
    icon: Video,
    gradient: 'from-purple-500 to-indigo-600',
  },
  {
    number: '28 Crore+',
    label: 'Social Media Reach',
    icon: Globe,
    gradient: 'from-blue-500 to-sky-600',
  },
  {
    number: '15,000+',
    label: 'Questions About Islam Replied',
    icon: MessageCircle,
    gradient: 'from-orange-500 to-amber-600',
  },
  {
    number: '27,000+',
    label: 'Dawah Center & Library Visits',
    icon: Building2,
    gradient: 'from-yellow-500 to-orange-600',
  },
  {
    number: '700+',
    label: 'Public Talks on Dawah',
    icon: Mic,
    gradient: 'from-red-500 to-rose-600',
  },
  {
    number: '400+',
    label: 'Live Discussions on Social Media',
    icon: Radio,
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    number: '55+',
    label: 'Courses on Dawah',
    icon: GraduationCap,
    gradient: 'from-indigo-500 to-blue-600',
  },
];

export default function ImpactCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling || !scrollRef.current) return;

    const scrollContainer = scrollRef.current;
    let scrollInterval: NodeJS.Timeout;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer) {
          const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

          if (scrollContainer.scrollLeft >= maxScroll - 10) {
            // Reset to start
            scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            // Scroll by one card width
            scrollContainer.scrollBy({ left: 320, behavior: 'smooth' });
          }
        }
      }, 3000);
    };

    startAutoScroll();

    return () => {
      if (scrollInterval) clearInterval(scrollInterval);
    };
  }, [isAutoScrolling]);

  // Pause auto-scroll on user interaction
  const handleUserInteraction = () => {
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 10000); // Resume after 10s
  };

  return (
    <div className="w-full py-12 md:py-16">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 md:mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 drop-shadow-lg">
          Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Real Impact</span>
        </h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md">
          See how your support transforms lives and spreads knowledge
        </p>
      </motion.div>

      {/* Carousel */}
      <div className="relative">
        {/* Gradient Fades on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-black/40 via-black/20 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-black/40 via-black/20 to-transparent z-10 pointer-events-none"></div>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          onMouseEnter={handleUserInteraction}
          onTouchStart={handleUserInteraction}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-4 md:px-8 hide-scrollbar"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {impactMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex-shrink-0 w-72 md:w-80 group cursor-pointer"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${metric.gradient} rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>

                {/* Card */}
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/30 hover:border-white/50 transition-all duration-300 shadow-2xl hover:shadow-3xl h-full">
                  {/* Shine Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-3xl opacity-50"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${metric.gradient} rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>

                    {/* Number */}
                    <h3 className={`text-4xl md:text-5xl font-bold bg-gradient-to-br ${metric.gradient} bg-clip-text text-transparent mb-3`}>
                      {metric.number}
                    </h3>

                    {/* Label */}
                    <p className="text-base md:text-lg text-white/90 font-medium leading-tight">
                      {metric.label}
                    </p>
                  </div>

                  {/* Decorative Element */}
                  <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${metric.gradient} opacity-10 rounded-tl-full`}></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center mt-6 gap-2">
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
          <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
          <span className="text-sm text-white/80">Swipe to explore</span>
        </div>
      </div>

      {/* Hide scrollbar styles */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
