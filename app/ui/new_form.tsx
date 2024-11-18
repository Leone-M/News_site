/* eslint-disable @next/next/no-document-import-in-page */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { Html } from "next/document";
import {post_req} from "@/app/lib/script"

export default function ApplicationButton() {
  return (
    <div className="">
      <form className="grid grid-flow-rows box-border p-4 border-4 border-transparent" method="post" id="post_form" target="_parent" action ={post_req}>
        <div className="">
          <div className="py-2">
            <label className="" htmlFor="title">
            <textarea className=" bg-zinc-700 max-h-6 min-h-6 max-w-120" rows={1} cols={60} name="title" id="title" required placeholder="Title of the post"/>
            </label>
          </div>
          <div className="py-2">
            <label className="" htmlFor="image_url">
            <textarea className=" bg-zinc-700 max-h-6 min-h-6 max-w-120" rows={1} cols={60} name="image_url" id="image_url" placeholder="Image url (optional)"/>
            </label>
          </div>
        </div>
        <div className="">
          <div className="py-2">
            <label className="" htmlFor="article">
            <textarea className=" bg-zinc-700 min-h-6" rows={15} cols={60} name="article" id="article" required placeholder="Text of the article"/>
            </label>
          </div>
          <div className="grid grid-flow-col auto-cols-auto">
            <label className="" htmlFor="date">
            <input className=" bg-zinc-700" type="date" name="date" id="date" required placeholder="Date"/>
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
  );
}
