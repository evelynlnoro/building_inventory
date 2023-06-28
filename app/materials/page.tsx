import InventoryList from "@/app/materials/components/InventoryList";
import Link from "next/link";

export default async function MaterialsPage() {
  return (
    <>
      <Link
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        href="/materials/new">
        Novo material
      </Link>
      <h1>Materiais</h1>
      <InventoryList />
    </>
  );
}
