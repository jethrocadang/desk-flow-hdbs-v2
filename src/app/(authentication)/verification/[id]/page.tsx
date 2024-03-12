import React from 'react'
import Image from 'next/image'
import frameSignup from '@/public/img/authImage/frameSignup.png';
import hotDog from '@/public/img/authImage/hotdog.png';
import ImageSignup from '@/public/img/authImage/imgSignup.png';
import OtpInput from '@/app/ui/segments/segmentForAuth/OtpInput';
import Link from 'next/link'
import { getUserById } from '@/data/user';

export default function page({ params }: { params: { id: string } }) {

  const id = params.id
  const user = getUserById(id)


  return (
    <div>
      <div className='md:relative md:h-screen bg-white w-full '>
        {/* background Image */}
        <Image src={frameSignup} className='max-md:hidden md:absolute md:right-0 md:top-0 md:z-0 h-screen w-80' alt="" />
        <Image src={hotDog} className='md:hidden absolute -z-0 bottom-0 left-0' alt="" />
    
         <div className='max-md:mx-8  md:h-full md:w-full z-10'>
          <div className='md:flex md:flex-col gap-20'>
            {/* Header */}
            <div className=' mt-6 md:mt-10 md:ml-16'>
              <Link href="/">
                <h2 className="text-2xl text-blue-700 font-bold ">Desk<span className='text-blue-500'>Flow</span> </h2>
              </Link>
            </div>
            <div className='md:hidden mt-4'>
              <hr className='border border-gray-200'/>
            </div>
            <div className='h-full w-full md:flex'>
             
              {/* First half */}
              <div className=' w-full h-full mt-10 md:w-1/2 pt-5 md:ml-5 md:flex md:items-center'>
                <div className=' w-full md:mx-10 z-10'>
                  <div className='flex flex-col-reverse justify-center items-center gap-5 md:flex md:justify-center md:items-center '>
                    <div className='flex flex-col gap-9 mb-10'>
                      <h2 className='text-4xl text-blue-900 font-bold  '>Verify your email</h2>
                      <p className='text-xs text-slate-400 text-center md:mt-6 '>Please enter the 6-digit code sent to your email.</p>
                    </div>
                    <div className='md:hidden -mt-8'>
                      {/* picture */}
                      <Image 
                      src={ImageSignup} 
                      alt='image-webDetails'
                      width={300}
                      height={300}
                      />
                    </div>
                  </div>
                  
                  {/* inputs segments folder */}
                  <div className='mt-3 w-full flex flex-col'>
                    {/* segments folder */}
                    <OtpInput />
                  </div>
                  <div className='mt-14 flex justify-center'>
                  <span className='text-black text-xs'>Didn&apos;t get a code?</span><Link href="/" className='text-xs text-blue-900 hover:text-blue-500 font-semibold'>Resend</Link>
                
                  </div>
                  <br />
                </div>
                <br />
              </div>
              
              {/* Second half */}
              <div className='hidden md:w-1/2 md:flex justify-center items-center z-50'>
                <div className=''>
                    {/* picture */}
                    <Image 
                    src={ImageSignup} 
                    alt='image-webDetails'
                    width={500}
                    height={500}
                    />
                  </div>
              </div>
            </div>
          </div>
         </div>
      </div>
    </div>
  )
}
