import {news_interface} from "@/app/lib/data_acces"
import post_fetcher from "@/app/lib/script"
import Image from "next/image";

var news_posts: news_interface[] = [];
var news: any[] = [];

function PreviewImage({ image_url }: { image_url: string }) {
  return <Image className="object-scale-down h-72 w-72 object-center" width={500} height={500} alt="PostPreview" src={image_url}/>;
}

function Article({ text }: { text: string }) {
  return <p className="text-ellipsis text-justify overflow-hidden indent-6"> {text}</p>;
}

function Title({ title }: { title: string }) {
  return <h1 className="text-xl text-center p-2">{title}</h1>;
}
function Date({ date }: { date: string }) {
  return <p className="text-sm text-gray-400 text-end py-2">{date}</p>;
}

export default async function NewsBlock() {
  news_posts = await post_fetcher(news_posts)
  // determines one news block and add if missing
  if (news_posts.length > news.length) {
    var news_blocks: any[] = [];
    news_posts.forEach((Block) => {
      var c = Block.id
      news_blocks.push(
        <div className="grid grid-flow-row auto-rows-min box-border p-4 border-4 border-transparent" id={c.toString()}>
            {/*Title and Date*/}
            <div className="grid grid-flow-col">
              <Title key="Title" title={Block.title}/>
              <Date key="Date" date={Block.date} />
            </div>
            {/*Image and Text*/}
            <div className="grid grid-cols-2 justify-items-center max-h-72">
              <PreviewImage key="Image" image_url={Block.image_url} />
              <Article key="article" text={Block.article} />
            </div>
            {/*Link to full post*/}
            <div className="grid justify-center py-4">
              <button className=" bg-zinc-700 rounded-sm border-4 border-transparent">
                <a href={"/post/" + c}>
                  See full post here
                </a>
              </button>
            </div>
        </div>
      );
    });
    news = news_blocks;
  }
  // returns all news in <div> block
  return <div className="grid box-border border-x-4 border-transparent">{news}</div>;
}
