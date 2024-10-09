"use server";
import { prisma } from "@/app/lib/script"

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
  const data_base_ready_dict = new Object();
  for (let i = 0; i < keys.length; i++) {
    data_base_ready_dict[keys[i]] = values[i];
  }
  await prisma.newsPost.create({
    data: data_base_ready_dict
  })
}

export async function POST(request: Request) {
  console.log("REQUESTING POST");
  const content_type = request.headers.get("content-type")
  let chunks = [], decoder = new TextDecoder();
  for await (const chunk of request.body){
    chunks.push(decoder.decode(chunk))
  }
  const parsed_string: string = chunks[0]
  string_parser(content_type, parsed_string)
  console.log("FINISHED REQUESTING")
  return new Response()
}