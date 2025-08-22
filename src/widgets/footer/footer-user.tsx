import {useTheme} from "@/shared/stores/theme/useTheme";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export const FooterUser = () => {
    const { whiteMode } = useTheme();

    return (
        <div className="flex flex-col gap-5 w-[300px]">
            <div className={`bg-black w-[300px] h-[60px] text-3xl font-bold flex justify-center items-center`}>
                <p className={`${whiteMode ? "from-[#2D8AFC] to-[#7700FF]" : "from-[#FF5D00] to-[#FFE100]"} bg-gradient-to-r bg-clip-text text-transparent`}>
                    Name Name Blog
                </p>
            </div>
            <div className="flex justify-around flex-row items-center gap-5 text-black text-xl">
                <Link href="/"><FaInstagram/></Link>
                <Link href="/"><BsTwitterX/></Link>
                <Link href="/"><FaLinkedinIn/></Link>
                <Link href="/"><FaGithub/></Link>
            </div>
        </div>
    )
}