"use client"
import {useTheme} from "@/shared/stores/theme/useTheme";
import {Footer} from "@/widgets/footer/footer";

export const MainPage = () => {
    const { whiteMode } = useTheme();

    return (
      <div className={`${whiteMode ? "bg-[#E6E6E6] text-[#2D8AFC]" : "bg-[#2B2B29] text-[#FF5D00]"} h-auto min-h-screen w-full`}>
          <Footer/>
      </div>
  )
}