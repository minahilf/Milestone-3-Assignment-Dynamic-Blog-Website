import Image from "next/image"
import main from "/public/Assets/main.jpg"
import Link from "next/link"
export default function Main(){
    return(
        <div className="relative px-4 py-4 sm:px-6 sm:py-6 bg-[#F0EBE1]">
            <Image src={main} alt="main" className="h-[400px] rounded-2xl brightness-50 sm:rounded-3xl lg:h-[600px] lg:w-full" />
            <div  className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-white font-extrabold text-[20px] w-[80%] mt-4 sm:text-[42px] sm:w-[70%] lg:w-[50%] lg:text-[44px] xl:text-[55px]">YOUR ULTIMATE SKIN CARE GUIDE</h1>
            <p className="text-white font-normal text-[14px] w-[80%] sm:text-[16px] lg:w-[60%] xl:text-[18px] xl:w-[50%]">Explore the essential skincare products that can transform your daily routine. From hydrating serums to powerful antioxidants, discover the secrets to achieving radiant and healthy skin.</p>
            <div className="w-[100px] h-[30px] bg-[#f4ffb6] rounded-md flex justify-center items-center mt-2 sm:p-2 cursor-pointer  sm:w-[140px] sm:h-[40px] ">
                <button className="text-[12px] sm:text-[14px] text-[#333333] xl:text-[16px]"><Link href="/Blogs">Explore More</Link></button>
            </div>
            </div>
        </div>
    )
}