"use client"
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { IoMoon, IoSunnyOutline } from "react-icons/io5";
import { Button } from '@/components/ui/button';


function ToggleTheme() {
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(()=> {
    setMounted(true)
  })

  if(!mounted){
    return <Button variant="secondary" size="icon" disabled={true}></Button>
  }  

  const light = theme === "light";

  return (

  <Button
  className='border border-black dark:border-white rounded '
  variant="secondary" 
  size="icon" 
  onClick={() => setTheme(`${light ? "dark" : "light"}`)}
  >
    {light ? (
      <div className='w-full h-full flex justify-center items-center hover:bg-black hover:text-white duration-300'>
      <IoMoon className=' text-xl ' />
     </div>
    ):(
      <div className='w-full h-full flex justify-center items-center  hover:rotate-180 duration-1000'>
        <IoSunnyOutline className=' text-xl ' />
      </div>
    )}
  </Button>

)}

export default ToggleTheme
