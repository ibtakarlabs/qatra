'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for subscribing! We'll send updates to ${email}`);
    setEmail('');
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-maroon-dark text-gray-200">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-2xl font-display font-bold text-white mb-4">
              Qatra Cafe
            </h4>
            <p className="leading-relaxed text-gray-200">
              Where Afghan heritage meets modern gaming culture.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-display font-bold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['#games', '#menu', '#events', '#booking'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link)}
                    className="hover:text-white transition-colors"
                  >
                    {link.replace('#', '').charAt(0).toUpperCase() + link.slice(2)}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-display font-bold text-white mb-4">
              Connect
            </h4>
            <ul className="space-y-2">
              {['Instagram', 'Facebook', 'TikTok', 'Newsletter'].map((social) => (
                <li key={social}>
                  <a href="#" className="hover:text-white transition-colors">
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xl font-display font-bold text-white mb-4">
              Newsletter
            </h4>
            <p className="mb-4 text-gray-200">Get updates on events and special offers</p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-maroon-primary border border-white/30 focus:border-white outline-none transition-colors text-white placeholder:text-gray-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-white text-maroon-primary px-6 py-2 rounded-lg font-semibold hover:bg-maroon-light hover:text-white transition-colors"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/20 pt-8 text-center"
        >
          <p className="text-gray-200">&copy; 2024 Qatra Cafe. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
