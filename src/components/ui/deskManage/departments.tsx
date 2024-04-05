import { Input } from "../shadcn/input";
import { Button } from "@/components/ui/shadcn/button";
import { ScrollArea } from "../shadcn/scroll-area";
import { Separator } from "../shadcn/separator";

const tags = [
  "Department 1",
  "Department 2",
  "Department 1",
  "Department 2",
  "Department 1",
  "Department 2",
  "Department 1",
  "Department 2",
];

export const Department = () => {
  return (
    <div className="bg-white w-full h-full p-5 my-5  border rounded-md">
      <div className="w-full  flex flex-col gap-1">
        <p className="text-sm text-black">Department Settings</p>
        <div className="h-48 w-full flex flex-col gap-1">
          <ScrollArea className=" w-full rounded-md border">
            <div className="p-4">
              {tags.map((tag) => (
                <>
                  <div key={tag} className="text-sm">
                    {tag}
                  </div>
                  <Separator className="my-2" />
                </>
              ))}
            </div>
          </ScrollArea>
          <Button className=" h-[35px] bg-[#6358DC] hover:bg-[#8177f1]">
            Add
          </Button>
        </div>
      </div>
      <form action="" className=" w-full">
        <div className="mt-1">
          <label htmlFor="name" className="text-sm">
            Department Name
          </label>
          <Input
            type="text"
            name="name"
            placeholder="department name"
            className="w-full px-2 border bg-white border-black h-[35px]"
          />
        </div>
        <div className="flex flex-row gap-2 mt-2">
          <Button className="flex-1 bg-[#D54F54] px-4 py-1 rounded-lg h-[35px]">
            Cancel
          </Button>
          <Button className="flex-1 bg-[#479B7C] px-4 py-1 rounded-lg h-[35px]">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};
