/*
  Warnings:

  - You are about to drop the `NewsPost` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "NewsPost";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "newsPost" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "article" TEXT NOT NULL
);
