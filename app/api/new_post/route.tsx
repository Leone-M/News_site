"use server";
import { prisma } from "@/app/lib/data_acces"
import { news_interface } from "@/app/lib/data_acces";
import { News_data } from "@/app/lib/data_acces"
import { title } from "process";

export default async function formHandler(data: { title: string, image_url: string, article: string, date: string }) {
  await prisma.newsPost.create({
    data: {
      title: data.title,
      image_url: data.image_url,
      article: data.article,
      date: data.date
    }
  })
}