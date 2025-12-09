'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const games = [
  {
    icon: '🎯',
    title: 'Carrom',
    description: 'Traditional wooden striker board game - a South Asian favorite',
  },
  {
    icon: '🎱',
    title: 'Pool/Billiards',
    description: 'Professional-grade tables for serious players and casual fun',
  },
  {
    icon: '🏓',
    title: 'Ping Pong',
    description: 'Fast-paced action with premium paddles and balls',
  },
  {
    icon: '🃏',
    title: 'Card Games',
    description: 'Classic decks on low tables surrounded by cushions',
  },
  {
    icon: '♟️',
    title: 'Chess & Backgammon',
    description: 'Traditional strategy games in a cozy setting',
  },
  {
    icon: '🎲',
    title: 'Board Games',
    description: 'Extensive collection from classics to modern favorites',
  },
];

export function Games() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const scrollToBooking = () => {
    const element = document.querySelector('#booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="games" ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-maroon-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-cream mb-3 sm:mb-4 px-4">
            Games & Activities
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto px-4">
            Gather around on our Afghan carpets and play
          </p>
        </motion.div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {games.map((game, index) => (
            <motion.div
              key={game.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-8 rounded-xl text-center overflow-hidden border-2 border-maroon-light hover:border-cream transition-all text-cream shadow-md hover:shadow-lg"
              style={{
                backgroundImage: 'url(/theme.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Dark overlay for readability */}
              <div className="absolute inset-0 bg-maroon-primary/80" />

              {/* Content wrapper */}
              <div className="relative z-10">
              {/* Icon */}
              <div className="text-7xl mb-6">
                {game.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-display font-bold text-cream mb-3">
                {game.title}
              </h3>

              {/* Description */}
              <p className="text-gray-200 mb-6 leading-relaxed">
                {game.description}
              </p>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToBooking}
                className="bg-cream text-maroon-primary px-6 py-2 rounded-lg font-semibold hover:bg-maroon-light hover:text-cream transition-colors"
              >
                Book Now
              </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
