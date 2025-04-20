import React from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Basic',
    price: 'Tk. 10,000',
    description: 'Great for personal websites or small portfolios.',
    features: [
      '1 Static or Dynamic Website',
      'Responsive Design',
      'Basic SEO Setup',
      'Contact Form Integration',
      'Up to 3 Revisions'
    ]
  },
  {
    name: 'Standard',
    price: 'Tk. 25,000',
    description: 'Perfect for small businesses or startups looking for a web app.',
    features: [
      'Full MERN Stack Web App',
      'Authentication System',
      'CRUD Functionality',
      'Responsive UI + Admin Dashboard',
      'Up to 5 Revisions'
    ]
  },
  {
    name: 'Premium',
    price: 'Tk. 35,000 - Tk. 50,000',
    description: 'For custom, large-scale solutions with advanced features.',
    features: [
      'Full MERN Stack Solution',
      'Admin Panel + User Roles',
      'Payment Gateway Integration',
      'Advanced API Development & Optimization',
      'Unlimited Revisions + Priority Support'
    ]
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

const Pricing = () => {
  return (
    <div className="bg-black text-white py-16 px-4 flex justify-center">
      <div className="w-full max-w-6xl grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            className="border border-text1 rounded-lg p-6 hover:scale-105 transition-transform duration-300 bg-gradient-to-b from-[#111] to-[#1e1e1e]"
          >
            <h2 className="text-2xl font-bold text-text1 mb-2">{plan.name}</h2>
            <p className="text-3xl font-bold mb-2">{plan.price}</p>
            <p className="text-sm text-gray-400 mb-4">{plan.description}</p>
            <ul className="mb-6 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-text1">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
