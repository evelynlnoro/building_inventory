import Link from "next/link";
import { redirect } from "next/navigation";
import { prisma } from "@/app/db";
import { currentUser } from "@clerk/nextjs";

async function createItem(data: FormData) {
  "use server";

  // validations
  const idMaterial = +(data.get("idMaterial")?.valueOf() || 0);
  if (typeof idMaterial !== "number" || idMaterial < 1) {
    throw new Error("Material inválido");
  }

  const quantidade = +(data.get("quantidade")?.valueOf() || 0);
  if (typeof quantidade !== "number" || quantidade < 0) {
    throw new Error("Quantidade inválida");
  }

  const idUsuario = data.get("idUsuario")?.valueOf();
  if (typeof idUsuario !== "string" || idUsuario.length < 1) {
    throw new Error("Usuario inválido");
  }

  const observacao = data.get("observacao")?.valueOf();
  if (typeof observacao !== "string") {
    throw new Error("Usuario inválido");
  }

  // creation
  await prisma.pedido.create({
    data: { idMaterial, idUsuario, quantidade, observacao },
  });
  redirect("/orders");
}

export default async function NewOrderPage({
  params,
}: {
  params: { productId: string };
}) {
  const user = await currentUser();
  if (!user) return redirect("/sign-in");

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Cadastro de solicitação</h1>
      </header>
      <form action={createItem} className="flex gap-2 flex-col">
        <p>
          Solicitante: {user.firstName} {user.lastName}
        </p>
        {/* <input
          type="text"
          name="nome"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
          required
        /> */}
        <h3>Material necessário:</h3>
        {/* <input
          type="text"
          name="material"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
          required
        /> */}
        <label>
          Quantidade:
          <input
            name="quantidade"
            type="number"
            min={0}
            defaultValue={0}
            className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
            required
          />
        </label>
        <label>
          Observação:
          <input
            type="text"
            name="observacao"
            className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
          />
        </label>
        <input
          type="number"
          name="idMaterial"
          value={params.productId}
          hidden={true}
        />
        <input type="text" name="idUsuario" value={user.id} hidden={true} />
        <div className="flex gap-1 justify-end">
          <Link
            href="javascript:history.back();"
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Cancelar
          </Link>
          <button
            type="submit"
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Criar
          </button>
        </div>
      </form>
    </>
  );
}
