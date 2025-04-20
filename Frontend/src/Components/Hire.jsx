import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { postRequest } from '../Api/requestApi';
import Swal from 'sweetalert2'; // Import SweetAlert2

const Hire = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    budget: 0,
    type: '',
    details: ''
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the budget is too low
    if (formData.budget < 10000) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Your budget is too low.',
      });
      return;
    }

    try {
      if (
        formData.first_name !== '' &&
        formData.last_name !== '' &&
        formData.email !== '' &&
        formData.budget >= 10000 &&
        formData.details !== ''
      ) {
        const response = await postRequest(formData);
        console.log(response.data);

        // Success alert after successful form submission
        Swal.fire({
          icon: 'success',
          title: 'Request Submitted',
          text: 'Your request has been submitted. The developer will contact you via email.',
        });
      } else {
        console.log('invalid data');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-black py-20 px-4 flex justify-center items-center"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="w-full max-w-6xl rounded-lg p-12 relative overflow-hidden"
        style={{ border: '1px solid transparent' }}
      >
        <motion.div
          className="absolute pointer-events-none w-full h-full top-0 left-0 rounded-lg"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.2), transparent 20%)`,
          }}
        />

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
          <div>
            <label htmlFor="firstName" className="block mb-2 font-medium">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              placeholder="John"
              className="w-full px-4 py-2 rounded-md bg-[#2c2c2c] border border-gray-700 focus:outline-none focus:border-text1"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block mb-2 font-medium">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              placeholder="Doe"
              className="w-full px-4 py-2 rounded-md bg-[#2c2c2c] border border-gray-700 focus:outline-none focus:border-text1"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-md bg-[#2c2c2c] border border-gray-700 focus:outline-none focus:border-text1"
            />
          </div>

          <div>
            <label htmlFor="budget" className="block mb-2 font-medium">
              Budget (USD)
            </label>
            <input
              type="number"
              id="budget"
              name="budget"
              onChange={handleChange}
              value={formData.budget}
              placeholder="Your estimated budget"
              className="w-full px-4 py-2 rounded-md bg-[#2c2c2c] border border-gray-700 focus:outline-none focus:border-text1"
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="projectType" className="block mb-2 font-medium ">
              Project Type
            </label>
            <select
              id="projectType"
              value={formData.type}
              onChange={handleChange}
              name="type"
              className="w-full px-4 py-2 rounded-md bg-[#121212] border border-gray-700 focus:outline-none focus:border-text1"
            >
              <option value="">Select...</option>
              <option value="webApp">Full-Stack Web App</option>
              <option value="frontend">Frontend Only</option>
              <option value="backend">Backend Only</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="message" className="block mb-2 font-medium">
              Project Details
            </label>
            <textarea
              id="message"
              rows="6"
              name="details"
              value={formData.details}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              className="w-full px-4 py-2 rounded-md bg-[#2c2c2c] border border-gray-700 focus:outline-none focus:border-text1"
            ></textarea>
          </div>

          <div className="md:col-span-2">
            <button
              onClick={handleSubmit}
              type="submit"
              className="w-full py-3 text-2xl mt-4 rounded-md bg-text1 text-white hover:text-black font-semibold hover:bg-white transition-colors duration-300"
            >
              Hire Me
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Hire;
