'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const events = [
  {
    day: 'FRI',
    date: '15',
    title: 'Pool Tournament',
    time: '7:00 PM - 10:00 PM',
    description: 'Weekly 8-ball competition. $10 entry, winner takes all!',
  },
  {
    day: 'SAT',
    date: '16',
    title: 'Ping Pong Championship',
    time: '2:00 PM - 6:00 PM',
    description: 'Monthly showdown. Prizes for top 3 players.',
  },
  {
    day: 'SUN',
    date: '17',
    title: 'Board Game Marathon',
    time: '12:00 PM - 8:00 PM',
    description: 'All-day gaming with rotating games and prizes.',
  },
];

export function Events() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="events" ref={ref} className="py-24 bg-maroon-dark">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">
            Events & Tournaments
          </h2>
          <p className="text-xl text-gray-200">
            Join the Qatra community
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-maroon-primary rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden text-white border-2 border-white"
            >
              <div className="flex gap-6 p-6">
                {/* Date Badge */}
                <div className="flex-shrink-0 bg-white text-maroon-primary rounded-lg p-4 text-center min-w-[80px]">
                  <div className="text-sm font-semibold tracking-wide">{event.day}</div>
                  <div className="text-4xl font-display font-bold">{event.date}</div>
                </div>

                {/* Event Details */}
                <div className="flex-1">
                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-200 font-semibold mb-3">{event.time}</p>
                  <p className="text-gray-200 mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  <button className="bg-white text-maroon-primary px-6 py-2 rounded-lg font-semibold hover:bg-maroon-light hover:text-white transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Calendar CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center bg-gradient-to-br from-maroon-primary to-maroon-dark p-12 rounded-xl"
        >
          <p className="text-2xl text-white mb-6 font-display">
            Want to stay updated on all our events?
          </p>
          <button className="bg-white text-maroon-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-maroon-light hover:text-white transition-colors shadow-lg">
            View Full Calendar
          </button>
        </motion.div>
      </div>
    </section>
  );
}
