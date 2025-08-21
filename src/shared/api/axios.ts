import axios from "axios";

const API_PORT = `${process.env.NEXT_PUBLIC_BE_URL}`;

export const createApi=()=>{
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;


    return axios.create({
        baseURL:API_PORT,
        headers:{
            Authorization:`Bearer ${token}`,
        }
    })
}