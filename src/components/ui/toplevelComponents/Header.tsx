import React from 'react'
import profile from '@/public/img/profile/profile.png';
import Image from 'next/image'

export default function Header({
  children
  }: {
  children: React.ReactNode
}) {
  return (
    <header className=' w-full h-[75px] border-gray-300 bg-white top-0 left-0 right-0 drop-shadow-md flex flex-row justify-between items-center px-3'>
      <p className='text-[#9292DD] text-xl font-bold'>{children}</p>
      {/* profile */}
        <div className='flex flex-row gap-3'>
        <div className=' w-[40px] h-[40px] border border-blue-900 rounded-full'>
          <Image src={profile} className=' w-full bg-cover bg-center' alt="" />
        </div>
        <div className='flex flex-col gap-1'>
          <h4 className='text-sm font-semibold'> John Doe</h4>
          <p className='text-xs text-black'>Project Manager</p>
        </div>
        </div>
    </header>
  )
}
