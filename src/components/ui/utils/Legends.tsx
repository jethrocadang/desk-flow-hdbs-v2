'use client';   
import React from 'react';


const Legends = ({variant, onClick, children}:any) => {
  // Define variant classes based on the passed prop
  const getVariantClasses = () => {
    switch (variant) {
      case 'available':
        return 'bg-[#7CDD6D] text-white border-1';
      case 'disabled':
        return 'bg-[#FF8585] text-white border-1';
      case 'maintenance':
        return 'bg-[#D6D792] text-gray-800 border-1';
      default:
        return 'bg-gray-500 text-white border-1';
    }
  };
  

  // Combine base and variant classes using
  const legendClasses = `rounded-xl px-4 py-1  ${getVariantClasses()}`;

  return (
    <>
      {/*rendering button*/}
      <Legends className={legendClasses} onClick={onClick}>
        {children}
      </Legends>
    </>
  );
};

export default Legends;
