"use client";

type InventoryItemProps = {
  id: number;
  nome: string;
  descricao: string;
  cor: string;
  marca: string;
  quantidade: number;
};

export function InventoryItem({
  id,
  nome,
  descricao,
  cor,
  marca,
  quantidade,
}: InventoryItemProps) {
  return (
    <li className="flex gap-1 items-center">
      {nome}: {quantidade}
    </li>
  );
}
