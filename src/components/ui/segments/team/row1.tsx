'use client';
import React from 'react'
import Image from "next/image";
import { useState } from 'react';
import jethroCadang from '@/public/img/teamImage/jeth.png';
import jmUmali from '@/public/img/teamImage/michael.png';
import allenMagadia from '@/public/img/teamImage/allen.png';

export default function Row1() {
  const [showDetails1, setShowDetails1] = useState(false);
  const [showDetails2, setShowDetails2] = useState(false);
  const [showDetails3, setShowDetails3] = useState(false);

  const handleMouseEnter1 = () => {
    setShowDetails1(true);
  };
  const handleMouseLeave1 = () => {
    setShowDetails1(false);
  };
  const handleMouseEnter2 = () => {
    setShowDetails2(true);
  };
  const handleMouseLeave2 = () => {
    setShowDetails2(false);
  };
  const handleMouseEnter3 = () => {
    setShowDetails3(true);
  };
  const handleMouseLeave3 = () => {
    setShowDetails3(false);
  };
  return (
    <div>
      {/* firstrow */}
      <div className='flex flex-wrap gap-10 justify-center mt-5 duration-300'>
        <div className="relative inline-block w-60 h-72 rounded-3xl border border-indigo-900" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
          <Image src={jethroCadang} alt="Hover Image" className="w-full h-full bg-cover rounded-3xl" />
          {/* hover */}
          <div className={`absolute bottom-0 left-0 w-full p-4 rounded-b-3xl   duration-300 
          ${showDetails1 ? 'h-20 bg-gradient-to-t from-indigo-600 from-5%' : 'h-0' } `}>
              <div className="text-center pt-3 text-white duration-300">
                <p className="text-lg">Jethro Cadang</p>
                <p className="text-xs font-bold">Project Manager</p>
              </div>
          </div>
        </div>

        <div className="relative inline-block w-60 h-72 rounded-3xl border border-indigo-900" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
          <Image src={jmUmali} alt="Hover Image" className="w-full h-full bg-cover rounded-3xl" />
          {/* hover */}
          <div className={`absolute bottom-0 left-0 w-full p-4 rounded-b-3xl   duration-300 
          ${showDetails2 ? 'h-20 bg-gradient-to-t from-indigo-600 from-5%' : 'h-0' } `}>
              <div className=' text-center pt-3 text-white'>
                <p className="text-lg">John Michael Umali</p>
                <p className="text-xs font-bold">Web Developer</p>
              </div>
          </div>
        </div>
        <div className="relative inline-block w-60 h-72 rounded-3xl border border-indigo-900" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
          <Image src={allenMagadia} alt="Hover Image" className="w-full h-full bg-cover rounded-3xl" />
          {/* hover */}
          <div className={`absolute bottom-0 left-0 w-full p-4 rounded-b-3xl   duration-300 
          ${showDetails3 ? 'h-20 bg-gradient-to-t from-indigo-600 from-5%' : 'h-0' } `}>
              <div className=' text-center pt-3 text-white'>
                <p className="text-lg">Allen Aebram Magadia</p>
                <p className="text-xs font-bold">Web Developer</p>
              </div>
          </div>
        </div>
       </div>
       
      
    </div>
  )
}
