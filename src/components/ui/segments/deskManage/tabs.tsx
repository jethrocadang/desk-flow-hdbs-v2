"use client";
import { Tab } from '@headlessui/react';
import DeskEdit from "@/components/ui/segments/deskManage/deskEditor";

export default function Tabs() {
    
  return (
  <div>
      <div className= 'px-10 mt-5'>
        <Tab.Group defaultIndex={0}>
          <Tab.List className="drop-shadow-md ">
            <Tab className="bg-[#ECF1FF] px-10 py-2 rounded-xl rounded-b-none focus:drop-shadow-md text-sm">Desk Overview</Tab>

            <Tab className="bg-[#DAE4FF] px-10 py-2 rounded-xl rounded-b-none  text-sm focus:drop-shadow-md">Desk Editor</Tab>
          </Tab.List>
          <Tab.Panels className="" >
            <Tab.Panel className=" rounded-tl-none rounded-xl bg-[#ECF1FF]  p-3 drop-shadow-md h-[620px]">
              
            </Tab.Panel>
            <Tab.Panel className=" rounded-tl-none rounded-xl bg-[#DAE4FF]  p-3 drop-shadow-md h-[620px]">
              <DeskEdit />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
     </div>
  </div>
  );
}
