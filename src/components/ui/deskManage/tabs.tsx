"use client";
import { Tab } from "@headlessui/react";
import DeskEdit from "@/components/ui/deskManage/deskEditor";
import DeskOverview from "./deskOverview";
import DeskEditor from "./newDeskEditor";

export default function Tabs() {
  return (
    <div className="h-dvh p-11 pb-20 mb-16">
      <Tab.Group defaultIndex={0}>
        <Tab.List className="drop-shadow-md ">
          <Tab className="bg-[#ECF1FF] px-10 py-2 rounded-xl rounded-b-none focus:drop-shadow-md text-sm">
            Desk Overview
          </Tab>
          <Tab className="bg-[#DAE4FF] px-10 py-2 rounded-xl rounded-b-none  text-sm focus:drop-shadow-md">
            Desk Editor
          </Tab>
        </Tab.List>
        <Tab.Panels className="h-full">
          <Tab.Panel className=" rounded-tl-none rounded-xl bg-[#ECF1FF]  p-5 drop-shadow-md h-full ">
            <DeskOverview />
          </Tab.Panel>
          <Tab.Panel className=" rounded-tl-none rounded-xl bg-[#DAE4FF] drop-shadow-md h-full  ">
            <DeskEditor/>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
