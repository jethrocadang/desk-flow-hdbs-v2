import ProfileIndex from "@/components/profile";
import { getUserById } from "@/data/user";
import { currentUser } from "@/lib/auth";

export default async function page() {
  const data = await currentUser();
  const user = await getUserById(data.id);

  return (
    <div>
      <ProfileIndex user={user} />
    </div>
  );
}
