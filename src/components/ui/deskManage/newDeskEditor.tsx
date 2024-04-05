"use client";

import { Fragment, useState } from "react";
import { Menu } from "@headlessui/react";
import { Button } from "@/components/ui/shadcn/button";
import { GiDesk } from "react-icons/gi";
import floo1 from "@/public/img/floor/floor1.png";
import Image from "next/image";
import Floor from "./floor";
import Floor1 from "@/public/img/floor/floor1.png";

import { Input } from "../shadcn/input";
import { AddFloor } from "./addFloorButton";
import EditDesk from "./editDesk";
import { Department } from "./departments";
import AddDesk from "./addDesk";

export default function DeskEditor() {
  const tabs = [
    {
      title: "floor 1",
      content: (
        <Floor>
          <Image
            src={floo1}
            className="h-full w-full bg-cover bg-center  relative"
            alt=""
          />
        </Floor>
      ),
    },
    {
      title: "floor 2",
      content: (
        <div className="w-full h-full flex justify-center items-center gap-[2px]">
          <p className="text-base text-black">
            There is no existing floor, you can add one{" "}
          </p>
          <p className="text-base text-black">to add and manage a desk.</p>
        </div>
      ),
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  //for adding desk
  const [showDeskContainer, setShowDeskContainer] = useState(false);
  //add Floor
  const [addfloor, setAddFloor] = useState(false);

  const handleShowDesk = () => {
    setShowDeskContainer(true);
    setAddFloor(false);
  };

  return (
    <div className=" h-full w-full mx-auto p-4">
      <div className="flex flex-row gap-2">
        <Menu as="div" className="relative text-left">
          <div className="w-[180px]">
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
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    } block px-4 py-2 text-sm`}
                    onClick={() => {
                      setActiveTab(index);
                    }}
                  >
                    {tab.title}
                  </div>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
        {/* adddesk */}
        <Button
          className="bg-[#606DE3] px-4 h-9 text-sm hover:bg-[#9292DD] gap-2"
          onClick={handleShowDesk}
        >
          <GiDesk className="text-xl" />
          Add Desk
        </Button>
        <AddFloor />
      </div>
      <div className="p-5 h-full">
        <div className="  w-full h-full hidden  sm:flex flex-row justify-center items-center gap-5 ">
          <AddDesk floorImageUrl={Floor1} />
          {/* <Image src={Floor1} alt="Floor Plan" height={1000} width={1000} /> */}
          <div className="flex flex-col">
            <EditDesk />
            <Department />
          </div>
        </div>
      </div>
    </div>
  );
}
