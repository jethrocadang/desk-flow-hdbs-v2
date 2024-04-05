"use client";

import { Fragment, useState } from "react";
import { Menu } from "@headlessui/react";
import { Button } from "@/components/ui/shadcn/button";
import { GiDesk } from "react-icons/gi";
import floo1 from "@/public/img/floor/floor1.png";
import Desk from "./desk";
import EditDesk from "./editDesk";
import Image from "next/image";
import Upload from "./upload";
import Floor from "./floor";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/shadcn/select";



import { Input } from "../shadcn/input";
import { AddFloor } from "./addFloorButton";

export default function DeskEdit() {
  const tabs = [
    {
      title: "choose floor",
      content: (
        <div className="w-full h-full flex justify-center items-center gap-[2px]">
          <p className="text-base text-black">
            There is no existing floor, you can add one{" "}
          </p>
          <p className="text-base text-black">to add and manage a desk.</p>
        </div>
      ),
    },
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
    {
      title: "floor 3",
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
  const [showDeskEdit, setShowDeskEdit] = useState(false);
  //add Floor
  const [addfloor, setAddFloor] = useState(false);

  const handleAddFloor = () => {
    setAddFloor(true);
  };

  const handleShowDesk = () => {
    setShowDeskContainer(true);
    setAddFloor(false);
  };

  const handleClickEditDesk = () => {
    setShowDeskEdit(true);
  };

  const handleClickEditDeskChange = () => {
    setShowDeskEdit(false);
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
      {addfloor ? (
        <div className="h-[530px] w-full flex flex-col justify-center items-center pt-1">
          <div className="h-full w-full flex flex-row items-center justify-center">
            <div className="w-full flex justify-center items-center">
              <div className="w-[37.5rem] h-[28.125rem] flex justify-center">
                <Upload />
              </div>
            </div>
          </div>
        </div>
      ) : (
        //  add desk
        <div className="h-[530px] w-full flex flex-col justify-center items-center pt-1">
          <div
            className={`h-full w-full flex flex-row ${
              showDeskContainer
                ? " gap-10 justify-center"
                : "items-center justify-center"
            }`}
          >
            <div
              className={` ${
                showDeskContainer
                  ? "w-[25rem] relative"
                  : "w-full flex justify-center items-center"
              }`}
            >
              <div
                className={` ${
                  showDeskContainer
                    ? "w-[25rem] h-[18.75rem] drop-shadow-md"
                    : "w-[37.5rem] h-[28.125rem] flex justify-center"
                } drop-shadow-md`}
              >
                {tabs[activeTab].content}
              </div>

              {/* for Department */}
              <div
                className={`absolute w-full h-[190px] bg-white rounded-md bottom-0 right-0 drop-shadow-md ${
                  !showDeskEdit && "hidden"
                }`}
              >
                <div className="w-full h-full p-2 flex flex-row gap-1">
                  <form action="">
                    <div className="w-full flex flex-col gap-1">
                      <p className="text-sm text-black">Department Settings</p>
                      <div className="w-full flex flex-row gap-1">
                        <Select>
                          <SelectTrigger className="w-[150px] h-[35px] border border-black">
                            <SelectValue placeholder="Department name" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Department name</SelectLabel>
                              <SelectItem value="Department1">
                                Department1
                              </SelectItem>
                              <SelectItem value="Department2">
                                Department2
                              </SelectItem>
                              <SelectItem value="Department3">
                                Department3
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <Button className=" h-[35px] bg-[#6358DC] hover:bg-[#8177f1]">
                          {" "}
                          Add
                        </Button>
                      </div>
                    </div>
                    <div className="mt-1">
                      <label htmlFor="name" className="text-sm">
                        Department Name
                      </label>
                      <Input
                        type="text"
                        name="name"
                        placeholder="department name"
                        className="px-2 border bg-white border-black w-[210px] h-[35px]"
                      />
                    </div>
                    <div className="flex flex-row gap-2 mt-2">
                      <Button className="bg-[#D54F54] px-4 py-1 rounded-lg h-[35px]">
                        Cancel
                      </Button>
                      <Button className="bg-[#479B7C] px-4 py-1 rounded-lg h-[35px]">
                        Save
                      </Button>
                    </div>
                  </form>
                  <div className="h-full ml-2">
                    <p className="text-sm text-black">Color</p>
                    <div className="bg-[#C4C4C4] h-[140px] w-[150px] mt-1"></div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={` ${
                showDeskContainer
                  ? "relative h-full w-4/12 flex justify-center "
                  : "hidden"
              }`}
            >
              {showDeskEdit ? <EditDesk /> : <Desk />}
              <Button
                className={`bg-[#479B7C] px-3 py-1 rounded-md absolute right-2 bottom-2 ${
                  showDeskEdit && "hidden"
                }`}
                onClick={handleClickEditDesk}
              >
                Next
              </Button>
              <Button
                className={`bg-[#D54F54] px-3 py-1 rounded-md absolute left-2 bottom-2 ${
                  !showDeskEdit && "hidden"
                }`}
                onClick={handleClickEditDeskChange}
              >
                Back
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
