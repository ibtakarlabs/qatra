'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const games = [
  {
    icon: '🎯',
    title: 'Carrom',
    description: 'Traditional wooden striker board game - a South Asian favorite',
    featured: true,
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
    <section id="games" ref={ref} className="py-24 bg-maroon-dark">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">
            Games & Activities
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Gather around on our Afghan carpets and play
          </p>
        </motion.div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <motion.div
              key={game.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`
                relative p-8 rounded-xl text-center overflow-hidden
                border-2 transition-all text-white shadow-md hover:shadow-lg
                ${game.featured
                  ? 'border-white'
                  : 'border-maroon-light hover:border-white'
                }
              `}
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
              {/* Top Accent Bar */}
              {game.featured && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-white" />
              )}

              {/* Icon */}
              <div className="text-7xl mb-6">
                {game.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-display font-bold text-white mb-3">
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
                className="bg-white text-maroon-primary px-6 py-2 rounded-lg font-semibold hover:bg-maroon-light hover:text-white transition-colors"
              >
                {game.featured ? 'Reserve Spot' : 'Book Now'}
              </motion.button>

              {/* Featured Badge */}
              {game.featured && (
                <div className="absolute top-4 right-4 bg-white text-maroon-primary px-3 py-1 rounded-full text-xs font-bold">
                  FEATURED
                </div>
              )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
