import React, { useState } from "react";
import { motion } from "framer-motion";

const Stat = () => {
  const data = [
    {
      amount: "10+",
      title: "Projects Completed",
    },
    {
      amount: "2+",
      title: "Years of Experience",
    },
    {
      amount: "15+",
      title: "Happy Clients",
    },
    {
      amount: "8+",
      title: "Tech Stacks Mastered",
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
    <div className="bg-servicebg w-full py-12 px-4 sm:px-6 lg:px-12">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradiant1 w-full lg:w-1/2 rounded-xl p-6 sm:p-8 shadow-md"
        >
          <div className="flex items-center gap-4 sm:gap-6 mb-6 flex-wrap">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h1 className="text-6xl sm:text-7xl md:text-9xl font-extrabold text-text1 leading-none">
                2
              </h1>
            </motion.div>
            <div className="mt-2 sm:mt-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight">
                Years Of Experience
              </h2>
            </div>
          </div>
          <p className="text-white text-sm sm:text-base leading-relaxed">
          MERN Stack developers create full-stack web applications using MongoDB, Express, React, and Node.js for fast, scalable digital solutions.
          </p>
        </motion.div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 rounded-xl p-4 sm:p-8 shadow-md h-full">
          <div className="text-white text-center text-base grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  {/* Glow effect on hover only */}
                  {isHovered && (
                    <div
                      className="absolute inset-0 rounded-lg pointer-events-none z-0 transition-all duration-200"
                      style={{
                        background: `radial-gradient(circle at ${pos.x}px ${pos.y}px, #FF014F, transparent 70%)`,
                      }}
                    />
                  )}

                  {/* Inner content */}
                  <div className="relative z-10 bg-[#141414] rounded-lg p-6">
                    <motion.h1
                      className="text-xl sm:text-2xl font-bold leading-[2]"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.9 }}
                    >
                      {item.amount}
                    </motion.h1>
                    <p className="text-sm">{item.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
