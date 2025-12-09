'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Coffee, Armchair, Target, Users } from 'lucide-react';

const features = [
  {
    icon: Coffee,
    title: 'Traditional Chai & Coffee',
    description: 'Authentic Afghan green tea with cardamom, specialty lattes, and fresh pastries',
  },
  {
    icon: Armchair,
    title: 'Floor Seating Experience',
    description: 'Cushioned low tables on handwoven carpets - the Afghan way to gather',
  },
  {
    icon: Target,
    title: 'Classic Games',
    description: 'Carrom, chess, backgammon, and more - games that bring people together',
  },
  {
    icon: Users,
    title: 'Community Gathering Space',
    description: 'A welcoming haven for friends, families, dates, or solo relaxation',
  },
];

export function Vibe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-maroon-primary to-maroon-dark overflow-hidden"
    >
      {/* Carpet Pattern Overlay */}
      <div className="absolute inset-0 carpet-pattern opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="text-cream"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-cream mb-4 sm:mb-6 px-2">
              A Taste of Afghan Hospitality
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 sm:mb-10 md:mb-12 leading-relaxed px-2">
              Step into Qatra and leave the Bay Area bustle behind. Sink into plush floor cushions, surrounded by rich handwoven Afghan carpets, aromatic chai, and the gentle click of game pieces. This is where tradition meets community.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="flex gap-4 p-4 bg-cream/10 backdrop-blur-sm rounded-lg border-l-2 border-cream hover:bg-cream/15 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <feature.icon className="w-10 h-10 text-cream" />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold text-cream mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-200 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative h-[600px] bg-cream/5 backdrop-blur-sm rounded-2xl border-2 border-dashed border-cream/30 flex items-center justify-center overflow-hidden"
            >
              <div className="text-center p-8">
                <Coffee className="w-24 h-24 text-cream mx-auto mb-4" />
                <p className="text-cream text-xl font-display">
                  Your vibe photos here
                </p>
                <p className="text-gray-200 text-sm mt-2">
                  Add photos of your beautiful space and guests
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
