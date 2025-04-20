import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

const ServiceDetail = () => {
  return (
    <div className="w-full flex items-center justify-center pb-8 bg-black">
      <div className="w-5/6 text-white">
        {[
          {
            title: 'Full-Stack Web Application Development',
            desc: "I specialize in building complete end-to-end web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). From designing intuitive front-end interfaces in React to creating secure and scalable back-end APIs with Node and Express, I deliver robust solutions tailored to business needs. Whether it's a single-page app, an admin dashboard, or an e-commerce platform, I ensure responsive design, optimized performance, and seamless user experience.",
          },
          {
            title: 'RESTful API & Backend Development',
            desc: "I develop secure, high-performance RESTful APIs using Express.js and Node.js, integrated with MongoDB for flexible data handling. I focus on clean architecture, efficient database schemas, and optimized query handling, including aggregation pipelines, pagination, and advanced filtering. Whether it’s user authentication, file uploads, or third-party integrations, I make sure the backend is reliable, secure, and easy to scale.",
          },
          {
            title: 'React Frontend Development & UI Integration',
            desc: "I create modern, interactive, and fully responsive front-end applications using React.js. I specialize in component-based architecture, state management (with Context API, Redux, or Zustand), and integration with REST APIs or GraphQL backends. I focus on building dynamic UIs with animations, form validation, and seamless user interactions, ensuring mobile-friendly and accessible web apps.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            className="relative group overflow-hidden pb-6 last:pb-0 px-4 py-6 rounded-md cursor-pointer"
          >
            {/* Background sliding overlay */}
            <span className="absolute inset-0 bg-text1 scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-500 ease-in-out rounded-md z-0" />

            {/* Content */}
            <div className="relative z-10 transition-colors duration-300 ">
              <h1 className="text-2xl font-bold">{item.title}</h1>
              <p className="mt-2">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetail;
