import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export interface news_interface {
  title: string | undefined,
  image_url: string | undefined,
  article: string | undefined
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

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })