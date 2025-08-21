import {Button} from "@/shared/ui/button";
import {AuthForm} from "@/widgets/auth/form";
import {useTheme} from "@/shared/stores/theme/useTheme";
import BounceLoader from "react-spinners/BounceLoader";
import {useHookAuth} from "@/features/auth/hook/use-hook-auth";
import Link from "next/link";
import {ROUTES} from "@/shared/lib/constants/routes";
type AuthPageProps = {
    state: "register"|"login"
}

export const AuthPage = ({state}:AuthPageProps) => {
    const { whiteMode } = useTheme();
    const { submit, error, loading } = useHookAuth({state});

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <BounceLoader color={whiteMode ?"#2D8AFC" : "#FF5D00"} />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen">
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
                <AuthForm state="register" />
            ) : (
                <AuthForm state="login" />
            )}
            <Link href={ROUTES.home}>
                <Button width="500px" high="50px" text="submit" onClick={() => submit()} />
            </Link>
        </div>
    );
};