import React from 'react';
import Image from "next/image";
import { useCurrentUser } from "@/hooks/useCurrentUser";


export default function editProfile() {
  const user = useCurrentUser();
  return (
    <div className='container pt-7'>
      <div>
        <div className='w-full flex items-center justify-center'>
          <div className=' w-40 h-40 border border-black bg-slate-500 rounded-full flex justify-center items-center'>
            <Image src={user?.image} width={40} height={40} className=" w-full bg-cover bg-center rounded-full" alt="" />
          </div> 
        </div>
        {/* form for */}
        <div className=' container py-8 px-10 flex flex-col gap-8'>
          {/* last name & first Name */}
          <div className='flex flex-row gap-14'>
            <div className='w-full flex flex-col'>
              <label htmlFor="firstName" className=' text-base font-semibold'>First Name</label>
              <input type="text" disabled name='firstName' value={user?.firstName} className='border bg-sky-50 border-violet-900 rounded-md w-full p-3'/>
            </div>
            <div className='w-full flex flex-col'>
              <label htmlFor="lastName" className=' text-base font-semibold'>Last Name</label>
              <input type="text" disabled name='lastName' value={user?.lastName} className='border bg-sky-50 border-violet-900 rounded-md w-full p-3'/>
            </div>
          </div>

          {/* email */}
          <div className='w-full flex flex-col'>
            <label htmlFor="email"  className=' text-base font-semibold'>Email</label>
            <input type="email" disabled name='email' value={user?.email} className='border bg-sky-50 border-violet-900 rounded-md w-full p-3'/>
          </div>

          {/* Password */}
          <div className='w-full flex flex-col'>
            <label htmlFor="Password" className=' text-base font-semibold'>Password</label>
            <input type="password" disabled name='password' value="heelo143" className='border bg-sky-50 border-violet-900 rounded-md w-full p-4'/>
          </div>
        </div>

      </div> 
    </div>
  )
}
