'use client';
import Link from 'next/link';
import { LuLayoutDashboard, LuFolderOpen } from "react-icons/lu";
import { MdOutlineManageAccounts } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
import { GrMapLocation } from "react-icons/gr";
import React, { useState } from 'react'

const menuItems = [
  {
    link :'/dashboard',
    label: 'Dashboard',
    icon : <LuLayoutDashboard className='text-black text-2xl' />
  },
  {
    link : '/bookings',
    label: 'Bookings',
    icon : <LuFolderOpen className='text-black text-2xl' />
  },
  {
    link : '/manageUser',
    label: 'Manage User',
    icon : <MdOutlineManageAccounts className='text-black text-2xl' />
  },
  {
    link : '/desks',
    label: 'Desks',
    icon : <GrMapLocation className='text-black text-2xl' />
  },
];

const bottomFunctions = [
  {
    link :'/settings',
    label: 'Settings',
    icon : <IoSettingsOutline className='text-black text-2xl' />
  },
  {
    link : '/logout',
    label: 'Logout',
    icon : <IoLogOutOutline className='text-black text-2xl' />
  },
];


export default function SideNav() {
  const [toggle, setToggle] = useState(false)
  //64
  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <div className=''>
      <div className={`h-[800px] ${toggle ? "w-64 duration-0" : "w-[82px]"} w- border border-gray-200 drop-shadow-md duration-300`}>
        <div className={`px-5 ${toggle? "py-6": "py-[28px]"} h-full`} >
          <div className='flex flex-row gap-6 items-center '>
            <GiHamburgerMenu className="duration-300 ml-2 text-2xl font-extrabold cursor-pointer" 
             onClick={handleClick}  
            />
            <h2 className={`text-2xl text-blue-700 font-bold ${toggle? "": "hidden"} origin-left duration-1000`}>Desk<span className='text-blue-500'>Flow</span> </h2>
          </div>
          <div className=' flex flex-col justify-between h-[725px]' >
            <div className={`${toggle? "mt-12": "mt-[52px]"}`}>
              <ul className='flex flex-col gap-3' >
                {menuItems.map((items,index) => (
                  <li key={index}>
                    <Link href={items.link}>
                      <div className={`flex items-center px-2 hover:bg-gray-100 gap-5 py-2 hover:rounded-md`}>
                        {items.icon}
                        <span className={`text-md text-black duration-300 ${!toggle && "hidden"} origin-left duration-1000`}>{items.label}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`${toggle? "mt-12": "mt-[52px]"}`}>
              <ul className='flex flex-col gap-3' >
                {bottomFunctions.map((items,index)=> (
                <li key={index}>
                  <Link href={items.link}>
                    <div className={`flex items-center px-2 hover:bg-gray-100 gap-5 py-2 hover:rounded-md`}>
                      {items.icon}
                      <span className={`text-md text-black duration-300 ${!toggle && "hidden"} origin-left duration-1000`}>{items.label}</span>
                    </div>
                  </Link>
                </li>
                ))}
              </ul> 
            </div>
          </div>

        </div>
      </div> 
    </div>
  )
}
