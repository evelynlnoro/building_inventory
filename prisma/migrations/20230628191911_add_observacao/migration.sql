/*
  Warnings:

  - Added the required column `observacao` to the `Pedido` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pedido" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idMaterial" INTEGER NOT NULL,
    "idUsuario" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "observacao" TEXT NOT NULL,
    "aprovadoEm" DATETIME,
    "aprovadoPor" TEXT NOT NULL DEFAULT '',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Pedido_idMaterial_fkey" FOREIGN KEY ("idMaterial") REFERENCES "Material" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Pedido" ("aprovadoEm", "aprovadoPor", "createdAt", "id", "idMaterial", "idUsuario", "quantidade", "updatedAt") SELECT "aprovadoEm", "aprovadoPor", "createdAt", "id", "idMaterial", "idUsuario", "quantidade", "updatedAt" FROM "Pedido";
DROP TABLE "Pedido";
ALTER TABLE "new_Pedido" RENAME TO "Pedido";
CREATE UNIQUE INDEX "Pedido_idMaterial_idUsuario_key" ON "Pedido"("idMaterial", "idUsuario");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
