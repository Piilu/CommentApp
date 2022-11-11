/*
  Warnings:

  - You are about to drop the `Comments` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `comment` to the `Entrys` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Entrys` ADD COLUMN `comment` LONGTEXT NOT NULL;

-- DropTable
DROP TABLE `Comments`;
