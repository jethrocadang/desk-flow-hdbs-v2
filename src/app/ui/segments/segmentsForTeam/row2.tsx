'use client';
import React from 'react'
import Image from "next/image";
import { useState } from 'react';
import marjAnito from '@/public/img/teamImage/marj.png';
import erishBerboso from '@/public/img/teamImage/erish.png';
import veraLazaraga from '@/public/img/teamImage/vera.png';

export default function Row2() {
  const [showDetails4, setShowDetails4] = useState(false);
  const [showDetails5, setShowDetails5] = useState(false);
  const [showDetails6, setShowDetails6] = useState(false);

  const handleMouseEnter4 = () => {
    setShowDetails4(true);
  };
  const handleMouseLeave4 = () => {
    setShowDetails4(false);
  };
  const handleMouseEnter5 = () => {
    setShowDetails5(true);
  };
  const handleMouseLeave5 = () => {
    setShowDetails5(false);
  };
  const handleMouseEnter6 = () => {
    setShowDetails6(true);
  };
  const handleMouseLeave6 = () => {
    setShowDetails6(false);
  };
  return (
    <div>
      {/* Second row */}
      <div className='flex flex-wrap gap-10 justify-center mt-5'>
        <div className="relative inline-block w-60 h-72 rounded-3xl border border-indigo-900" onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
            <Image src={marjAnito} alt="Hover Image" className="w-full h-full bg-cover rounded-3xl" />
            {/* hover */}
            <div className={`absolute bottom-0 left-0 w-full p-4 rounded-b-3xl   duration-300 
            ${showDetails4 ? 'h-20 bg-gradient-to-t from-indigo-600 from-5%' : 'h-0' } `}>
                <div className=' text-center pt-3 text-white'>
                  <p className="text-lg">Marjorie Anito</p>
                  <p className="text-xs font-bold">UI/UX Designer</p>
                </div>
            </div>
          </div>
          <div className="relative inline-block w-60 h-72 rounded-3xl border border-indigo-900" onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
            <Image src={erishBerboso} alt="Hover Image" className="w-full h-full bg-cover rounded-3xl" />
            {/* hover */}
            <div className={`absolute bottom-0 left-0 w-full p-4 rounded-b-3xl   duration-300 
            ${showDetails5 ? 'h-20 bg-gradient-to-t from-indigo-600 from-5%' : 'h-0' } `}>
                <div className=' text-center pt-3 text-white'>
                  <p className="text-lg">Erish Berboso</p>
                  <p className="text-xs font-bold">Quality Assurance Tester</p>
                </div>
            </div>
          </div>
          <div className="relative inline-block w-60 h-72 rounded-3xl border border-indigo-900" onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
            <Image src={veraLazaraga} alt="Hover Image" className="w-full h-full bg-cover rounded-3xl" />
            {/* hover */}
            <div className={`absolute bottom-0 left-0 w-full p-4 rounded-b-3xl   duration-300 
            ${showDetails6 ? 'h-20 bg-gradient-to-t from-indigo-600 from-5%' : 'h-0' } `}>
                <div className=' text-center pt-3 text-white'>
                  <p className="text-lg">Vera Jane Lazaraga</p>
                  <p className="text-xs font-bold">Content Writer</p>
                </div>
            </div>
          </div>
       </div>
      
    </div>
  )
}
