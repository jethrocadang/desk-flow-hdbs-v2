import Image from "next/image";
import React from "react";
import Floor1 from "@/public/img/floor/floor1.png";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../shadcn/select";

export default function DeskOverview() {
  return (
    <div className=" h-full w-full flex flex-col justify-center items-center p-5 ">
      <div>
        <Select>
        <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
        </Select>
      </div>
      <div>
        <Image src={Floor1} alt="Floor Plan" height={1000} width={1000} />
      </div>
      <div></div>
    </div>
  );
}
