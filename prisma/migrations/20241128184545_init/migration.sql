-- CreateTable
CREATE TABLE "newsPost" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "article" TEXT NOT NULL,
    "date" TEXT NOT NULL,

    CONSTRAINT "newsPost_pkey" PRIMARY KEY ("id")
);
