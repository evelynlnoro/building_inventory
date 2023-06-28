"use client";

type OrderItemProps = {
  id: number;
  material: {
    id: number;
    nome: string;
    descricao: string;
    cor: string;
    marca: string;
  };
  idUsuario: string;
  quantidade: number;
  observacao: string;
  aprovadoEm: Date | null;
  aprovadoPor: string;
};

export function OrderItem({
  id,
  material,
  idUsuario,
  quantidade,
  observacao,
  aprovadoEm,
  aprovadoPor,
}: OrderItemProps) {
  return (
    <li className="flex gap-1 items-center">
      {material.nome}: {quantidade}
    </li>
  );
}
