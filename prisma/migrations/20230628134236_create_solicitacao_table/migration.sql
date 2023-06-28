-- CreateTable
CREATE TABLE "Solicitacao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idMaterial" INTEGER NOT NULL,
    "idUsuario" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "aprovadoEm" DATETIME NOT NULL,
    "aprovadoPor" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Solicitacao_idMaterial_fkey" FOREIGN KEY ("idMaterial") REFERENCES "Material" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Solicitacao_idMaterial_idUsuario_key" ON "Solicitacao"("idMaterial", "idUsuario");
