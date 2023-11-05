/*
  Warnings:

  - Added the required column `categoryId` to the `SubCategory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SubCategory" ADD COLUMN     "categoryId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "SubCategory" ADD CONSTRAINT "SubCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
