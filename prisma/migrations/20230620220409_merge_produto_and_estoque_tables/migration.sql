/*
  Warnings:

  - You are about to drop the `Estoque` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `quantidade` to the `Produto` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Estoque_idProduto_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Estoque";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Produto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "cor" TEXT,
    "marca" TEXT,
    "quantidade" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Produto" ("cor", "createdAt", "descricao", "id", "marca", "nome", "updatedAt") SELECT "cor", "createdAt", "descricao", "id", "marca", "nome", "updatedAt" FROM "Produto";
DROP TABLE "Produto";
ALTER TABLE "new_Produto" RENAME TO "Produto";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
