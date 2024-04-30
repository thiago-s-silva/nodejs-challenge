-- CreateTable
CREATE TABLE "Fabrica" (
    "id" BIGSERIAL NOT NULL,
    "descripcion" VARCHAR(255) NOT NULL,

    CONSTRAINT "Fabrica_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Productos" (
    "id" BIGSERIAL NOT NULL,
    "descripcion" VARCHAR(255) NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "existencias" BIGINT NOT NULL,
    "idFab" BIGINT NOT NULL,

    CONSTRAINT "Productos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Productos" ADD CONSTRAINT "Productos_idFab_fkey" FOREIGN KEY ("idFab") REFERENCES "Fabrica"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
