import { TSignup } from "@/components/form/SignupForm";
import { axiosPublic, axiosSecure } from "@/lib/axiosInstance";


export const signupUser = async (payload: Pick<TSignup, "email" | "password" | "fullname">) => {
    try {
        const { data } = await axiosPublic.post("/api/auth/register", payload);
        return data;
    } catch (error: any) {
        throw new Error(error);
    }
};

export const loginUser = async (payload: Pick<TSignup, "email" | "password">) => {
    try {
        const { data } = await axiosPublic.post("/api/auth/login", payload);
        return data;
    } catch (error: any) {
        throw new Error(error);
    }
};


export const getMyInfo = async () => {
    try{
        const {data} = await axiosSecure.get("/api/auth/me");
        return data;
    } catch (error:any){
        throw new Error(error)
    }
}

export const getUserInfo = async (userId: string) => {
    try{
        const {data} = await axiosPublic.get(`/api/auth/${userId}`);
        return data;
    } catch (error:any){
        throw new Error(error)
    }
}

export const getAllUser = async (limit:number) => {
    try{
        const {data} = await axiosPublic.get(`/api/auth?limit=${limit}`);
        return data;
    } catch (error:any){
        throw new Error(error)
    }
}