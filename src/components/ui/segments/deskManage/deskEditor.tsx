"use client";
import { Fragment, useState } from 'react';
import { Menu } from '@headlessui/react';
import { Button } from '@/components/ui/shadcn/button';
import { GiDesk } from "react-icons/gi";
import { PiStackFill } from "react-icons/pi";
import Upload from './upload';

export default function DeskEdit() {
  const tabs = [
    { 
      title: 'choose floor', 
      content: 
      <>
        <p className='text-base text-black'>There is no existing floor, you can add one </p>
        <p className='text-base text-black'>to add and manage a desk.</p>
      </>
    },
    { 
      title: 'floor 1',
      content: <Upload />
    },
    { 
      title: 'floor 2', 
      content: <Upload />// files droping or upload
    },
    { 
      title: 'floor 3', 
      content: <Upload />
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className=" h-full w-full mx-auto p-4">
      <div className='flex flex-row gap-2'>
      <Menu as="div" className="relative text-left">
        <div className='w-[180px]'>
          <Menu.Button className="inline-flex w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {tabs[activeTab].title}
          </Menu.Button>
        </div>
        <Menu.Items className="absolute right-0 z-10 w-[180px] mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {tabs.map((tab, index) => (
            <Menu.Item key={index}>
              {({ active }) => (
                <div
                  className={`${
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                  } block px-4 py-2 text-sm`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.title}
                </div>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
      {/* adddesk */}
       <Button className='bg-[#606DE3] px-4 h-9 text-sm hover:bg-[#9292DD] gap-2'>
        <GiDesk className='text-xl'/>
          Add Desk
       </Button>
       <Button className='bg-[#606DE3] px-4 h-9 text-sm hover:bg-[#9292DD] gap-2'>
        <PiStackFill className='text-xl'/>
          Add Floor
       </Button>

      </div>
      <div className='h-[470px] w-full flex flex-col justify-center items-center'>
        <div className=' flex flex-col justify-center items-center'> 
          {tabs[activeTab].content}
        </div>
      </div>
      
    </div>
  );
};

