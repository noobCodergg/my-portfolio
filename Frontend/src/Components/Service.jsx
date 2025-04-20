import React from 'react'
import { FaPencilRuler,FaConnectdevelop } from "react-icons/fa";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { GrDocumentConfig } from "react-icons/gr";
import { motion } from 'framer-motion';

const Service = () => {
  const data = [
    {
      name: "Web Design",
      project: "10 Projects",
      icon: <FaConnectdevelop size={40} />
    },
    {
      name: "Web Development",
      project: "10 Projects",
      icon: <FaPencilRuler size={40} />
    },
    {
      name: "System Architecture",
      project: "7 Projects",
      icon: <GrDocumentConfig size={40} />
    },
    {
      name: "E-mail Marketing",
      project: "4 Projects",
      icon: <LiaUserFriendsSolid size={40} />
    }
  ];

  return (
    <div className="bg-servicebg py-12 px-4 sm:px-6 lg:px-12">
      <div className="flex flex-wrap justify-center gap-6">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.4 }}
            className="w-full sm:w-[45%] md:w-[40%] lg:w-[22%] bg-opacity-10 backdrop-blur-sm bg-white/5 px-6 py-8 text-center border border-text1 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-center text-3xl text-text1 mb-4">
              {item.icon}
            </div>
            <h1 className="text-white font-semibold text-lg mb-1">{item.name}</h1>
            <p className="text-gray-400 text-sm">{item.project}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Service;
