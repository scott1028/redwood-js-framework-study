/*
  Warnings:

  - You are about to drop the `Position` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Person" ADD COLUMN "label" TEXT;
ALTER TABLE "Person" ADD COLUMN "z1" INTEGER;
ALTER TABLE "Person" ADD COLUMN "z2" INTEGER;
ALTER TABLE "Person" ADD COLUMN "z3" INTEGER;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Position";
PRAGMA foreign_keys=on;
