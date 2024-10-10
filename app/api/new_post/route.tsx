"use server";
import { prisma } from "@/app/lib/data_acces"
import { news_interface } from "@/app/lib/data_acces";
import { News_data } from "@/app/lib/data_acces"

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
  const data_base_ready: news_interface = new News_data;
  data_base_ready.title = values[0]
  data_base_ready.image_url = values[1]
  data_base_ready.article = values[2]
  await prisma.newsPost.create({
    data: data_base_ready
  })
}

export async function POST(request: Request) {
  const content_type: string = request.headers.get("content-type") + ""
  const body: ReadableStream | null = request.body
  const chunks = [], decoder = new TextDecoder();
  for await (const chunk of body){
    chunks.push(decoder.decode(chunk))
  }
  const parsed_string: string = chunks[0]
  string_parser(content_type, parsed_string).catch(err => console.log("No content: " + err))
  return new Response()
}