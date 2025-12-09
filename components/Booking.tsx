'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export function Booking() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    partySize: '',
    activity: '',
    requests: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Booking request received! We will contact you shortly to confirm your reservation.');
    setFormData({
      name: '',
      phone: '',
      date: '',
      time: '',
      partySize: '',
      activity: '',
      requests: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="booking" ref={ref} className="py-24 bg-maroon-dark">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-cream mb-4">
            Book Your Spot
          </h2>
          <p className="text-xl text-gray-200">
            Reserve a table or game in advance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 bg-cream p-8 rounded-2xl shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-maroon-primary font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-maroon-primary focus:ring-2 focus:ring-maroon-primary/20 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-maroon-primary font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-maroon-primary focus:ring-2 focus:ring-maroon-primary/20 outline-none transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-maroon-primary font-semibold mb-2">
                    Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-maroon-primary focus:ring-2 focus:ring-maroon-primary/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-maroon-primary font-semibold mb-2">
                    Time *
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-maroon-primary focus:ring-2 focus:ring-maroon-primary/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-maroon-primary font-semibold mb-2">
                    Party Size *
                  </label>
                  <select
                    name="partySize"
                    value={formData.partySize}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-maroon-primary focus:ring-2 focus:ring-maroon-primary/20 outline-none transition-all"
                  >
                    <option value="">Select...</option>
                    <option value="1">1 person</option>
                    <option value="2">2 people</option>
                    <option value="3">3 people</option>
                    <option value="4">4 people</option>
                    <option value="5+">5+ people</option>
                  </select>
                </div>
                <div>
                  <label className="block text-maroon-primary font-semibold mb-2">
                    Activity *
                  </label>
                  <select
                    name="activity"
                    value={formData.activity}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-maroon-primary focus:ring-2 focus:ring-maroon-primary/20 outline-none transition-all"
                  >
                    <option value="">Select...</option>
                    <option value="pool">Pool/Billiards</option>
                    <option value="pingpong">Ping Pong</option>
                    <option value="carrom">Carrom</option>
                    <option value="cards">Card Games</option>
                    <option value="boardgames">Board Games</option>
                    <option value="general">General Seating</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-maroon-primary font-semibold mb-2">
                  Special Requests (Optional)
                </label>
                <textarea
                  name="requests"
                  value={formData.requests}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-maroon-primary focus:ring-2 focus:ring-maroon-primary/20 outline-none transition-all resize-none"
                  placeholder="Let us know if you have any special requirements..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-maroon-primary text-cream py-4 rounded-lg font-bold text-lg hover:bg-maroon-dark transition-colors shadow-lg"
              >
                Reserve Now
              </motion.button>
            </form>
          </motion.div>

          {/* Booking Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-maroon-primary to-maroon-dark p-8 rounded-xl text-cream"
          >
            <h3 className="text-3xl font-display font-bold text-cream mb-6">
              Walk-ins Welcome!
            </h3>
            <p className="text-gray-200 mb-8 leading-relaxed">
              While we recommend booking in advance for game tables, we always save space for walk-in guests.
            </p>

            <div className="mb-8">
              <h4 className="text-xl font-display font-bold text-cream mb-4">
                Hours
              </h4>
              <ul className="space-y-2 text-gray-200">
                <li><strong>Mon-Thu:</strong> 8:00 AM - 11:00 PM</li>
                <li><strong>Fri-Sat:</strong> 8:00 AM - 1:00 AM</li>
                <li><strong>Sunday:</strong> 9:00 AM - 10:00 PM</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-display font-bold text-cream mb-4">
                Game Table Rates
              </h4>
              <ul className="space-y-2 text-gray-200">
                <li><strong>Pool:</strong> $15/hour</li>
                <li><strong>Ping Pong:</strong> $12/hour</li>
                <li><strong>Board Games:</strong> Free with purchase</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
