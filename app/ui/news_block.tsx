/* eslint-disable @next/next/no-document-import-in-page */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-var */
import {news_interface} from "@/app/lib/data_acces"
import post_fetcher from "@/app/lib/script"
import Image from "next/image";

var news_posts: news_interface[] = []

// arr of news blocks
var news: any[] = [];
// to control news updates

// news preview image
function PreviewImage({ image_url }: { image_url: string }) {
  return <Image width={500} height={500} alt="PostPreview" src={image_url}/>;
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
  news_posts = await post_fetcher(news_posts)
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
            <PreviewImage key="Image" image_url={Block.image_url} />
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
