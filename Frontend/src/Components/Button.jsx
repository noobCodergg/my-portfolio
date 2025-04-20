import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Button = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="/assets/cv.pdf" // Make sure your file is located at: public/assets/cv.pdf
      download
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative inline-block bg-text1 text-white font-medium px-6 py-3 rounded-full shadow-md hover:bg-opacity-80 transition duration-300 overflow-hidden"
    >
      <span className="inline-block relative">
        {/* Text */}
        <span className="inline-block">
          {hovered ? '→ Download CV' : 'Download CV →'}
        </span>

        {/* Animated Arrow */}
        <AnimatePresence mode="wait">
          <motion.span
            key={hovered ? 'left' : 'right'}
            initial={{ x: hovered ? 30 : -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: hovered ? -30 : 30, opacity: 0 }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="absolute left-0 top-0 w-full h-full"
          >
            <span className="invisible">
              {hovered ? '→ Download CV' : 'Download CV →'}
            </span>
          </motion.span>
        </AnimatePresence>
      </span>
    </a>
  );
};

export default Button;
