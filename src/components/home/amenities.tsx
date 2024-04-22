import React from 'react'
import Image from 'next/image'
import elipse from '@/public/img/homepage/Ellipsee.png';

export default function Amenities() {
  return (
    <div>
      <div className='container w-full pt-20 max-md:pt-16'>
        <h1 className='text-4xl font-bold	text-blue-900  text-center'>Features and Amenities</h1>
        {/* first Amenities*/}
        <div className=' h-96 w-full flex max-md:flex-col max-md:gap-8 max-md:justify-center max-md:items-center max-md:mt-20'>
          {/* first half */}
          <div className=' w-1/2 h-full flex justify-center items-center max-md:w-full'>
            <Image 
              src={elipse} 
              alt='image-webDetails'
              width={300}
              height={300}
            />
          </div>
          {/* Second half */}
          <div className='w-1/2 h-full flex justify-center items-center max-md:w-full'>
            <div className='flex flex-col gap-6 max-md:mx-14 max-md:gap-2'>
              <h3 className=' text-blue-900 text-2xl font-semibold max-md:text-xl'>Modern Workspace</h3>
              <div className=' mr-28 max-md:mr-0'>
                <p className='text-blue-900 text-lg max-md:text-base '>Step inside a modern and exciting workstation outfitted with ergonomic furniture, fast Wi-Fi, and cutting-edge technology. Our hotdesking hub is intended to increase productivity and creativity.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Amenities */}
        <div className=' w-full my-10 flex flex-row-reverse max-md:flex-col max-md:gap-8 max-md:justify-center max-md:items-center' >
          {/* first half */}
          <div className=' w-1/2 h-full flex justify-center items-center max-md:w-full'>
            <Image 
              src={elipse} 
              alt='image-webDetails'
              width={300}
              height={300}
            />
          </div>
          {/* Second half */}
          <div className='w-1/2 h-full flex justify-center items-center max-md:w-full'>
            <div className='flex flex-col gap-6 ml-28 max-md:mx-12'>
              <h3 className=' text-blue-900 text-2xl font-semibold max-md:text-xl'>Modern Workspace</h3>
              <div className=''>
                <p className='text-blue-900 text-lg max-md:text-base'>Book fully equipped meeting rooms on demand to ensure you have enough space for presentations, client meetings, or team collaboration.</p>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}
