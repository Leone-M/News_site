/* eslint-disable @next/next/no-document-import-in-page */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-var */
import { PathOrFileDescriptor, readFileSync, writeFileSync } from "fs";
import { prototype } from "module";
import jsonfile from "@/app/lib/news_data.json"
import { Html } from "next/document";
import path from "path";
import { fetcher } from "@/app/lib/script";
import data_fetch from "@/app/lib/script"
import {news_interface} from "@/app/lib/script"

var news_posts: news_interface[] = []

async function fetching_posts() {
  news_posts = []
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
  return <img className=" " src={image_url}/>;
}

// news text
function Article({ text }: { text: string }) {
  return <p className="">{text}</p>;
}

// news title
function Title({ title }: { title: string }) {
  return <h2 className="">{title}</h2>;
}

// Group of news blocks
export default async function NewsBlock() {
  await fetching_posts()
  // determines one news block and add if missing
  if (news_posts.length > news.length) {
    var news_blocks: any[] = [];
    news_posts.forEach((Block) => {
       news_blocks.push(
        <div className=" flex flex-col items-center border-b-2 border-emerald-900">
          <div className="">
            <Title key="Title" title={Block.title}/>
          </div>
          <div className="">
            <PreviewImage className="" key="Image" image_url={Block.image_url} />
          </div>
          <div>
            <Article key="article" text={Block.article} />
          </div>
        </div>
      );
    });
    news = news_blocks;
  }
  // returns all news in <div> block
  return <div>{news}</div>;
}
