import { createApi } from "@/shared/api/axios";

const axios = createApi();

export const registerUser = async (data: { email: string; password: string; username: string }) => {
    const res = await axios.post("/auth/registration", data);
    return res.data;
};

export const loginUser = async (data: { email: string; password: string }) => {
    const res = await axios.post("/auth/login", data);
    return res.data;
}