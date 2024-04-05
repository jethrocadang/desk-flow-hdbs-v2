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

export const Editor = () => {
  return (
    <div className="bg-sky-300 h-full p-5">
      <div className=" w-full h-full  flex flex-col">
        <div className="bg-pink-300">
          <Select>
            <SelectTrigger className="w-[180px] border border-black">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className=" w-full h-full  flex lg:flex-row flex-col"> 
          <div className=" bg-green-300">
            <Image
              src={Map}
              width={1000}
              alt="Floor Map"
              className="rounded-lg"
            />
          </div>
          <div className="h-full bg-purple-300 flex flex-col grow p-5">
            <DeskForm />
            <DepartmentForm />
            <AmenitiesForm/>
          </div>
        </div>
      </div>
    </div>
  );
};
