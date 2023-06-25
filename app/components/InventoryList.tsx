import { prisma } from "@/app/db";

import { InventoryItem } from "@/app/components/InventoryItem";

function getInventory() {
  return prisma.produto.findMany();
}

export default async function InventoryList() {
  const items = await getInventory();

  return (
    <>
      <section>
        <ul className="pl-4">
          {items.map((item) => (
            <InventoryItem key={item.id} {...item} />
          ))}
        </ul>
      </section>
    </>
  );
}
