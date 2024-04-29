import { auth, signOut } from "auth";
import UserDashboard from "./_components/main";

export default async function Page() {
  const session = await auth();

  return (
    <>
    <UserDashboard/>
    </>
  );
}
