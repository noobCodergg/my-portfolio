import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "Java", level: 80 },
  { name: "JavaScript", level: 70 },
  { name: "React", level: 60 },
  { name: "Node.js", level: 60 },
  { name: "Express.js", level: 70 },
  { name: "MongoDB", level: 60 },
  { name: "MySQL", level: 70 },
  { name: "PostgreSQL", level: 40 },
];

const Skill = () => {
  return (
    <div className="p-10 flex flex-col items-center justify-center gap-12 bg-[#060606]">

      {/* Animated Heading */}
      <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className=" text-left w-5/6 flex items-center gap-2"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-white">
        Skills
      </h1>
      <motion.div
        className="h-[1px] w-24 bg-text1 mt-3"
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

      <div className="w-5/6 flex flex-col lg:flex-row gap-10">
        {/* Left Section */}
        <motion.div
          className="w-full lg:w-1/2 space-y-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {skills.slice(0, 4).map((skill, index) => (
            <div key={index} className="w-full group">
              <div className="flex justify-between mb-1">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-white text-sm">{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#FF014F] rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 10px #FF014F",
                  }}
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="w-full lg:w-1/2 space-y-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {skills.slice(4).map((skill, index) => (
            <div key={index} className="w-full group">
              <div className="flex justify-between mb-1">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-white text-sm">{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#FF014F] rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 10px #FF014F",
                  }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skill;
