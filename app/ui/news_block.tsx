import { readFileSync } from "fs";
import { prototype } from "module";
import { Html } from "next/document";

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

// var json_data = readFileSync(
//   "News/app/lib/news_data.json",
//   "utf-8"
// );

// anime geijgedioj

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
            <Title title={Block.title} />
          </div>
          <div>
            <PreviewImage image_url={Block.img_link} />
          </div>
          <div>
            <Article text={Block.text} />
          </div>
        </div>
      );
    });
    news_amount = products.length;
  }
  // returns all news in <div> block
  return <div>{news}</div>;
}
