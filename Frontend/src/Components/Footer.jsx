import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import SocialMedia from './SocialMedia';
import { Link } from 'react-router-dom';

const Footer = () => {
  const links = [
    { name: 'About Me', to: '/about' },
    { name: 'Service', to: '/services' },
    { name: 'Contact Me', to: '/contact' },
  ];
  
  const contacts = [
    { icon: <FiMail />, value: 'muntasirniloy2002@gmail.com' },
    { icon: <FiPhone />, value: '+88 01305722022' },
    { icon: <FiMapPin />, value: 'Dhaka , Bangladesh' },
  ];

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <footer className="bg-[#141414] pt-12 px-4 py-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left">
        
        {/* Branding */}
        <motion.div
          className="space-y-4 sm:col-span-2 md:col-span-2"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          <h1 className="text-2xl font-bold text-white">.Niloy</h1>
          <p className="text-white text-2xl sm:text-4xl">
            <span className="font-bold">Get Ready</span> To Create <br />Great
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="space-y-4 sm:col-span-2 md:col-span-1 flex flex-col items-center sm:items-start"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          <h1 className="text-xl font-bold text-white">Quick Links</h1>
          <div className="flex flex-col items-center sm:items-start space-y-2">
          {links.map((link, idx) => (
  <Link
    key={idx}
    to={link.to}
    className="relative text-white cursor-pointer group"
  >
    {link.name}
    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FF014F] transition-all duration-300 group-hover:w-full"></span>
  </Link>
))}

          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="space-y-4 sm:col-span-2 md:col-span-1 flex flex-col items-center sm:items-start"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
        >
          <h1 className="text-xl font-bold text-white">Contact</h1>
          <div className="flex flex-col items-center sm:items-start space-y-3">
            {contacts.map((contact, idx) => (
              <div
                key={idx}
                className="relative flex items-center gap-2 text-white group cursor-pointer"
              >
                <span className="text-lg rounded-full p-2 bg-[#FF014F] text-white">
                  {contact.icon}
                </span>
                <span className="relative">
                  {contact.value}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FF014F] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <SocialMedia />
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
