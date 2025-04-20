import React from 'react';
import { Link } from 'react-router-dom'; // Make sure you're using React Router

const Footer1 = () => {
  return (
    <div className="bg-[#141414] py-4 px-6 border-t border-gray-700">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-white text-sm gap-4">

        {/* Left Side */}
        <p className="text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>

        {/* Right Side */}
        <div className="flex gap-6">
          <Link to="/terms&conditions" className="relative text-gray-400 hover:text-white group">
            Terms & Conditions
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FF014F] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/privacypolicy" className="relative text-gray-400 hover:text-white group">
            Privacy Policy
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FF014F] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
