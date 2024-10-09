"use server";
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from "@/app/lib/script"
import { consumers } from 'stream';

export async function string_parser(){

}

export async function POST(request) {
  console.log(request.headers)
  console.log(request.headers.get("Content-type"));
  const stream = request.body;
  const reader = stream.getReader();
  var parsed_string: string = "";
  let chunks = [], decoder = new TextDecoder();
  reader.read().then(function processData({done, value}) {
    if (done) {
      console.log(decoder.decode(concat(chunks)));
      return;
    }
    chunks.push(value);
    reader.read().then(processData);
  })

  function concat(chunks) {
    return chunks.reduce((acc, chunk) => new Uint8Array([...acc, ...chunk]), new Uint8Array());
  }

  // const raw_form_data = {
  //   title: req_parsed.get("title"),
  //   image_url: req_parsed.get("image_url"),
  //   article: req_parsed.get("article")
  // }
  console.log(parsed_string)
  return new Response()
}

// export async function handler (
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//     if (req.method === "POST") {
//         console.log("HEREIS REQUEST START" + req + "HEREIS REQUEST END")
//         // const raw_form_data = {
//         //     title: req.get("title"),
//         //     image_url: request.get("image_url"),
//         //     article: request.get("article")
//         //   }
//         // prisma.newsPost.create({
//         //     data: raw_form_data
//         // })
//         return res
//     }
// }