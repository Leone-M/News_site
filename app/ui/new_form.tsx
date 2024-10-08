/* eslint-disable @next/next/no-document-import-in-page */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Html } from "next/document";
import { usePathname } from "next/navigation";
import { FormEvent } from "react";

export default function ApplicationButton() {
  async function createInvoice(form_data: FormData) {
  "use server";
  const raw_form_data = {
    title: form_data.get("title"),
    image_url: form_data.get("image_url"),
    article: form_data.get("article")
  }
  await fetch("http:localhost:3000/api", {method: "POST", body: form_data})
  }
  return (
    <div className=" grid-flow-col">
      <form className=" flex justify-evenly" action={createInvoice} method="post" id="post_form" target="_parent">
        <div className=" flex">
          <label className="" htmlFor="title">
          <input className=" bg-zinc-700" type="text" name="title" id="title" required/>
          </label>
        </div>
        <div className="flex">
          <label className="" htmlFor="image_url">
          <input className=" bg-zinc-700"type="text" name="image_url" id="image_url"  required/>
          </label>
        </div>
        <div className="flex">
          <label className="" htmlFor="article">
          <input className=" bg-zinc-700" type="text" name="article" id="article" required />
          </label>
        </div>
        <div className="flex">
          <button className=" bg-zinc-700 rounded-md border-4 border-zinc-700" type="submit" id="button" form="post_form">
            Make post
          </button>
        </div>
      </form>
    </div>
  );
}
