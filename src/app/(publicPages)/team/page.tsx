
'use client';
import React from 'react'
import Row1 from '@/components/ui/segments/segmentsForTeam/row1';
import Row2 from '@/components/ui/segments/segmentsForTeam/row2';

export default function Teams() {
 

  return (
    <div>
      {/* header */}
      <div>
       <div className=' mt-32 mb-12 max-md:mt-32 max-md:mb-7 duration-300'>
        <h1 className='text-blue-900 font-bold text-4xl text-center duration-300 max-md:text-3xl'>Meet the Team</h1>
       </div>

       {/* Teams Picture */}

       {/* firstrow */}
       <Row1 />
       
       {/* Second row */}
       <Row2 />


      </div>
    </div>
  )
}
