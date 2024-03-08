'use client';
import React from 'react'
import Image from 'next/image'
import Button from '@/app/ui/toplevelComponents/Button'
import headerImage from '@/public/img/homepage/Company-amico1.png'

export default function Header() {
  return (
    <div>
       <div className="bg-white max-lg:my-11 max-md:pt-12">
        <div className="h-screen w-full max-lg:mt-28 flex max-lg:flex-col-reverse" >
          <div className='w-1/2 flex flex-col ml-20  justify-center items-start max-lg:w-full max-lg:ml-0 max-lg:px-10'>
            <div className=' mr-5 max-lg:mr-0'>
             <h1 className="text-5xl font-semibold	text-blue-900 max-lg:text-3xl" >
               Elevate your workspace
               experience!
             </h1>
            </div>
             <div className="mb-8 mt-5 mr-40 max-lg:mr-10">
                <p className="text-zinc-500 text-sm">Boost your workday with simply hotdesk bookings, where efficiency and adaptability coexist and each seat is a step closer to achievement. Greetings from a more intelligent workflow!</p>
             </div>
             <div>
              <Button size='large' variant="primary"  onClick={() => alert('Primary button clicked')}>
                    Book Now
              </Button>
             </div>
          </div>
          <div className='w-1/2 flex justify-center items-center max-lg:w-full max-lg:justify-center'>
            <Image
                  className=" pt-24"
                  src={headerImage}
                  alt=""
                  width={500}
                  height={500}
                />
          </div>
        </div>
      </div>
    </div>
  )
}
