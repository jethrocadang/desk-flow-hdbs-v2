'use client';
import React from 'react'
import Image from "next/image";
import Button from '@/components/ui/toplevelComponents/Button';
import { GrLocation, GrPhone  } from "react-icons/gr";
import { LuMail } from "react-icons/lu";
import contact from '@/public/img/contactImg/Contacts.png';

export default function Contact() {
  return (
    <div>
      <div className='flex flex-row-reverse mt-28'>
        {/* Picture */}
        <div className='w-1/2 md:flex flex-col justify-end items-center hidden'>
          <div>
            {/* Image */}
            <Image 
            src={contact} 
            alt='sublogo-contacts'
            width={300}
            height={300}
            />
          </div>
          {/* other Contacts */}
          <div className=' pt-28'>
            <div className='flex flex-col gap-3'>
              <div className=' flex gap-3'>
                <GrLocation className='text-blue-900 font-extrabold text-2xl'/>
                <span className='text-black font-semibold text-sm'>McArthur Sampaloc, Apalit, Pampanga</span>
              </div>
              <div className=' flex gap-3'>
                <GrPhone className='text-blue-900 font-extrabold text-2xl'/>
                <span className='text-black font-semibold text-sm'>+639 7890 657 6789</span>
              </div>
              <div className=' flex gap-3'>
                <LuMail className='text-blue-900 font-extrabold text-2xl'/>
                <span className='text-black font-semibold text-sm'>hotdesk@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

         {/* Content */}
        <div className='w-full md:w-1/2'>
          {/* Header */}
          <div className=' mx-16'>
            <div className='flex flex-col gap-2'>
              <h1 className='text-blue-900 font-bold text-4xl'>Get In Touch</h1>
              <p className=' text-blue-900 font-normal text-xl'>We are here for you! How can we help?</p>
            </div>
            {/* Forms */}
            <div>
              <form action="" className='py-4 mt-4 flex flex-col gap-7'>
                {/* name */}
                <div className='flex flex-col gap-3'>
                  <label htmlFor="fullname" className='text-blue-900 font-medium text-lg'>Name</label>
                  <input type="text" id='fullname' placeholder='Name' className='text-black shadow-md border border-blue-900 py-4 rounded-xl px-3 bg-sky-50'/>
                </div>
                {/* Email */}
                <div className='flex flex-col gap-3'>
                  <label htmlFor="email" className='text-blue-900 font-medium text-lg'>Email</label>
                  <input type="email" id='email' placeholder='Email' className='text-black shadow-md border border-blue-900 py-4 rounded-xl px-3 bg-sky-50'/>
                </div>
                {/* message */}
                <div className='flex flex-col gap-3'>
                  <label htmlFor="message" className='text-blue-900 font-medium text-lg'>Message</label>
                  <textarea name="message" id="message" placeholder='Type your message....' className='text-black h-40 shadow-md border border-blue-900 py-4 rounded-xl px-3 bg-sky-50'></textarea>
                </div> 
                 {/*button*/}
                 <div className='mt-5'>
                  <div className='w-full h-14'>
                    <Button size='custom' variant="primary" type="submit" onClick={() => alert('Primary button clicked')}>
                    Submit
                    </Button>
                  </div> 
                 </div>
              </form>
            </div>
          </div>
        </div>
      </div>x
    </div>
  )
}
