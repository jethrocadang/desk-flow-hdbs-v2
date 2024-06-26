import { getAllUsers } from "@/data/user";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/column";


export default async function UsersPage() {
  const users = await getAllUsers();

  return (
    <div className=" px-32 pt-32">
      <div className="text-2xl font-bold tracking-wider">Manage Users</div>
        <DataTable columns={columns} data={users}/>
    </div>
  );
}
