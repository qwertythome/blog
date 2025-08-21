"use client"
import { useTheme } from "../stores/theme/useTheme";

interface Iinput{
    type: string;
    className?: string;
    placeholder:string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

export const Input = ({type, className,placeholder,onChange}:Iinput) => {
    const { whiteMode } = useTheme();

    return(
        <div>
            <input onChange={onChange} className={`${whiteMode ? "border-[#A8A8A8] focus:ring-[#808080]": "border-[#40403D] focus:ring-[#4D4D48]"} ${className} p-2 w-[500px] h-[50px] rounded-xl border-2 focus:ring-2 outline-none`} placeholder={placeholder} type={type}/>
        </div>
    )
}
