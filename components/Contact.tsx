'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Mail, Smartphone, Instagram, Facebook, Video, Map } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: '123 Main Street\nSan Francisco, CA 94102',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '(555) QATRA-01\n(555) 728-7201',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'qatracafe@gmail.com',
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-24 bg-maroon-primary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-12">
              Visit Us
            </h2>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-6 p-6 bg-maroon-dark rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-2 border-white text-white"
                >
                  <div className="flex-shrink-0">
                    <item.icon className="w-12 h-12 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-200 whitespace-pre-line leading-relaxed">
                      {item.details}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex gap-6 p-6 bg-maroon-dark rounded-xl shadow-md border-l-2 border-white text-white"
              >
                <div className="flex-shrink-0">
                  <Smartphone className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold text-white mb-4">
                    Social Media
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { name: 'Instagram', icon: Instagram },
                      { name: 'Facebook', icon: Facebook },
                      { name: 'TikTok', icon: Video }
                    ].map((social) => (
                      <motion.a
                        key={social.name}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        href="#"
                        className="flex items-center gap-2 px-4 py-2 bg-white text-maroon-primary rounded-lg font-semibold hover:bg-maroon-light hover:text-white transition-colors"
                      >
                        <social.icon className="w-4 h-4" />
                        {social.name}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[600px] bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden"
          >
            <div className="text-center p-8">
              <Map className="w-24 h-24 text-maroon-primary mx-auto mb-4" />
              <p className="text-maroon-primary text-2xl font-display font-bold mb-2">
                Google Maps Integration
              </p>
              <p className="text-gray-600">
                Add your actual Google Maps embed code here
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
