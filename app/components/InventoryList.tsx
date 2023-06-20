import { prisma } from "@/app/db";

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
      </header>
      <ul className="pl-4">
        {items.map((item) => (
          <InventoryItem key={item.id} {...item} />
        ))}
      </ul>
    </>
  );
}
