'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

const menuData = {
  coffee: [
    { name: 'Traditional Afghan Chai', price: '$4.50', description: 'Aromatic green tea with cardamom' },
    { name: 'Espresso', price: '$3.50', description: 'Rich, bold shot of energy' },
    { name: 'Cappuccino', price: '$5.00', description: 'Perfectly balanced espresso and foam' },
    { name: 'Qatra Special Latte', price: '$6.50', description: 'House blend with cardamom and rose water' },
    { name: 'Iced Coffee', price: '$5.00', description: 'Cold brew perfection' },
    { name: 'Fruit Smoothies', price: '$6.00', description: 'Fresh and energizing' },
  ],
  food: [
    { name: 'Bolani', price: '$7.00', description: 'Afghan flatbread stuffed with potatoes or spinach' },
    { name: 'Sambosa', price: '$6.00', description: 'Crispy pastries with savory filling' },
    { name: 'Cookies & Pastries', price: '$3.50', description: 'Fresh-baked daily' },
    { name: 'Hummus & Pita', price: '$8.00', description: 'Perfect for sharing while gaming' },
    { name: 'Mixed Nuts', price: '$5.00', description: 'Roasted and lightly salted' },
    { name: 'Baklava', price: '$4.00', description: 'Sweet, flaky, and delicious' },
  ],
  combos: [
    { name: 'Pool Player\'s Pack', price: '$20', description: '1 hour pool table + 2 drinks + snack platter', featured: true },
    { name: 'Ping Pong Power Hour', price: '$18', description: '1 hour ping pong + 2 smoothies + cookies', featured: true },
    { name: 'Game Night Special', price: '$35', description: 'Reserved table (4 people) + board games + snack tower + 4 drinks', featured: true },
    { name: 'Study Session Bundle', price: '$15', description: '3 hours wifi + unlimited chai refills + pastry', featured: true },
  ],
};

const tabs = [
  { id: 'coffee', label: 'Coffee & Chai' },
  { id: 'food', label: 'Snacks & Food' },
  { id: 'combos', label: 'Gaming Combos' },
];

export function Menu() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState('coffee');

  return (
    <section id="menu" ref={ref} className="py-24 bg-maroon-primary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">
            Menu
          </h2>
          <p className="text-xl text-gray-200">
            Fuel your game with great food & drinks
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-8 py-3 rounded-lg font-semibold text-lg border-2 transition-all
                ${activeTab === tab.id
                  ? 'bg-white text-maroon-primary border-white shadow-lg'
                  : 'bg-maroon-dark text-white border-white hover:bg-maroon-dark/80'
                }
              `}
            >
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {menuData[activeTab as keyof typeof menuData].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`
                  bg-maroon-dark p-6 rounded-xl border-l-4 shadow-md hover:shadow-xl transition-shadow text-white
                  ${item.featured ? 'border-white' : 'border-maroon-light'}
                `}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-display font-bold text-white flex-1">
                    {item.name}
                  </h4>
                  <span className="text-2xl font-bold text-white ml-4">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-200 leading-relaxed">{item.description}</p>
                {item.featured && (
                  <div className="mt-3 inline-block bg-white text-maroon-primary px-3 py-1 rounded-full text-xs font-bold">
                    SPECIAL COMBO
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
