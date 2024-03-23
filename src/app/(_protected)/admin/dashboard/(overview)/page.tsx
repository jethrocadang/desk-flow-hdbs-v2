import { auth } from "auth";
import { Tab } from '@headlessui/react';
import DeskEdit from "@/components/ui/segments/deskManage/deskEditor";
import Tabs from "@/components/ui/segments/deskManage/tabs";

export default async function Page() {
    const session = await auth()
  return (
  <div>
    admin {JSON.stringify(session)}
      <div>
        <Tabs />
      </div>
  </div>);
}
