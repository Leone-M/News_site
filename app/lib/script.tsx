"use server";
import { news_interface } from './data_acces';
import { prisma } from './data_acces';

export async function post_req(form_data: FormData) {
  "use server";
  await fetch("http:localhost:3000/api/new_post", {method: "POST", body: form_data})
}

export default async function fetching_posts(news_arr: news_interface[]) {
  news_arr = []
  const posts_data: news_interface[] = await prisma.newsPost.findMany()
  posts_data.forEach(post => {
    news_arr.push(post)
  });
  return news_arr;
}