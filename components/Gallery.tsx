'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const categories = ['all', 'games', 'coffee', 'food', 'vibes'];

const galleryItems = [
  { category: 'games', title: 'Pool Game' },
  { category: 'coffee', title: 'Coffee Art' },
  { category: 'vibes', title: 'Interior' },
  { category: 'games', title: 'Ping Pong' },
  { category: 'food', title: 'Bolani' },
  { category: 'vibes', title: 'Afghan Carpets' },
  { category: 'games', title: 'Cards' },
  { category: 'coffee', title: 'Chai' },
];

export function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" ref={ref} className="py-24 bg-maroon-primary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">
            The Qatra Experience
          </h2>
          <p className="text-xl text-gray-200">
            Follow us @qatracafe
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category)}
              className={`
                px-6 py-2 rounded-lg font-medium capitalize transition-all
                ${activeFilter === category
                  ? 'bg-white text-maroon-primary shadow-lg'
                  : 'bg-maroon-dark text-white border-2 border-white hover:bg-maroon-dark/80'
                }
              `}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={`${item.category}-${item.title}-${index}`}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer group"
            >
              {/* Placeholder with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-maroon-primary to-maroon-dark">
                <div className="absolute inset-0 flex items-center justify-center text-white font-display text-xl">
                  {item.title}
                </div>
              </div>

              {/* Hover Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-black/40 flex items-center justify-center"
              >
                <span className="text-white text-lg font-semibold">View Photo</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
