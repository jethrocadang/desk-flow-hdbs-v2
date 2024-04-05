import { Editor } from "@/components/desks/tabEditor";
import { Overview } from "@/components/desks/tabOverview";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DesksPage() {
  return (
    <div className=" p-5 h-full">
      <Tabs defaultValue="Overview" className="w-full h-full  ">
        <TabsList className="">
          <TabsTrigger value="Overview">Desk Overview</TabsTrigger>
          <TabsTrigger value="Editor">Desk Editor </TabsTrigger>
        </TabsList>
        <TabsContent value="Overview">
            <Overview/>
        </TabsContent>
        <TabsContent value="Editor">
            <Editor/>
        </TabsContent>
      </Tabs>
    </div>
  );
}
