"use client";

type UserItemProps = {
  userId: string;
  userName: string;
  userRole: string;
  changeUserRole: any;
};

export default function UserItem({
  userId,
  userName,
  userRole,
  changeUserRole,
}: UserItemProps) {
  const displayUserRole =
    userRole === "ADMIN"
      ? "Administrador"
      : userRole === "APPROVER"
      ? "Aprovador"
      : "Usuário";

  function makeApprover() {
    changeUserRole(userId, "APPROVER");
  }

  function makeAdmin() {
    changeUserRole(userId, "ADMIN");
  }

  return (
    <li>
      {userName} ({displayUserRole}){" "}
      {displayUserRole === "Usuário" ? (
        <button onClick={makeApprover}>Tornar Aprovador</button>
      ) : (
        ""
      )}{" "}
      {displayUserRole !== "Administrador" ? (
        <button onClick={makeAdmin}>Tornar Administrador</button>
      ) : (
        ""
      )}
    </li>
  );
}
