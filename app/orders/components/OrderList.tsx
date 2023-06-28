import { prisma } from "@/app/db";

import { OrderItem } from "@/app/orders/components/OrderItem";

function getOrders() {
  return prisma.solicitacao.findMany({ include: { material: true } });
}

export default async function OrderList() {
  const items = await getOrders();

  return (
    <>
      <section>
        <ul className="pl-4">
          {items.map((item) => (
            <OrderItem key={item.id} {...item} />
          ))}
        </ul>
      </section>
    </>
  );
}
