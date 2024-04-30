-- CreateTable
CREATE TABLE "Factory" (
    "id" BIGSERIAL NOT NULL,
    "descripcion" VARCHAR(255) NOT NULL,

    CONSTRAINT "Factory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" BIGSERIAL NOT NULL,
    "descripcion" VARCHAR(255) NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "existencias" BIGINT NOT NULL,
    "idFab" BIGINT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_idFab_fkey" FOREIGN KEY ("idFab") REFERENCES "Factory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
