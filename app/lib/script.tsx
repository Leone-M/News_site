import { PrismaClient } from '@prisma/client'
export const prisma = new PrismaClient()

export interface news_interface {
  title: string,
  image_url: string,
  article: string
}

export async function fetcher() {
  //
}

export default async function main() {
  // ... you will write your Prisma Client queries here
    const posts = await prisma.newsPost.findMany()
    const result: news_interface[] | null = [];
    posts.forEach(post => {
      result.push(post)
    });
    return result;
}