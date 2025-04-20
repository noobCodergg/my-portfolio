import React from 'react';
import { FaAngleRight } from "react-icons/fa";

const UpperSection = ({title}) => {
  return (
    <div>
      <div className="h-80 bg-black bg-[url('/assets/breadcum-bg.png')] bg-cover bg-center flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <div className="flex items-center text-lg space-x-2">
          <span>Home</span>
          <FaAngleRight className="text-sm mt-[2px]" />
          <span className='text-text1'>{title}</span>
        </div>
      </div>
    </div>
  );
};

export default UpperSection;


