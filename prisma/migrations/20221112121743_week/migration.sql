/*
  Warnings:

  - Added the required column `week` to the `Entrys` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Entrys` ADD COLUMN `week` INTEGER NOT NULL;
