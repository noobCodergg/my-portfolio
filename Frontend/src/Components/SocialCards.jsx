import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const socialLinks = [
  { name: 'Facebook', icon: <FaFacebook size={30} />, link: 'https://facebook.com' },
  { name: 'LinkedIn', icon: <FaLinkedin size={30} />, link: 'https://linkedin.com' },
  { name: 'Instagram', icon: <FaInstagram size={30} />, link: 'https://instagram.com' },
  { name: 'Upwork', icon: <FaGithub size={30} />, link: 'https://upwork.com' },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: 0.2 },
  },
};

const SocialCard = ({ social }) => {
  const [angle, setAngle] = useState(45);
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rad = Math.atan2(y, x);
    const deg = (rad * 180) / Math.PI;
    setAngle(deg);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
      className="relative rounded-lg transition-transform duration-300 hover:scale-105"
      style={{
        padding: hovered ? '1px' : '0px',
        background: hovered
          ? `linear-gradient(${angle}deg, #00ffff, #ff00ff)`
          : 'transparent',
        borderRadius: '0.5rem',
      }}
    >
      <div className="bg-[#1a1a1a] rounded-lg text-white p-6 h-full flex flex-col items-center justify-center text-center">
        <a
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <div className="text-3xl mb-4">{social.icon}</div>
          <span className="font-semibold">{social.name}</span>
        </a>
      </div>
    </motion.div>
  );
};

const SocialCards = () => {
  return (
    <div className="py-16 px-6 bg-black">
      <h2 className="text-4xl font-bold text-text1 mb-12 text-center">Connect with Me</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {socialLinks.map((social, i) => (
          <SocialCard key={i} social={social} />
        ))}
      </div>
    </div>
  );
};

export default SocialCards;
