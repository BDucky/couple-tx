/*
  Warnings:

  - Added the required column `value` to the `Technical_specification` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `technical_specification` ADD COLUMN `value` DOUBLE NOT NULL;
