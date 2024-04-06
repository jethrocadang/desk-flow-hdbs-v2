import Image from "next/image";
import Map from "@/public/floormap.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DeskForm } from "./deskForm";
import { DepartmentForm } from "./departmentForm";
import { AmenitiesForm } from "./amenitiesForm";
import { Button } from "../ui/button";
import { AddFloorButton } from "./addFloorButton";

export const Editor = () => {
  return (
    <div className="h-full p-5">
      <div className=" w-full h-full  flex flex-col">
        <div className=" flex p-2 gap-5">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <AddFloorButton/>
        </div>
        <div className=" w-full h-full  flex lg:flex-row flex-col"> 
          <div className="my-auto">
            <Image
              src={Map}
              width={1000}
              alt="Floor Map"
              className="rounded-lg"
            />
          </div>
          <div className="h-full flex flex-col grow p-5 justify-center">
            <DeskForm />
            <DepartmentForm />
            <AmenitiesForm/>
          </div>
        </div>
      </div>
    </div>
  );
};
