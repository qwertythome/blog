import {create} from "zustand";

interface Theme{
    whiteMode: boolean;
    toggleWhiteMode: () => void;
}

export const useTheme=create<Theme>((set:any)=>({
    whiteMode:false,

    toggleWhiteMode:()=>{
        set((state:any) => ({
            whiteMode: !state.whiteMode,
        }))
    }
}))