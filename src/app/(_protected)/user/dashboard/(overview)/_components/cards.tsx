import React from 'react'
import DashCards from "@/components/ui/dashCards"
import { LuUsers } from "react-icons/lu";
import { BsFillBoxFill } from "react-icons/bs";
import { GoGraph } from "react-icons/go";


export default function Cards() {
   

  return (
    <div className=" mt-10">
      {/* Cards for users */}
      <div className='flex flex-col gap-2'>
        <h2 className=' text-2xl font-bold'>Users</h2>
        <div className='flex flex-row justify-around'>
          <DashCards 
              title="Admins" 
              icon={<LuUsers className=' text-3xl' />}
              description="example lang" 
              count={8}
          />
          <DashCards 
              title="Floor Manager" 
              icon={<LuUsers className=' text-3xl' />}
              description="example lang" 
              count={3}
          />
          <DashCards 
              title="Employees" 
              icon={<LuUsers className=' text-3xl' />}
              description="example lang" 
              count={19}
          />
        </div>
      </div>

      {/* cards for bookings */}
      <div className='flex flex-col gap-2 mt-10'>
        <h2 className=' text-2xl font-bold'>Bookings</h2>
        <div className='flex flex-row justify-around'>
          <DashCards 
              title="Confirm" 
              icon={<BsFillBoxFill className=' text-3xl text-green-600' />}
              description="example lang" 
              count={8}
          />
          <DashCards 
              title="Pending " 
              icon={<BsFillBoxFill className=' text-3xl text-yellow-600' />}
              description="example lang" 
              count={3}
          />
          <DashCards 
              title="Cancelled" 
              icon={<BsFillBoxFill className=' text-3xl text-red-600' />}
              description="example lang" 
              count={19}
          />
        </div>
      </div>

      {/* cards for Desks */}
      <div className='flex flex-col gap-2 mt-10'>
        <h2 className=' text-2xl font-bold'>Desks</h2>
        <div className='flex flex-row justify-around'>
          <DashCards 
              title="Occupied" 
              icon={<GoGraph className=' text-3xl font-semibold text-green-600' />}
              description="example lang" 
              count={8}
          />
          <DashCards 
              title="Unoccupied" 
              icon={<GoGraph className=' text-3xl font-semibold text-yellow-600' />}
              description="example lang" 
              count={3}
          />
          <DashCards 
              title="Dissabled" 
              icon={<GoGraph className=' text-3xl font-semibold text-red-600' />}
              description="example lang" 
              count={19}
          />
        </div>
      </div>
    </div>
  )
}
