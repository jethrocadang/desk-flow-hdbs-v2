import { auth, signOut } from "auth";

export default async function Page() {
  const session = await auth();

  return (
    <div>
      user {JSON.stringify(session)}{" "}
      <form
        action={async () => {
          "use server";
          await signOut()
        }}
      ><button type="submit"> signout</button></form>
    </div>
  );
}
