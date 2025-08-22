import {useTheme} from "@/shared/stores/theme/useTheme";
import {FooterSidebar} from "@/widgets/footer/footer-sidebar";
import {FooterUser} from "@/widgets/footer/footer-user";
import {FooterNavigation} from "@/widgets/footer/footer navigation";
export const Footer=()=>{
    const { whiteMode } = useTheme();

    return(
        <nav className={`${
            whiteMode
            ? "bg-[#2D8AFC] "
            : "bg-[#FF5D00] "
         } w-screen h-[250px] flex flex-row justify-around items-center p-2`} >
            <div><FooterUser/></div>
            <div className="flex self-end"><FooterNavigation/></div>
            <div><FooterSidebar/></div>
        </nav>
    )
}