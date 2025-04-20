import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const data = [
    {
      name: "Bismo (1 year)",
      position: "React.js Developer",
      description:
        "Developed and maintained responsive user interfaces using React.js, improving UI performance and user experience across multiple projects.",
    },
    {
      name: "EasyDrop Dropshipping Asia (Running)",
      position: "MERN Stack Developer",
      description:
        "Building scalable e-commerce platforms using the MERN stack, focusing on real-time features, API integration, and performance optimization.",
    },
  ];
  

  return (
    <div className="px-4 sm:px-6 md:px-10 py-12 flex flex-col items-center justify-center gap-12 bg-[#060606]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-left w-full sm:w-5/6 flex items-center gap-2"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Experience
        </h1>
        <motion.div
          className="h-[1px] w-16 bg-text1 mt-3"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          style={{ transformOrigin: "left" }}
        />
        <motion.div
          className="w-2 h-2 rounded-full bg-text1 mt-3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.div>

      {/* Main content area */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">
        {/* Experience List */}
        <div className="w-full md:w-1/3 md:ml-32">
          {data.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="py-4"
              key={index}
            >
              <p className="text-text1 font-semibold text-sm sm:text-base">
                experience
              </p>
              <h1 className="text-white text-lg sm:text-xl font-bold">
                {item.name}
              </h1>
              <p className="text-white text-sm font-light py-1">
                {item.position}
              </p>
              <p className="text-white text-sm font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Animation Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-64 sm:w-72 h-64 sm:h-72 rounded-full bg-gradient-to-br from-[#FF014F] to-[#111] shadow-2xl flex items-center justify-center"
          >
            {/* Floating animations */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute w-full h-full flex items-center justify-center"
            >
              <div className="absolute top-4 left-4 w-3 h-3 bg-white rounded-full blur-sm animate-pulse" />
              <div className="absolute bottom-4 right-6 w-2 h-2 bg-pink-300 rounded-full blur-sm animate-ping" />
              <div className="absolute top-1/2 left-1 w-2 h-2 bg-purple-400 rounded-full animate-bounce" />
              <div className="absolute bottom-8 left-10 w-[6px] h-[6px] bg-yellow-300 rounded-full blur-sm animate-pulse" />
            </motion.div>

            <div className="text-center px-2 sm:px-4">
              <h3 className="text-white font-bold text-2xl sm:text-3xl">
                Late Night Hustle
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                Code. Create. Repeat.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
