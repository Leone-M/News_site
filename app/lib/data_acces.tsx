import { PrismaClient } from '@prisma/client'
export const prisma = new PrismaClient()

export class News_data implements news_interface{
    "id": number;
    "title": string;
    "image_url": string;
    "article": string;
  };
  
  export interface news_interface {
    id: number
    title: string,
    image_url: string,
    article: string
  }