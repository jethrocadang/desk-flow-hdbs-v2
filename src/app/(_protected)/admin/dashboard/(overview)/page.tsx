import { auth } from "auth";
import { Tab } from '@headlessui/react';
import DeskEdit from "@/components/ui/deskManage/deskEditor";
import Tabs from "@/components/ui/deskManage/tabs";

export default async function Page() {
    const session = await auth()
  return (
  <div>
      <div >
        <Tabs />
      </div>
  </div>
  )
;}
