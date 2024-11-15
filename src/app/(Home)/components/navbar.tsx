import Link from "next/link";
export default function Navbar(){
    return(
<div>
<header>
    <nav>
        <ul className="w-screen flex gap-[1rem] justify-between items-center p-[1rem] bg-green-800 text-white shadow-xl opacity-90">
            <div>
            <img src="logo_icon.webp" alt="" className="w-[3rem] absolute top-[0.3rem] left-[1rem] cursor-pointer"/></div>
            <div className="flex gap-[1rem] justify-center items-center ml-[3rem]">
                <ul className="flex flex-row gap-[1rem]">
            <li className="hover:scale-[140%] duration-200 hover:px-[1rem]"><Link href={"/"}>Home</Link></li>
            <li className="hover:scale-[140%] duration-200 hover:px-[1rem]"><Link href={"/product"}>Product</Link></li>
            <li className="hover:scale-[140%] duration-200 hover:px-[1rem]"><Link href={"/team"}>Team</Link></li>
            <li className="hover:scale-[140%] duration-200 hover:px-[1rem]"><Link href={"/about"}>About</Link></li>
            </ul>
            </div>
            <div className="mr-[1rem]">Profile</div>
        </ul>
    </nav>
</header>
    </div>
    )
}