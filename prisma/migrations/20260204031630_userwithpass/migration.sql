/*
  Warnings:

  - Added the required column `passwordwithHash` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "passwordwithHash" TEXT NOT NULL;
