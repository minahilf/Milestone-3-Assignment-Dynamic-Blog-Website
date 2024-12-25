import Image from "next/image";
import about from "/public/Assets/about.png"
import sign from "/public/Assets/sign.png"
import Link from "next/link";

export default function About(){
    return(
        <div className="p-4 bg-[#F0EBE1] ">
            <div className="sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-4">
                <h1 className="text-[#333] font-extrabold text-[38px] sm:w-[100%] xl:w-[60%] xl:text-[56px] sm:text-center">WELCOME TO THE WORLD OF RADIANT SKIN</h1>
                <div className=" sm:flex sm:flex-col sm:justify-center sm:items-center">
                <p className="sm:text-center text-[#333] font-normal text-[14px] sm:text-[16px] xl:w-[80%]">Bonjour and welcome to the heart of skincare! Im Isabella Russo, the beauty enthusiast behind this haven of self-care, Glow Sanctuary. Join me on a journey where every product tells a story, and each routine is a carefully crafted ritual for radiant skin.</p>
                <div className="w-[100px] h-[30px] bg-[#ffb324] rounded-md flex justify-center items-center mt-2 sm:p-2 cursor-pointer  sm:w-[140px] sm:h-[40px] ">
                <button className="text-[12px] sm:text-[14px] text-[#333333] xl:text-[16px]"><Link href="/Blogs">Explore More</Link></button>
            </div></div>
            </div>
            <div className="mt-4 sm:flex sm:gap-4 ">
                <Image src={about} alt="ab" className="rounded-lg sm:h-[300px] sm:w-[300px] sm:mt-[10%] lg:mt-[2%] xl:h-[500px] xl:w-[500px]" />
                <div className="mt-2 xl:flex xl:flex-col xl:justify-center ">
                    <h1 className="font-bold text-[20px] text-[#333] sm:text-[24px] xl:text-[38px] ">FROM TIMELESS TRADITIONS TO GLOBAL SKINCARE SECRETS</h1>
                    <p className="text-[12px] font-light text-[#333] sm:text-[14px] xl:text-[16px]">Born and raised in the vibrant world of skincare, my journey began in the heart of my familys self-care rituals. Surrounded by the soothing scent of essential oils, the glow of natural remedies, and the bond of shared routines, I developed a deep appreciation for the art of nurturing the skin.
<br /> 
My education in skincare took me from the holistic traditions of ancient remedies to the innovation of modern beauty science, where I honed my understanding and cultivated a passion for simple yet effective skincare practices. Driven by an insatiable curiosity, I embarked on a global exploration of beauty secrets, drawing inspiration from the timeless rituals of cultures worldwide.
<br /> 
From the herbal apothecaries of France to the K-beauty markets of Seoul, each experience added a unique layer to my skincare philosophy. Whether youre a seasoned skincare enthusiast or just beginning your journey to radiant skin, Im thrilled to have you here. Lets cleanse, nourish, and embrace the beauty of self-care together! <br /> <br /> Warmest regards,</p>
<Image src={sign} alt="sign" className="w-[100px] mt-2"/>
                </div>
            </div>
        </div>
    )
}
