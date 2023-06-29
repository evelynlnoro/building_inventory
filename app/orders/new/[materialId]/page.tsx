import Link from "next/link";
import { redirect } from "next/navigation";
import { prisma } from "@/app/db";
import { currentUser } from "@clerk/nextjs";

async function createItem(data: FormData) {
  "use server";

  // validations
  const idMaterial = +(data.get("idMaterial")?.valueOf() || 0);
  if (
    typeof idMaterial !== "number" ||
    !prisma.material.findUnique({ where: { id: idMaterial } })
  ) {
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
  params: { materialId: string };
}) {
  const user = await currentUser();
  if (!user) return redirect("/sign-in");

  const material = await prisma.material.findUnique({
    where: { id: +params.materialId },
  });
  if (!material) throw new Error("Material inválido");

  return (
    <>
      <form action={createItem} className="flex gap-2 flex-col">
        <h1 className="text-2xl">Cadastro de solicitação</h1>
        <p>
          Solicitante: {user.firstName} {user.lastName}
        </p>
        <p>Material necessário: {material.nome}</p>
        <label>
          Quantidade:
          <input
            name="quantidade"
            type="number"
            min={0}
            defaultValue={0}
            className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100 ml-2"
            required
          />
        </label>
        <label>
          Observação:
          <input
            type="text"
            name="observacao"
            className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100 ml-2"
          />
        </label>
        <input
          type="number"
          name="idMaterial"
          value={params.materialId}
          hidden={true}
        />
        <input type="text" name="idUsuario" value={user.id} hidden={true} />
        <div className="flex gap-1 justify-end">
          <Link
            href="/materials"
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
