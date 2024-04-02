'use client';
import { Button } from "../shadcn/button";
import { Input } from "../shadcn/input";
import Status from './status'
import MultiSelect from "./multiselect";
import { SelectDepartment } from "./selectDepartment";
import Image from "next/image";
import { useRef, useState } from "react";

const EditDesk = () => {

  const [files, setFiles] = useState(null);
  const inputRef = useRef(null);
  const handleDragOver = (e:any) => {
   e.preventDefault()
  };
  //for drops of files
  const handleDrop = (e:any) =>{
    e.preventDefault()
    setFiles(e.dataTransfer.files)
  };
  //for input
  const handleOnChanged = (e:any) => {
    e.preventDefault()
    setFiles(e.target.files)
  };
  // for selcting files in button its reference to input that is hidden
  const handleonClick = (e:any) => {
    e.preventDefault()
    inputRef.current.click()
  };
  
  const handleSubmit = () => {

  }

  return (
    <div className="flex flex-col bg-white p-5 h-full w-[500px] items-center rounded-md drop-shadow-md">
      <div className="flex flex-col w-full">
       <h2 className="text-lg font-bold mb-2 text-[#2F3783] text-center">Desk Edit</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="text-sm">Desk  Name</label>
          <Input type="text" name="name" className="px-2 border bg-white border-black h-[28px]" />
          <p className="text-sm text-black mt-1">Desk Status</p>
           <Status />
           <div className="flex flex-col mt-1">
            <label htmlFor="message" className='text-black text-sm'>Additional Information (optional)</label>
            <textarea name="message" id="message" placeholder='Input text here' className='text-black h-16 w-full shadow-md border border-black py-2 rounded-lg px-3 text-xs'></textarea>
           </div>
           <div className="w-full mt-1">
            <p className="text-sm text-black">Desk Amenities</p>
            <MultiSelect />
           </div>
           <div className="w-full mt-1">
            <p className="text-sm text-black">Desk Amenities</p>
            <SelectDepartment />
           </div>

           {/* upload */}
           <div className=" w-full h-20 mt-1 flex justify-start items-center">
              <div>
              {!files ?
                <div className=" flex flex-row gap-2 justify-center items-center">
                <div className="border border-black h-[60px] w-[60px] rounded-md">
                 
                </div>
                <div className="flex flex-col gap-3"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                >
                 <p className="italic text-xs text-black">Please upload an image for the desk.</p>
                  <input 
                  type="file" 
                  multiple
                  onChange={handleOnChanged}
                  hidden
                  ref={inputRef}
                  />
                  <div className="flex flex-row gap-3">
                    <Button className=" h-4 w-[100px] px-5 bg-white hover:bg-blue-400 border border-blue-600 text-black rounded-md"
                    onClick={handleonClick}
                    >
                    Choose file
                    </Button>
                    <p className="text-xs text-black">No file Chosen</p>
                  </div>

                </div>
                </div>
                :
                <div>
                  {Array.from(files).map((file:any, index)=>(
                    <div className=" flex flex-row gap-2 justify-center items-center">
                    <div className="border border-black h-[60px] w-[60px] rounded-md">
                      <Image src={file} className='h-full w-full bg-cover bg-center  relative' alt="" />
                    </div>
                    <div className="flex flex-col gap-3"
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    >
                     <p className="italic text-xs text-black">Please upload an image for the desk.</p>
                      <input 
                      type="file" 
                      multiple
                      onChange={handleOnChanged}
                      hidden
                      ref={inputRef}
                      />
                      <div className="flex flex-row gap-3">
                        <Button className=" h-4 w-[100px] px-5 bg-white hover:bg-blue-400 border border-blue-600 text-black rounded-md"
                        onClick={handleonClick}
                        >
                        Choose file
                        </Button>
                        <p className="text-xs text-black" key={index}>{file.name}</p>
                      </div>
    
                    </div>
                    </div>
                  ))}
                </div>

              }
            </div>
           </div>




           

        </form>
      </div>
    </div>
  );
};
export default EditDesk;