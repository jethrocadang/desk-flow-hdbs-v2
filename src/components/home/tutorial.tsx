import React from 'react'
import Image from 'next/image'
import imgWebDetails from '@/public/img/homepage/img-webDetails.png';


export default function Tutorial() {
  return (
    <div className='w-full bg-indigo-50 dark:bg-slate-900'>
      <div className='container py-10'>
        <div className='w-full h-full my-10'>
          <div className='pt-10 max-md:pt-5'>
            <h1 className='text-4xl font-bold dark:text-white	text-blue-900  text-center'>How it works</h1>
          </div>
          <div className='flex flex-row-reverse w-full h-full max-md:flex-col max-md:justify-center max-md:items-start'>
            {/* first half */}
            <div className='w-1/2 h-full flex justify-center items-center max-md:w-full'>
              <div className=''>
                {/* picture */}
                <Image 
                src={imgWebDetails} 
                alt='image-webDetails'
                width={500}
                height={500}
                />
              </div>
            </div>

            {/* second half */}
            <div className='w-1/2 h-full flex flex-col gap-14 justify-center max-md:w-full max-md:gap-5 max-md:px-8'>
              
              <div className=' ml-28 max-md:ml-0'>
                <div className='flex flex-col gap-8 max-md:gap-2'>
                  <div className=' flex'>
                    <div className=' w-11 h-12 max-md:w-10 max-md:h-11 rounded-full bg-blue-900'>
                      <p className=' text-white text-2xl p-2 max-md:text-xl'>01</p>
                    </div>
                    <div className='pt-3 pl-2 mr-24 max-md:mr-0 max-md:pt-0'>
                      <p className='dark:text-sky-700 text-blue-900 text-xl font-semibold pb-2'>Book a Desk</p>
                      <p className='dark:text-white text-blue-900 text-md max-sm:text-base '>Employees can reserve a desk in accordance with their preferred schedule and select the most suitable desk for their needs.  </p>
                    </div>
                  </div>

                  <div className=' flex'>
                    <div className=' w-11 h-12 max-md:w-10 max-md:h-11  rounded-full bg-blue-900'>
                      <p className=' text-white text-2xl p-2 max-md:text-xl'>02</p>
                    </div>
                    <div className='pt-3 pl-3 mr-24'>
                      <p className='text-blue-900 text-xl font-semibold pb-3 dark:text-sky-700'>Available Desk</p>
                      <p className='dark:text-white text-blue-900 text-md max-sm:text-base '>Users can reserve their preferred desk by checking which desks are available. </p>
                    </div>
                  </div>

                  <div className=' flex'>
                    <div className=' w-11 h-12 rounded-full bg-blue-900 max-md:w-10 max-md:h-11 '>
                      <p className=' text-white text-2xl p-2 max-md:text-xl'>03</p>
                    </div>
                    <div className='pt-3 pl-3 mr-24'>
                      <p className='text-blue-900 text-xl font-semibold pb-3 dark:text-sky-700'>Lorem Ipsum</p>
                      <p className='dark:text-white text-blue-900 text-md max-sm:text-base '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
                    </div>
                  </div>
                  
                 
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  )
}
