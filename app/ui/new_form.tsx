/* eslint-disable @next/next/no-document-import-in-page */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { Html } from "next/document";

function AddingData() {
  return ( NaN
  //   {
  //   title: "test_add",
  //   img_link: "https://i.playground.ru/i/pix/776621/image.jpg",
  //   text: "test_add_text",
  // }
);
}

export default function ApplicationButton() {
  return (
    <div>
      <button key="New_button" type="button" onClick={AddingData}>
        Add data
      </button>
    </div>
  );
}
