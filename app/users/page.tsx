import { currentUser, clerkClient } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import UserItem from "@/app/users/components/UserItem";

export default async function usersPage() {
  const user = await currentUser();
  const userRole = user?.privateMetadata["role"] as string;
  if (userRole != "ADMIN") redirect("/materials");

  const users = await clerkClient.users.getUserList({
    orderBy: "-created_at",
  });

  return (
    <>
      <ul>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </>
  );
}
