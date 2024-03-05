'use client';

import React from 'react'
import Image from "next/image";
import Link from 'next/link'
import Button from './Button';
import Bgimage from '@/public/img/footer/bg-footer.png';

export default function Footer() {
  return (
    <div className=' mt-10'>
      <div className='h-96 w-full relative'  >
        {/* background Image */}
        <Image src={Bgimage} className='h-full w-full bg-cover bg-center  relative' alt="" />
         <div className=' duration-300 absolute top-0 mt-14 ml-16 max-lg:ml-12 '>
          {/* Header */}
          <div>
            <h1 className='text-blue-900 font-bold text-5xl max-lg:text-3xl max-md:text-2xl duration-300'>Unlock Your Productive <br /> Workspace Today! </h1>
            <div className=' mt-8 text-sm font-semibold text-white'>
              {/* Custtom button */}
              <Button size='large' variant="primary"  onClick={() => alert('Primary button clicked')}>
                Sign Up
              </Button>
            </div>

            {/* Content Links */}
            <div className=' w-full mt-7 pl-96 max-lg:pl-0 duration-300'>
              <div className='flex flex-wrap gap-36 pl-20 max-lg:pl-0 max-md:gap-20 duration-300'>
                {/* About Us */}
                <div className='flex flex-col'>
                  <h1 className='text-blue-900 font-bold  text-2xl max-md:text-xl'>ABOUT US</h1>
                  <div className='flex flex-col gap-6 mt-6 max-md:gap-4 duration-300'>
                    <Link href="/" className='text-lg text-blue-900 hover:text-blue-500 font-semibold'>DeskFlow</Link>
                    <Link href="/contacts" className='text-lg text-blue-900 hover:text-blue-500 font-semibold'>Contact Us</Link>
                    <Link href="/team" className='text-lg text-blue-900 hover:text-blue-500 font-semibold'>Our Team</Link>
                  </div>
                </div>

                {/* Legals */}
                <div className='flex flex-col'>
                  <h1 className='text-blue-900 font-bold  text-2xl max-md:text-xl'>LEGALS</h1>
                  <div className='flex flex-col gap-6 mt-6 max-md:gap-4 duration-300'>
                    <Link href="#" className='text-lg text-blue-900 hover:text-blue-500 font-semibold'>Terms &amp; Conditions</Link>
                    <Link href="#" className='text-lg text-blue-900 hover:text-blue-500 font-semibold'>Privacy Policy</Link>
                  </div>
                </div>

                {/* Contacts */}
                <div className='flex flex-col'>
                  <h1 className='text-blue-900 font-bold  text-2xl max-md:text-xl'>CONTACTS</h1>
                  <div className=' mt-6'>
                    <p className='text-lg text-blue-900 font-semibold'>hotdesk@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full mt-10'>
              <div className='flex mr-8 justify-between max-md:justify-center max-md:flex-none max-md:pr-3 gap-1 duration-300'>
                <p className='text-blue-900'>Copyright &copy; 2023 Hot-Desking System</p>
                <p className='text-blue-900'>All Rights Reserved</p>
              </div>
            </div>
            <br />
           </div>
         </div>
      </div>
    </div>
  )
}
