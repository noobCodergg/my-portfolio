import React from 'react';
import { motion } from 'framer-motion';

const Add = () => {
  return (
    <div className='w-full flex items-center justify-center bg-[#060606] px-4 py-10 sm:p-14'>
      <motion.div 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }} 
        viewport={{ once: true }} 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-6xl"
      >
        {Array(8).fill(0).map((_, index) => (
          <img
            key={index}
            src={`./assets/company-logo-${index + 1}.svg`} // Fixed src with template literals
            alt={`Company logo ${index + 1}`}
            className="border border-gray-400 px-6 sm:px-10 py-4 bg-[#141414] rounded-md hover:scale-105 transition-transform duration-300"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Add;
