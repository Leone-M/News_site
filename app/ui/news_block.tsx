/* eslint-disable @next/next/no-document-import-in-page */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-var */
import { PathOrFileDescriptor, readFileSync, writeFileSync } from "fs";
import { prototype } from "module";
import jsonfile from "@/app/lib/news_data.json"
import { Html } from "next/document";
import path from "path";
import data_fetch from "@/app/lib/script"
import {news_interface} from "@/app/lib/script"

var news_posts: news_interface[] = []

async function fetching_posts() {
  var posts_data: news_interface[] = await data_fetch()
  posts_data.forEach(post => {
    news_posts.push(post)
  });
}

// arr of news blocks
export var news: any[] = [];
// to control news updates
var news_amount = 0;

// news preview image
function PreviewImage({ image_url }: { image_url: string }) {
  return <img src={image_url} />;
}

// news text
function Article({ text }: { text: string }) {
  return <p>{text}</p>;
}

// news title
function Title({ title }: { title: string }) {
  return <h2>{title}</h2>;
}

// Group of news blocks
export default async function NewsBlock() {
  await fetching_posts()
  // determines one news block and add if missing
  if (news.length >= news_amount) {
    news_posts.forEach((Block) => {
      console.log(Block)
      news.push(
        <div>
          <div>
            <Title key="Title" title={Block.title} />
          </div>
          <div>
            <PreviewImage key="Image" image_url={Block.image_url} />
          </div>
          <div>
            <Article key="article" text={Block.article} />
          </div>
        </div>
      );
    });
    news_amount = news_posts.length;
  }
  // returns all news in <div> block
  return <div>{news}</div>;
}
