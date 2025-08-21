import {useTheme} from "@/shared/stores/theme/useTheme";

interface Ibutton{
    text: string;
    className?: string;
    width?: string;
    high?: string;
    onClick:()=>void;
}

export const Button = ({text, className, width, high,onClick}:Ibutton) => {
    const { whiteMode } = useTheme();

    return(
        <div>
            <button onClick={onClick} className={` ${whiteMode ?"bg-[#2D8AFC] hover:bg-[#2175D9]":"bg-[#FF5D00] hover:bg-[#FF6E24]"} text-white ${className} p-2 w-[${width}] h-[${high}] rounded-2xl`}>
                {text}
            </button>
        </div>
    )
}