"use client"
import {Button} from "@/shared/ui/button";
import {AuthForm} from "@/widgets/auth/form";
import {useTheme} from "@/shared/stores/theme/useTheme";
import BounceLoader from "react-spinners/BounceLoader";
import {useHookAuth} from "@/features/auth/hook/use-hook-auth";
import Link from "next/link";
import {ROUTES} from "@/shared/lib/constants/routes";
import {useEffect} from "react";
import { useRouter } from "next/navigation";
type AuthPageProps = {
    state: "register"|"login"
}

export const AuthPage = ({state}:AuthPageProps) => {
    const { whiteMode } = useTheme();
    const router = useRouter();
    const { submit, error, loading, data } = useHookAuth({state});

    useEffect(() => {
        if (data) {
            router.push(ROUTES.home);
        }
    }, [data, router]);

    if (loading) {
        return (
            <div className={`${
                whiteMode
                    ? "bg-[#E6E6E6] text-[#2D8AFC]"
                    : "bg-[#2B2B29] text-[#FF5D00]"
            } flex justify-center items-center min-h-screen`}>
                <BounceLoader color={whiteMode ?"#2D8AFC" : "#FF5D00"} />
            </div>
        );
    }

    if (error) {
        return (
            <div className={`${
            whiteMode
            ? "bg-[#E6E6E6] text-[#2D8AFC]"
                    : "bg-[#2B2B29] text-[#FF5D00]"
            } h-auto min-h-screen w-full flex flex-col justify-center items-center gap-10`}>
                <p className="text-red-500">{error}</p>
            </div>
        );
    }

    return (
        <div
            className={`${
                whiteMode
                    ? "bg-[#E6E6E6] text-[#2D8AFC]"
                    : "bg-[#2B2B29] text-[#FF5D00]"
            } h-auto min-h-screen w-full flex flex-col justify-center items-center gap-10`}
        >
            {state === "register" ? (
                <div className="flex flex-col gap-5">
                    <AuthForm state="register" />
                    <p className="text-l text-center font-medium">
                        <Link href={ROUTES.login}>Sing in</Link>
                    </p>
                </div>

            ) : (
                <div className="flex flex-col gap-5">
                    <AuthForm state="login" />
                    <Link href={ROUTES.register} className={`${
                        whiteMode
                            ?  "text-[#2D8AFC]"
                            :  "text-[#FF5D00]"
                    }flex justify-center text-l text-center font-medium`} >Create an account</Link>
                </div>
            )}
                <Button width="500px" high="50px" text="submit" onClick={() => submit()} />
        </div>
    );
};