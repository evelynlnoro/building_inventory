"use client";

import type { User } from "@clerk/nextjs/dist/types/server";

type UserItemProps = {
  user: User;
};

export default function UserItem({ user }: UserItemProps) {
  const userRole = user?.privateMetadata["role"] as string;
  const displayUserRole =
    userRole === "ADMIN"
      ? "Administrador"
      : userRole === "APPROVER"
      ? "Aprovador"
      : "Usuário";

  return (
    <li>
      {user.firstName} {user.lastName} ({displayUserRole})
    </li>
  );
}
