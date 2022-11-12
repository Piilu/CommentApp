/*
  Warnings:

  - You are about to drop the column `email` on the `Entrys` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Entrys_email_key` ON `Entrys`;

-- AlterTable
ALTER TABLE `Entrys` DROP COLUMN `email`;
