'use client';
import React, { useRef } from 'react'
import Button from '../../toplevelComponents/Button';
import { FaRegFileImage } from "react-icons/fa6";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useState } from 'react';
 
export default function Upload() {

  const dropStyle = "flex flex-col justify-center items-center border-2 border-dashed border-[#ACACAC] rounded-xl h-[225px] px-[80px] gap-4";

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
    setFiles(e.target.files)
  };
  // for selcting files in button its reference to input that is hidden
  const handleonClick = () => {
    inputRef.current.click()
  };

  const handleDeletingInitialUpload = (index:any) =>{
    setFiles(null)
  };
  
  // for server
  const handleUpload = () =>{

  };

  //if have files
  if (files) return (
    <div className='flex flex-col gap-4 justify-center'>
      
            {Array.from(files).map((file:any, index)=>(
              <div className='w-[386px] h-[75px] bg-white drop-shadow-md px-2 rounded-lg'>
                <div className='w-full h-full flex flex-row gap-2 justify-center items-center pr-3' >
                  <div className='flex w-2/12 h-full justify-center items-center'>
                    <FaRegFileImage className='text-5xl text-black' />
                  </div>
                  <div className='w-5/6 h-full flex flex-col justify-center gap-2'>
                    <div className='flex flex-row justify-between'>
                      <p className='text-base text-black' key={index}>{file.name}   ({file.size}kb)</p>
                      <MdOutlineDeleteForever className='text-xl text-red-600 cursor-pointer' onClick={() => handleDeletingInitialUpload(index)}/>
                    </div>
                    {/* for progress */}
                    <div className='h-[7px] w-full border overflow-hidden rounded-full'>
                      <div className='h-full bg-blue-500'
                      style={{
                        width: "10%"
                      }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
      
      <div className='flex justify-center'>
        <Button size='small' variant="primary" onClick={handleUpload} >Upload</Button>
      </div>
    </div>
  );
  
  //if no files
  return (
    <div className='h-full w-full flex justify-center items-center'>
      {!files && 
        <div className={dropStyle}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        >
          <h1 className='text-xl text-black'>Drag and Drop Here</h1>
          <p className=' text-base text-black'>or</p>
          <input 
          type="file" 
          multiple
          onChange={handleOnChanged}
          hidden
          ref={inputRef}
          />
          <Button 
          size='small' 
          variant="primary" 
          onClick={handleonClick}
          >
            Select files
          </Button>

        </div>

      }
    </div>
  )
}
