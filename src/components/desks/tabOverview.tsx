import Image from "next/image";
import Map from "@/public/floormap.png";
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
        <Image
          src={Map}
          width={1000}
          alt="1000"
          className="rounded-lg mx-auto"
        />
      </div>
    </div>
  );
};
