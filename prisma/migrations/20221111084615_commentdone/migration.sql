/*
  Warnings:

  - Added the required column `commentAdded` to the `Entrys` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Entrys` ADD COLUMN `commentAdded` BOOLEAN NOT NULL;
