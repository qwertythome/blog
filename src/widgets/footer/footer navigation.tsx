import Link from "next/link";
import {ROUTES} from "@/shared/lib/constants/routes";
import {useTheme} from "@/shared/stores/theme/useTheme";

export const FooterNavigation = () => {
    const { whiteMode } = useTheme();

    return(
        <div className="flex  flex-row items-center gap-5 ">
            <Link className={`${whiteMode ?" hover:bg-[#2B82ED]" :"hover:bg-[#E85500]"} flex justify-center items-center text-l
             rounded-xl p-2 focus:outline-none focus:border-2 text-black w-[70px] focus:border-black  `} href={ROUTES.home}>Home</Link>
            <Link className={`${whiteMode ?" hover:bg-[#2B82ED]" :"hover:bg-[#E85500]"} flex justify-center items-center text-l
             rounded-xl p-2 focus:outline-none focus:border-2 text-black w-[70px] focus:border-black  `} href={ROUTES.profile}>Profile</Link>
        </div>
    )
}