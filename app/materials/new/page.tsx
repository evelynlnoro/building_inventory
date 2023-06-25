import { prisma } from "@/app/db";
import { redirect } from "next/navigation";
import Link from "next/link";

async function createItem(data: FormData) {
  "use server";

  // validations
  const nome = data.get("nome")?.valueOf();
  if (typeof nome !== "string" || nome.length === 0) {
    throw new Error("Nome inválido");
  }
  const descricao = data.get("descricao")?.valueOf();
  if (typeof descricao !== "string" || descricao.length === 0) {
    throw new Error("Descrição inválida");
  }

  const cor = data.get("cor")?.valueOf();
  if (typeof cor !== "string" && typeof cor !== "undefined") {
    throw new Error("Cor inválida");
  }

  const marca = data.get("marca")?.valueOf();
  if (typeof marca !== "string" && typeof marca !== "undefined") {
    throw new Error("Marca inválida");
  }

  const quantidade = +(data.get("quantidade")?.valueOf() || 0);
  if (typeof quantidade !== "number" || quantidade < 0) {
    throw new Error("Quantidade inválida");
  }

  // creation
  await prisma.produto.create({
    data: { nome, descricao, cor, marca, quantidade },
  });
  redirect("/");
}

export default function Page() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Novo Produto</h1>
      </header>
      <form action={createItem} className="flex gap-2 flex-col">
        <input
          type="text"
          name="nome"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <input
          type="text"
          name="descricao"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <input
          type="text"
          name="cor"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <input
          type="text"
          name="marca"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <input
          type="number"
          name="quantidade"
          min={0}
          defaultValue={0}
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <div className="flex gap-1 justify-end">
          <Link
            href=".."
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
}