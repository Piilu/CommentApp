/*
  Warnings:

  - Added the required column `entryDate` to the `Entrys` table without a default value. This is not possible if the table is not empty.
  - Made the column `updatedAt` on table `Entrys` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Entrys` ADD COLUMN `entryDate` DATETIME(3) NOT NULL,
    MODIFY `updatedAt` DATETIME(3) NOT NULL;
