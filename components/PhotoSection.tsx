'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const photos = [
  {
    src: '/images/dawah-talk.jpg',
    alt: 'Islamic scholars conducting Dawah talk',
    title: 'Dawah Programs',
  },
  {
    src: '/images/quran-distribution.jpg',
    alt: 'Volunteers distributing Quran to community',
    title: 'Qur\u0027an Distribution',
  },
  {
    src: '/images/ramadan-kit.jpg',
    alt: 'Ramadan food kit distribution to families',
    title: 'Ramadan Support',
  },
  {
    src: '/images/library.jpg',
    alt: 'Islamic library with students studying',
    title: 'Islamic Library',
  },
  {
    src: '/images/community-help.jpg',
    alt: 'Volunteers helping community members',
    title: 'Community Support',
  },
  {
    src: '/images/education.jpg',
    alt: 'Islamic education class in progress',
    title: 'Educational Programs',
  },
];

export default function PhotoSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
            Moments From Our <span className="text-primary">Journey</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Witness the impact of your support through our community work, Dawah activities, and humanitarian efforts
          </p>
        </motion.div>

        {/* Photo Grid - Responsive Masonry Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] bg-gray-200">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-xl md:text-2xl">
                    {photo.title}
                  </h3>
                </div>
              </div>

              {/* Placeholder indicator - Remove when actual images are added */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-600">
                Photo Placeholder
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note about images */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-blue-50 border border-blue-200 rounded-xl px-6 py-4">
            <p className="text-sm md:text-base text-gray-700">
              <span className="font-semibold text-primary">Note:</span> Replace placeholder images with actual photos from{' '}
              <code className="bg-white px-2 py-1 rounded text-xs">/public/images/</code> directory
            </p>
            <p className="text-xs md:text-sm text-gray-600 mt-2">
              Recommended: 6-8 optimized images showing Dawah activities, Qur&apos;an distribution, Ramadan programs, and community support
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
