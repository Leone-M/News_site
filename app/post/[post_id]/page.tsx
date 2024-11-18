import { prisma } from "@/app/lib/data_acces"
import { news_interface } from "@/app/lib/data_acces";
import { News_data } from "@/app/lib/data_acces"
export default async function ExactPost({params}){
    let post_id = params.post_id
    const post = await prisma.newsPost.findUnique({
        where: {
            id: parseInt(post_id, 10),
        },
    })
    if (post == null) {
        return <p>Post not found</p>
    } else {
        return (<div className="grid grid-flow-row bg-zinc-900">
            <h1 className=" text-3xl font-serif text-center pt-8">{post.title}</h1>
            <div className="py-3 px-4">
                <img className="object-scale-down h-400 w-400 float-right pl-4 pt-2" width={500} height={500} alt="PostPreview" src={post.image_url}/>
                <p className=" indent-12 text-lg text-justify text-pretty">{post.article}</p>
            </div>
            <p className="text-sm text-gray-400 text-end py-2 px-4">{post.date}</p>
        </div>)
    }
}