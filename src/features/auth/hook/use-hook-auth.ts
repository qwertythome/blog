"use client";
import { useState } from "react";
import { useAuth } from "@/shared/stores/auth/useAuth";
import { registerUser } from "../api/auth";
import { RegisterApi } from "@/features/auth/type/register-api";
import {LoginApi} from "@/features/auth/type/login-api";
import {loginUser} from "@/features/auth/api/auth";

interface IuseHookAuth{
    state: "register"|"login"
}

export const useHookAuth = ({state}:IuseHookAuth) => {
    const { emailError, passwordError, usernameError, email, password, username } = useAuth();

    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<RegisterApi | LoginApi>();

    const submit = async () => {
        if(state === "register"){
            if (emailError || passwordError || usernameError) {
                setError("Validation failed");
                return;
            }

            setLoading(true);
            setError("");
            try {
                const res = await registerUser({ email, password, username });
                setData(res);
            } catch (e: any) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        } else{
            if (emailError || passwordError) {
                setError("Validation failed");
                return;
            }

            setLoading(true);
            setError("")
            try{
                const res = await loginUser({email, password})
                setData(res)
            }catch (e:any){
                setError(e.message)
            }finally {
                setLoading(false)
            }
        }
        }


    return { error, loading, data, submit };
};
