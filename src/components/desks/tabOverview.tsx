"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Overview = () => {


  return (
    <div className="bg-sky-300 h-full p-5">
      <div className="  flex lg:flex-row flex-col" >
        <Select onValueChange={(value) => (console.log("value:" , value))} >
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
    </div>
  );
};
