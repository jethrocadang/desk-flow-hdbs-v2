'use client';   
import React from 'react';


const Button = ({ size, variant, onClick, children}:any) => {
  // Define variant classes based on the passed prop
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-violet-700 text-white hover:bg-white hover:text-indigo-900 hover:border-indigo-600 hover:border duration-200';
      case 'secondary':
        return 'bg-gray-300 text-gray-800 hover:bg-white hover:text-indigo-900 hover:bg-white  hover:border-indigo-600  hover:border duration-200';
      case 'danger':
        return 'bg-red-500 text-white hover:bg-white hover:text-indigo-900 hover:bg-white  hover:border-indigo-600  hover:border duration-200';
      case 'light':
        return'bg-white border border-indigo-600	 hover:border-0 text-indigo-900 hover:bg-indigo-600 hover:text-white duration-200';
      default:
        return 'bg-gray-500 text-white hover:bg-white hover:text-black hover:border-black hover:border duration-200';
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
