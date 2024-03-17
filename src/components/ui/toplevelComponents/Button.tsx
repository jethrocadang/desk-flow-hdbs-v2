'use client';   
import React from 'react';


const Button = ({ size, variant, onClick, children}:any) => {
  
  // Define variant classes based on the passed prop
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-[#6358DC] border border-[#6358DC] text-white hover:bg-[#7298EC]  hover:border-[#7298EC] hover:border duration-200';
      case 'secondary':
        return 'bg-[#7298EC] border border-[#7298EC] text-white hover:bg-[#6358DC] hover:border-[#6358DC]  hover:border duration-200';
      case 'danger':
        return 'bg-red-500 border border-red-600 text-white hover:bg-white hover:text-white hover:bg-red-300  hover:border-red-500  hover:border duration-200';
      case 'light':
        return'bg-white border border-indigo-600 hover:border text-indigo-900 hover:bg-slate-200 duration-200 hover:text-black';
      default:
        return 'bg-gray-300 border border-gray-400 text-gray-800 hover:bg-white hover:text-black hover:bg-gray-400  hover:border-gray-400  hover:border duration-200';
    }
  };
  //define the size of the button
  const getButtonSize = () => {
    switch(size){
      case 'small':
        return 'px-4 py-2';
      case 'medium':
        return 'px-6 py-2';
      case 'large':
        return'px-8 py-2';
      case 'custom':
        // custom you need to wrap to onother div
        return'w-full h-full';
    }
  };

  // Combine base and variant classes using
  const buttonClasses = `rounded-xl ${getButtonSize()} ${getVariantClasses()}`;

  return (
    <>
      {/*rendering button*/}
      <button className={buttonClasses} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
