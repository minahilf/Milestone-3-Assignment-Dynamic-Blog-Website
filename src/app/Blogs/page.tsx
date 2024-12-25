import Image from "next/image";
import Link from "next/link";
import { blog } from "../data/data";

export default function Blogs() {
  return (
    <div className="p-4 bg-[#F0EBE1]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="py-4 text-[24px] text-center text-[#333333] font-bold w-[60%] sm:text-[26px] sm:w-[40%] lg:text-[28px]">
          DIVE INTO SKIN CARE SECRETS
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:ml-8">
        {blog.map((item) => (
          <div key={item.id} className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white">
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={250}
              className="w-full h-[200px] object-cover rounded-xl brightness-75"
            />
            <div className="p-4">
              <h2 className="text-[24px] font-bold text-[#333333]">{item.title}</h2>
              <p className="text-[#333333] text-[14px] font-normal py-2">{item.description}</p>
              <button className="w-[110px] h-[30px] bg-[#ffced2] rounded-full px-2">
                <Link href={`/Blogs/${item.id}`} className="text-[#333333] font-medium text-[14px]">
                  READ MORE
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
