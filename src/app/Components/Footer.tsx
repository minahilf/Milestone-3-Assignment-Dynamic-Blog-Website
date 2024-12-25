import Image from "next/image"
import fb from "/public/Assets/fb.png"
import insta from "/public/Assets/insta.png"
import yt from "/public/Assets/yt.png"

export default function Footer(){
    return(
        <div className="flex justify-between items-center bg-[#F0EBE1] p-2">
            <p className="font-semibold text-[10px] text-[#B76E79] sm:text-[12px]">MINAHIL FATIMA</p>
            <div className="flex gap-2 items-center">
                <Image src={fb} alt="fb" className="w-[15px] h-[15px] sm:w-[20px] sm:h-[20px]" />
                <Image src={insta} alt="insta" className="w-[15px] h-[15px] sm:w-[20px] sm:h-[20px]" />
                <Image src={yt} alt="yt" className="w-[17px] h-[17px] sm:w-[22px] sm:h-[22px]" />
            </div>
            <div>
                <ul className="flex gap-2 text-[10px] items-center text-[#333333] sm:text-[12px]">
                    <li>Privacy Policy</li>
                    <li>Cookie Policy</li>
                </ul>
            </div>
        </div>
    )
}