"use client"
import NewsBlock from "./ui/news_block";
import ApplicationButton from "./ui/new_form";
import { useState } from "react";
import React from "react";

export default function Home() {
  const [newPostFlag, setNewPostFlag] = useState(true)

  return (
    <main className="grid bg-zinc-900">
      <div className="grid grid-cols-2">
        <div>
          <NewsBlock props={{ newPost: newPostFlag, setNewPost: setNewPostFlag }}></NewsBlock>
        </div>
        <ApplicationButton props={{ newPost: newPostFlag, setNewPost: setNewPostFlag }}></ApplicationButton>
      </div>
    </main>
  )
}
