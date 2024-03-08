"use client";
import { BsBoxes, BsPersonVideo3, BsGlobeAmericas, BsChevronRight  } from "react-icons/bs";
import { MdOutlineEditLocationAlt } from "react-icons/md";
import { PiPuzzlePieceLight } from "react-icons/pi";




export default function Benifits(){
  

  return(
    <div className="bg-white">
      <div className="mt-10">
      <h1 className='text-4xl font-bold	text-blue-900  text-center'>Benefits of using our hotdesk</h1>
      </div>
      <div className=" flex flex-wrap gap-32 justify-center items-center mx-16 py-14  ">
        <div className=" w-56 h-60   flex flex-col justify-center items-center border border-blue-900 rounded-lg">
          <div className= "bg-sky-100 p-4 rounded-full">
            <BsBoxes className='text-slate-800	 text-3xl' />
          </div>
          <p className='text-slate-800	 text-s font-semibold pt-3'>Space Optimization</p>
          <p className='text-black text-xs text-center pt-3 px-3'>Uses office space more efficiently by letting workers reserve desks as needed.</p>
        </div>
        <div className="w-56 h-60 flex flex-col justify-center items-center border border-blue-900 rounded-lg">
          <div className= "bg-sky-100 p-4 rounded-full">
            <MdOutlineEditLocationAlt className='text-slate-800	 text-3xl'/>
          </div>
          <p className='text-slate-800	text-s font-semibold pt-3 '>Workspace Map</p>
          <p className='text-black text-xs text-center pt-3 px-3'>Displaying up an interactive map so workers can locate and reserve their desk with ease.</p>
        </div>
        <div className="w-56 h-60 flex flex-col justify-center items-center border border-blue-900 rounded-lg">
          <div className= "bg-sky-100 p-4 rounded-full">
            <PiPuzzlePieceLight  className='text-slate-800	 text-3xl' />
          </div>
          <p className='text-slate-800	 text-s font-semibold pt-1'>Flexibility for<br />Employees</p>
          <p className='text-black text-xs text-center pt-1 px-3'>Employees are free to select a workspace that best suits their needs and interests.</p>
        </div>
        
      </div>
      <div className=" flex flex-wrap gap-32 justify-center items-center mx-16 py-4  ">
        <div className=" w-56 h-60  flex flex-col justify-center items-center border border-blue-900 rounded-lg">
          <div className= "bg-sky-100 p-4 rounded-full">
            <BsPersonVideo3 className='text-slate-800	 text-3xl' />
          </div>
          <p className='text-slate-800	 text-s font-semibold text-center pt-3'>Supports Remote <br />Work</p>
          <p className='text-black text-xs text-center pt-3 px-3'>Allows employees to reserve desks when needed, making accommodations for those who work remotely but occasionally visit the office.</p>
        </div>
        <div className=" w-56 h-60 flex flex-col justify-center items-center border border-blue-900 rounded-lg">
          <div className= "bg-sky-100 p-4 rounded-full">
            <BsGlobeAmericas className='text-slate-800	 text-3xl'  />
          </div>
          <p className='text-slate-800	 text-s font-semibold pt-4'>Environmental <br />Sustainability</p>
          <p className='text-black text-xs text-center pt-3 px-2'>By using space and resources more effectively, businesses can lessen their environmental impact.</p>
        </div>
      </div>
    </div>


  )

}