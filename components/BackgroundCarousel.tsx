'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

interface CarouselImage {
  src: string;
  alt: string;
}

// Banner photos configuration - Add your actual banner photos here
const bannerPhotos: CarouselImage[] = [
  {
    src: '/images/banner/banner1.jpg',
    alt: 'IRPC Dawah Programs and Community Outreach',
  },
  {
    src: '/images/banner/banner2.jpg',
    alt: 'Quran Distribution and Islamic Education',
  },
  {
    src: '/images/banner/banner3.jpg',
    alt: 'Ramadan Support and Community Service',
  },
  {
    src: '/images/banner/banner4.jpg',
    alt: 'Islamic Library and Knowledge Center',
  },
  {
    src: '/images/banner/banner5.jpg',
    alt: 'Community Engagement and Welfare Programs',
  },
];

interface BackgroundCarouselProps {
  autoPlayInterval?: number;
  showControls?: boolean;
}

export default function BackgroundCarousel({
  autoPlayInterval = 5000,
  showControls = true,
}: BackgroundCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % bannerPhotos.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, autoPlayInterval]);

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % bannerPhotos.length);
  }, []);

  const goToPrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + bannerPhotos.length) % bannerPhotos.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlaying((prev) => !prev);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === ' ') {
        e.preventDefault();
        toggleAutoPlay();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevious, goToNext, toggleAutoPlay]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background Carousel */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
          className="absolute inset-0"
        >
          <Image
            src={bannerPhotos[currentIndex].src}
            alt={bannerPhotos[currentIndex].alt}
            fill
            priority={currentIndex === 0}
            quality={90}
            sizes="100vw"
            className="object-cover object-center md:object-cover"
            style={{ objectPosition: 'center' }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Subtle vignette for text readability (optional - can be removed) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />

      {showControls && (
        <>
          {/* Navigation Controls */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-10 flex justify-between px-4 md:px-8 pointer-events-none">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToPrevious}
              className="pointer-events-auto bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all duration-200 shadow-lg"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToNext}
              className="pointer-events-auto bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all duration-200 shadow-lg"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </motion.button>
          </div>

          {/* Dot Indicators */}
          <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 md:gap-3">
            {bannerPhotos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'bg-white w-5 md:w-10 h-1.5 md:h-2.5'
                    : 'bg-white/50 hover:bg-white/70 w-1.5 md:w-2.5 h-1.5 md:h-2.5'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Play/Pause Control */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleAutoPlay}
            className="absolute bottom-6 md:bottom-8 right-4 md:right-8 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 md:p-2.5 rounded-full transition-all duration-200 shadow-lg"
            aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isAutoPlaying ? (
              <Pause className="w-4 h-4 md:w-5 md:h-5" />
            ) : (
              <Play className="w-4 h-4 md:w-5 md:h-5 ml-0.5" />
            )}
          </motion.button>
        </>
      )}

      {/* Accessibility: Current slide indicator */}
      <div className="sr-only" role="status" aria-live="polite">
        Slide {currentIndex + 1} of {bannerPhotos.length}
      </div>
    </div>
  );
}
