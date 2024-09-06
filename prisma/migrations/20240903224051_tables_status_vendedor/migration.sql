-- CreateTable
CREATE TABLE "PEDIDO_STATUS" (
    "status" TEXT NOT NULL PRIMARY KEY,
    "descricao" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "VENDEDOR" (
    "id_vendedor" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "dt_cadastro" DATETIME NOT NULL,
    "email" TEXT NOT NULL
);
