"use client"
import { useState } from "react"
import React from "react"
import formHandler from "../api/new_post/route"

export default function ApplicationButton({ props }: { props: { newPost: boolean, setNewPost: Function } }) {
  const [title, setTitle] = useState("")
  const [image_url, setImage_url] = useState("")
  const [article, setArticle] = useState("")
  const [date, setDate] = useState("")

  async function formSubmit(e: any) {
    props.setNewPost(true)
    e.preventDefault()
    await formHandler({
      title: title,
      image_url: image_url,
      article: article,
      date: date
    })
  }

  return (
    <div className="">
      <form className="grid grid-flow-rows box-border p-4 border-4 border-transparent" id="post_form" onSubmit={formSubmit}>
        <div className="">
          <div className="py-2">
            <label className="" htmlFor="title">
              <textarea value={title} onChange={(e) => { setTitle(e.target.value) }} className=" bg-zinc-700 max-h-6 min-h-6 max-w-120" rows={1} cols={60} name="title" id="title" required placeholder="Title of the post" />
            </label>
          </div>
          <div className="py-2">
            <label className="" htmlFor="image_url">
              <textarea value={image_url} onChange={(e) => { setImage_url(e.target.value) }} className=" bg-zinc-700 max-h-6 min-h-6 max-w-120" rows={1} cols={60} name="image_url" id="image_url" placeholder="Image url (optional)" />
            </label>
          </div>
        </div>
        <div className="">
          <div className="py-2">
            <label className="" htmlFor="article">
              <textarea value={article} onChange={(e) => { setArticle(e.target.value) }} className=" bg-zinc-700 min-h-6" rows={15} cols={60} name="article" id="article" required placeholder="Text of the article" />
            </label>
          </div>
          <div className="grid grid-flow-col auto-cols-auto">
            <label className="" htmlFor="date">
              <input value={date} onChange={(e) => { setDate(e.target.value) }} className=" bg-zinc-700" type="date" name="date" id="date" required placeholder="Date" />
            </label>

            <div className="">
              <button className=" w-32 bg-zinc-700 rounded-md border-4 border-zinc-700" type="submit" id="button" form="post_form">
                Make post
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
