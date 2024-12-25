import { blog } from "@/app/data/data";
import Image from "next/image";
import Comment from "@/app/Comment/page";

export default async function Blog_Detail({ params }: { params: { id: string } }) {
  const blog_id = parseInt(params.id);
  const blogsdata = blog.find((blog) => blog.id === blog_id);

  if (!blogsdata) {
    return <p>Blog not found!</p>;
  }

  return (
    <div className="p-4 bg-[#F0EBE1]">
        <div className="flex flex-col justify-center items-center">
      <h1 className="text-[24px] text-center sm:text-[28px] xl:text-[32px] font-extrabold text-[#262522]">{blogsdata.title}</h1>
      <p className="text-[#262522] text-center font-light text-[14px] sm:w-[60%] lg:w-[40%] xl:w-[40%] xl:text-[16px]">{blogsdata.description}</p>
      </div>
      <Image
        src={blogsdata.image}
        alt={blogsdata.title}
        width={800}
        height={500}
        className="object-cover my-4 rounded-3xl lg:w-full lg:h-[500px]"
      />
       <div dangerouslySetInnerHTML={{ __html: blogsdata.content }}></div>
     <Comment/>
    </div>
  );
}
