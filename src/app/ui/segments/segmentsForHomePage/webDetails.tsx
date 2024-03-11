import React from 'react'
import Image from 'next/image'
import bgImage from '@/public/img/homepage/bg-webDetails.png';
import imgWebDetails from '@/public/img/homepage/img-webDetails.png';

export default function WebDetails() {
  return (
    <div>
      <div className=' h-screen relative'>
        <Image
            className="h-screen w-full bg-cover bg-center  relative"
            src={bgImage}
            alt=""
          />
        <div className='w-full h-screen absolute top-0 max-md:mt-5'>
          <div className='flex w-full h-full max-md:flex-col max-md:justify-center max-md:items-center'>
            {/* first half */}
            <div className='w-1/2 h-full flex justify-center items-center max-md:w-full'>
              <div>
                <Image 
                src={imgWebDetails} 
                alt='image-webDetails'
                width={400}
                height={400}
                />
              </div>
            </div>

            {/* second half */}
            <div className='w-1/2 h-full flex flex-col gap-14 justify-center max-md:w-full max-md:gap-5 max-md:px-12'>
              <h1 className="text-4xl text-blue-700 font-bold ">Desk<span className='text-blue-500'>Flow</span> </h1>
              <div className=' mr-28 max-md:mr-0'>
                <p className='text-blue-900 text-lg max-md:text-base'>What image comes to mind when you think of an office? Perhaps an open area with desks, meeting rooms, a lunchroom, and perhaps lounge seating? Or a large structure with one office or cubicle for each person, separate floors for each department , a nice lobby, and a canteen? Or the more modern approach, multiple settings for different types of work blended with meeting rooms for various types of meetings?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
