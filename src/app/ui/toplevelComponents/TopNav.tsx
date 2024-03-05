'use client';
import React from 'react'
import Link from 'next/link';
import { useState } from 'react'; 
import Button from './Button'
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";



export default function TopNav() {
  // for burger Navigation
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      {/* nav container */}
      <nav className="w-full border-b-2 border-slate-400 bg-white fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO or NAME  */}
              <Link href="#">
                <h2 className="text-2xl text-blue-700 font-bold ">Desk<span className='text-blue-500'>Flow</span> </h2>
              </Link>
              {/* BURGERNAV FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border duration-300"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    // close nav
                    <div>
                      <RxCross2 width={40} height={40} />
                    </div>
                  ) : (
                   // open nav
                    <div>
                      <RxHamburgerMenu width={40} height={40} />
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>

            {/* Sign in & Sign up button */}
            
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                // checking if navburger is true or false
                navbar ? ' md:p-0 flex justify-center duration-500 bg-transparent' : 'hidden'
              }`}
            >
              <ul className="h-screen md:pr-5 md:h-auto items-center justify-center md:flex duration-300">
                <li className="pb-6 text-sm font-semibold pt-4 md:px-2 text-center md:hover:bg-transparent">
                <div className='w-28 h-9'>
                  <Button size='custom' variant="light"  onClick={() => alert('Primary button clicked')}>
                  Sign Up
                  </Button>
                </div>
                </li>
                <li className="pb-6 text-sm font-semibold py-4 md:px-2 text-center md:hover:bg-transparent">
                 <div className='w-28 h-9'>
                  <Button size='custom' variant="primary"  onClick={() => alert('Primary button clicked')}>
                  Sign In 
                  </Button>
                 </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>

  )
}
