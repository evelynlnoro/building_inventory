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

  async function changeUserRole(userId: string, desiredRole: string) {
    "use server";

    clerkClient.users.updateUser(userId, {
      privateMetadata: {
        role: desiredRole,
      },
    });
  }

  return (
    <>
      <ul>
        {users.map((user) => {
          const userRole = user?.privateMetadata["role"] as string;
          return (
            <UserItem
              key={user.id}
              userId={user.id}
              userName={`${user.firstName} ${user.lastName}`}
              userRole={userRole}
              changeUserRole={changeUserRole}
            />
          );
        })}
      </ul>
    </>
  );
}
