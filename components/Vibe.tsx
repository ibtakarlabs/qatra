'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: '🫖',
    title: 'Traditional Chai & Coffee',
    description: 'Authentic Afghan green tea with cardamom, specialty lattes, and fresh pastries',
  },
  {
    icon: '🪔',
    title: 'Floor Seating Experience',
    description: 'Cushioned low tables on handwoven carpets - the Afghan way to gather',
  },
  {
    icon: '🎯',
    title: 'Classic Games',
    description: 'Carrom, chess, backgammon, and more - games that bring people together',
  },
  {
    icon: '🤝',
    title: 'Community Gathering Space',
    description: 'A welcoming haven for friends, families, dates, or solo relaxation',
  },
];

export function Vibe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={ref}
      className="relative py-24 bg-gradient-to-br from-maroon-primary to-maroon-dark overflow-hidden"
    >
      {/* Carpet Pattern Overlay */}
      <div className="absolute inset-0 carpet-pattern opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              A Taste of Afghan Hospitality
            </h2>

            <p className="text-xl text-gray-200 mb-12 leading-relaxed">
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
                  className="flex gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg border-l-2 border-white hover:bg-white/15 transition-colors"
                >
                  <div className="text-4xl flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold text-white mb-2">
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

          {/* Carpet Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="/long_carpet.webp" 
                alt="Traditional Afghan carpet at Qatra"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-display font-bold mb-2">Authentic Afghan Carpets</h3>
                <p className="text-gray-200">Handwoven traditions beneath your feet</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
