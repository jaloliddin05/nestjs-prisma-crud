/*
  Warnings:

  - Added the required column `productId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Made the column `count` on table `Order` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "productId" TEXT NOT NULL,
ALTER COLUMN "count" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
