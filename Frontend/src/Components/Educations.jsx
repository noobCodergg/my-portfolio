import React, { useState } from "react";
import { motion } from "framer-motion";

const Educations = () => {
  const data = [
    {
      name: "Harimohan Govt. High School",
      date: "2008 - 2013",
      description:
        "Completed foundational education with a focus on science and mathematics, building a strong academic base.",
    },
    {
      name: "New Govt. Degree College",
      date: "2013 - 2015",
      description:
        "Pursued higher secondary education with a major in Science, developing analytical and problem-solving skills.",
    },
    {
      name: "BRAC University",
      date: "2018 - 2024",
      description:
        "Graduated with a Bachelor's degree in Computer Science, specializing in full-stack web development and software engineering.",
    },
    {
      name: "BRAC University",
      date: "2025 - ",
      description:
        "Currently pursuing post-graduate studies to deepen expertise in software architecture and scalable system design.",
    },
  ];
  
  const [mousePos, setMousePos] = useState({});
  const [hovered, setHovered] = useState({});

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos((prev) => ({
      ...prev,
      [index]: {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      },
    }));
  };

  const handleMouseEnter = (index) => {
    setHovered((prev) => ({ ...prev, [index]: true }));
  };

  const handleMouseLeave = (index) => {
    setHovered((prev) => ({ ...prev, [index]: false }));
  };

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
          Education
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

      {/* Cards */}
      <div className="w-full rounded-xl shadow-md flex items-center justify-center">
        <div className="w-full sm:w-5/6 text-white text-center text-base grid grid-cols-1 sm:grid-cols-2 gap-4">
          {data.map((item, index) => {
            const pos = mousePos[index] || { x: 0, y: 0 };
            const isHovered = hovered[index];

            return (
              <div
                key={index}
                className="relative p-[2px] rounded-lg group"
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                {/* Glow effect */}
                {isHovered && (
                  <div
                    className="absolute inset-0 rounded-lg pointer-events-none z-0 transition-all duration-200"
                    style={{
                      background: `radial-gradient(circle at ${pos.x}px ${pos.y}px, #FF014F, transparent 70%)`,
                    }}
                  />
                )}

                {/* Card content */}
                <div className="relative z-10 bg-[#141414] rounded-lg px-6 py-5 sm:px-10 sm:py-6 text-left">
                  <motion.h2
                    className="text-lg sm:text-xl font-bold mb-1"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.9 }}
                  >
                    {item.name}
                  </motion.h2>

                  <motion.p
                    className="text-sm font-light mb-2"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7 }}
                  >
                    {item.date}
                  </motion.p>

                  <motion.p
                    className="text-xs sm:text-sm font-light"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.9 }}
                  >
                    {item.description}
                  </motion.p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Educations;
