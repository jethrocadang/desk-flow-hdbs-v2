"use client";
import React from 'react'
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/shadcn/toggle-group"



export default function Status() {
  return (
    <div>
      <ToggleGroup variant='outline' type="single" className=' h-4'>
        <ToggleGroupItem value="available" className='h-4 w-[110px] border border-black rounded-md'>
          <p className='text-xs'>Available</p>
        </ToggleGroupItem>
        <ToggleGroupItem value="disable" className='h-4 w-[110px] border border-black rounded-md '>
          <p className='text-xs'>Disable</p>
        </ToggleGroupItem>
        <ToggleGroupItem value="maintenance" className='h-4 w-[105px] border border-black rounded-md '>
          <p className='text-xs'>Maintenance</p>
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}
