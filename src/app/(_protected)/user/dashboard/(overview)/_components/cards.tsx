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
        <h2 className=' text-2xl font-bold'>Bookings</h2>
        <div className='flex flex-row justify-around'>
          <DashCards 
              title="Total Bookings" 
              icon={<BsFillBoxFill className=' text-3xl text-green-600' />}
              description="85% Up from yesterday" 
              count={400}
          />
          <DashCards 
              title="Pending" 
              icon={<BsFillBoxFill className=' text-3xl text-yellow-600' />}
              description="85% Up from yesterday" 
              count={3}
          />
          <DashCards 
              title="Cancelled" 
              icon={<BsFillBoxFill className=' text-3xl text-red-600' />}
              description="85% Up from yesterday" 
              count={19}
          />
        </div>
      </div>
    
    </div>
  )
}
