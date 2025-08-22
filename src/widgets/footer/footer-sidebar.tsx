import {useTheme} from "@/shared/stores/theme/useTheme";
import { FiSun } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import {ROUTES} from "@/shared/lib/constants/routes";

export const FooterSidebar = () => {
    const { whiteMode,toggleWhiteMode } = useTheme();
    return (
        <div className="flex flex-col gap-5 items-center">
            <div className="flex justify-around flex-row items-center text-black">
                <button
                    onClick={toggleWhiteMode}
                    className="flex justify-center items-center text-3xl
             rounded-full focus:outline-none focus:border-2 focus:border-black w-[50px] h-[50px]"
                >
                    {whiteMode ? <FaRegMoon /> : <FiSun />}
                </button>
                <button   className="flex justify-center items-center text-3xl
             rounded-full focus:outline-none focus:border-2 focus:border-black w-[50px] h-[50px]">
                    <CiSearch/>
                </button>
            </div>
            <div className={`${
                whiteMode
                    ? "text-[#2D8AFC]"
                    : "text-[#FF5D00]"
            } flex justify-around flex-row items-center gap-5 `}>
                <Link className={`${
                    whiteMode ? "hover:bg-[#2D8AFC] hover:text-black" :
                        "hover:bg-[#FF5D00] hover:text-black"
                } bg-black border-2 rounded-4xl w-[100px] h-[40px] text-xl font-medium flex items-center justify-center`} href={ROUTES.login}>sing in</Link>

                <Link className={`${
                    whiteMode ? "hover:bg-[#2D8AFC] hover:text-black" :
                        "hover:bg-[#FF5D00] hover:text-black"
                } bg-black border-2 rounded-4xl w-[100px] h-[40px] text-xl font-medium flex items-center justify-center`} href={ROUTES.register}>sing up</Link>
            </div>
        </div>
    )
}