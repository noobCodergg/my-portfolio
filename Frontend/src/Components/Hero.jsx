import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

const roles = ["Full Stack Developer.", "System Architect.", "Tech Enthusiast."];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[url('/assets/banner-background-one.jpg')] bg-cover bg-left flex flex-col-reverse md:flex-row items-center justify-center px-4 md:px-16 py-10 md:py-0 gap-10">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="text-white font-rubik space-y-4 max-w-xl">
          <motion.h1
            className="text-lg sm:text-xl font-semibold"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          >
            HELLO
          </motion.h1>

          <motion.h1
            className="text-3xl sm:text-4xl font-bold"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            I'm Muntasir Mahmud
          </motion.h1>

          <div className="h-10 overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.h1
                key={roles[currentRole]}
                className="text-xl sm:text-2xl md:text-3xl font-bold text-text1 absolute"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                {roles[currentRole]}
              </motion.h1>
            </AnimatePresence>
          </div>

          <motion.p
            className="text-sm sm:text-base text-gray-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <span className="text-text1 text-lg mr-2 animate-bounce">●</span>
            A passionate Full Stack Developer focused on responsive, scalable, and user-friendly web applications. I
            specialize in the MERN stack and love building clean, architectural code.
          </motion.p>

          <motion.div
            className="pt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
            <Button />
          </motion.div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 relative flex flex-col items-center justify-end">
        {/* Floating Text */}
        <motion.h1
          className="absolute text-white text-4xl sm:text-5xl md:text-6xl font-bold bottom-28 md:bottom-40 z-0 text-center"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          Web Developer
        </motion.h1>

        {/* Developer Image */}
        <motion.img
          src="./assets/banner-user-image-five.png"
          alt="Developer"
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full max-w-[800px] z-10 object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
