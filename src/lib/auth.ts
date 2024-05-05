import { auth } from "auth";

export const currentUser = async () => {
  const session = await auth();

  return session?.user;
};

export const currentRole = async () => {
  const session = await auth();

  const ADMIN = session?.user?.role === "ADMIN";
  const FLOOR_MANAGER = session?.user?.role === "FM";
  const USER = session?.user?.role === "USER";

  return { ADMIN, FLOOR_MANAGER, USER };
};
