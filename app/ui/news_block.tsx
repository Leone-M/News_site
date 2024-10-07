/* eslint-disable @next/next/no-document-import-in-page */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-var */
import { PathOrFileDescriptor, readFileSync, writeFileSync } from "fs";
import { prototype } from "module";
import jsonfile from "@/app/lib/news_data.json"
import { Html } from "next/document";
import path from "path";


// start from
export var products = [
  {
    title: "Cabbage",
    img_link: "https://i.playground.ru/i/pix/776621/image.jpg",
    text: "Anime...",
  },
  {
    title: "Carrot",
    img_link: "https://i.playground.ru/i/pix/776621/image.jpg",
    text: "5187818578128ridfnhBN(Qfji3oqjwf8ioj",
  },
  {
    title: "Potato",
    img_link: "https://i.playground.ru/i/pix/776621/image.jpg",
    text: "5187818578128ridfnhBN(Qfji3oqjwf8ioj",
  },
];

const nextjs_directory: string = process.cwd()
const data_json_directory: string = nextjs_directory + "/app/lib/news_data.json"

interface news_interface {
  title: string,
  img_link: string,
  article: string
}

// jsonfile.news.push({
//   title: "Test_adding",
//   img_link: "Test_img",
//   text: "test_texting"
// });
// writeFileSync(data_json_directory, JSON.stringify(jsonfile))


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
export default function NewsBlock() {
  // determines one news block and add if missing
  if (products.length > news_amount) {
    products.forEach((Block) => {
      news.push(
        <div>
          <div>
            <Title key="Title" title={Block.title} />
          </div>
          <div>
            <PreviewImage key="Image" image_url={Block.img_link} />
          </div>
          <div>
            <Article key="article" text={Block.text} />
          </div>
        </div>
      );
    });
    news_amount = products.length;
  }
  // returns all news in <div> block
  return <div>{news}</div>;
}
