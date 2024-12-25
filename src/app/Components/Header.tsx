import Link from "next/link"
export default function Header(){
    return(
        <div className="p-2 bg-[#F0EBE1]">
        <div className="flex flex-col justify-center items-center gap-4 sm:flex-row sm:justify-between sm:px-4">
            <ul className="flex justify-evenly items-center gap-10 xl:gap-[50%] text-[16px] font-medium text-[#333333] sm:text-[18px] xl:text-[20px] cursor-pointer">
                <li><Link href="/" >Home</Link></li>
                <li><Link href="/About" >About</Link></li>
                <li><Link href="/Blogs" >Blogs</Link></li>
                <li><Link href="/Contact" >Contact</Link></li>
            </ul>
            <div>
                <p className="font-semibold text-[20px] text-[#B76E79]">MINAHIL FATIMA</p>
            </div>
            
        </div>
        </div>
    )
}