"use server";
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from "@/app/lib/script"
import { consumers } from 'stream';

export async function string_parser(content_type: string, parsed_body: string){
  content_type = "--" + content_type.replace("multipart/form-data; boundary=", "");
  let blocks: string[] = parsed_body.split(content_type);
  blocks = blocks.slice(2, -1)
  const parsed_blocks: string[] = [];
  blocks.forEach(block => {
    block = block.replaceAll("--", "")
    block = block.replaceAll("\n", "")
    block = block.trim()
    block = block.replace("Content-Disposition: form-data; name=", "").replace("\"", "").replace("\"", "").replace("\r", "")
    parsed_blocks.push(block)
  });
  const keys: string[] = [];
  const values: string[] = [];
  parsed_blocks.forEach(block =>{
    let bufarr: string[] = [];
    bufarr = block.split("\r");
    keys.push(bufarr[0]);
    values.push(bufarr[1]);
  })
  var data_base_ready_dict = new Object();
  for (let i = 0; i < keys.length; i++) {
    data_base_ready_dict[keys[i]] = values[i];
  }
  await prisma.newsPost.create({
    data: data_base_ready_dict
  })
}

export async function POST(request) {
  console.log("REQUESTING POST");
  const stream = request.body;
  const content_type = request.headers.get("content-type")
  // const reader = stream.getReader();
  let chunks = [], decoder = new TextDecoder();
  for await (const chunk of request.body){
    chunks.push(decoder.decode(chunk))
  }
  const parsed_string: string = chunks[0]
  // parsed_string = reader.read().then(function processData({done, value}) {
  //   if (done) {
  //     let parsed_string = (decoder.decode(concat(chunks)));
  //     return;
  //   }
  //   chunks.push(value);
  //   reader.read().then(processData);
  // })

  // function concat(chunks) {
  //   return chunks.reduce((acc, chunk) => new Uint8Array([...acc, ...chunk]), new Uint8Array());
  // }
  string_parser(content_type, parsed_string)
  console.log("FINISHED REQUESTING")
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