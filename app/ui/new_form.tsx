/* eslint-disable @next/next/no-document-import-in-page */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Html } from "next/document";
import { usePathname } from "next/navigation";
import { FormEvent } from "react";

export default function ApplicationButton() {
  async function post_req(event: Event) {
    "use server";
    event.preventDefault()
    event.target?.addEventListener("formdata", (ev) => async (ev) => {
      await fetch("http:localhost:3000/api/new_post", {method: "POST", body: ev.formData})
    })
  }
  return (
    <div className=" grid-flow-col">
      <form className=" flex justify-evenly" method="post" id="post_form" target="_parent">
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
          <input onSubmit={post_req(event)} className=" bg-zinc-700" type="text" name="article" id="article" required />
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
