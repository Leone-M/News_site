"use client"
import { news_interface } from "@/app/lib/data_acces"
import post_fetcher from "@/app/lib/script"
import React, { useState, useEffect } from "react"
import Image from "next/image"

function PreviewImage({ image_url }: { image_url: string }) {
  return <Image className="object-scale-down h-72 w-72 object-center" width={500} height={500} alt="PostPreview" src={image_url} />
}

function Article({ text }: { text: string }) {
  return <p className="text-ellipsis text-justify overflow-hidden indent-6"> {text}</p>
}

function Title({ title }: { title: string }) {
  return <h1 className="text-xl text-center p-2">{title}</h1>
}
function Date({ date }: { date: string }) {
  return <p className="text-sm text-gray-400 text-end py-2">{date}</p>
}

export default function NewsBlock({ props }: { props: { newPost: boolean, setNewPost: Function } }) {
  const [news, setNews] = useState<any[]>([])

  useEffect(() => {
    async function fetchNews() {
      const response: news_interface[] = await post_fetcher()
      console.log(response.length)
      if (response.length > news.length) {
        let temp_news = []
        response.forEach((Block) => {
          var c = Block.id
          temp_news.push(
            <div className="grid grid-flow-row auto-rows-min box-border p-4 border-4 border-transparent" id={c.toString()}>
              {/*Title and Date*/}
              <div className="grid grid-flow-col">
                <Title key="Title" title={Block.title} />
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
          )
          setNews(temp_news)
        })
      }
      props.setNewPost(false)
    }
    if (props.newPost == true) {
      fetchNews()
    }
  }, [props.newPost])

  return <div className="grid box-border border-x-4 border-transparent">{news}</div>
}