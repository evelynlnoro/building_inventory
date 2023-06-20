import { prisma } from "@/app/db";
import Link from "next/link";

import { InventoryItem } from "@/app/components/InventoryItem";

function getInventory() {
  return prisma.produto.findMany();
}

export default async function InventoryList() {
  const items = await getInventory();

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Estoque</h1>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/new"
        >
          Novo
        </Link>
      </header>
      <ul className="pl-4">
        {items.map((item) => (
          <InventoryItem key={item.id} {...item} />
        ))}
      </ul>
    </>
  );
}
