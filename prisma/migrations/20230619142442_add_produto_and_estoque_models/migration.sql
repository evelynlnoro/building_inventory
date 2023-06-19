-- CreateTable
CREATE TABLE "Produto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "cor" TEXT,
    "marca" TEXT
);

-- CreateTable
CREATE TABLE "Estoque" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idProduto" INTEGER NOT NULL,
    "quantidade" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Estoque_idProduto_fkey" FOREIGN KEY ("idProduto") REFERENCES "Produto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Estoque_idProduto_key" ON "Estoque"("idProduto");
