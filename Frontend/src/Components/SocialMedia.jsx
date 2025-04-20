import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const SocialIcon = ({ children }) => (
  <div className="relative w-8 h-8 flex items-center justify-center group cursor-pointer">
    {/* Gray background by default, animated grow of bg-text1 on hover */}
    <span className="
      absolute inset-0 
      rounded-full 
      bg-gray-700 
      group-hover:bg-text1 
      scale-100 
      group-hover:scale-110 
      transition-all 
      duration-300 
      ease-out 
      z-0
    "></span>

    {/* Icon */}
    <span className="relative z-10 text-white">
      {children}
    </span>
  </div>
);

const SocialMedia = () => {
  return (
    <div className="flex items-center gap-2 font-light">
      <Link to='https://www.facebook.com/rodion.raskolnikov.3994885/' ><SocialIcon><FaFacebookF /></SocialIcon></Link>
      <Link to='https://www.linkedin.com/in/muntasir-mahmud-niloy-89b57b265/'><SocialIcon><FaLinkedinIn /></SocialIcon></Link>
      <Link to='https://www.upwork.com/freelancers/~0134481d1abba2539b'><SocialIcon><FaUpwork /></SocialIcon></Link>
    </div>
  );
};

export default SocialMedia;
