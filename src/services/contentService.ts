import { TCreateContent } from "@/hooks/content.hooks";
import { axiosPublic, axiosSecure } from "@/lib/axiosInstance";


export const createContent = async (payload: TCreateContent) => {
    try {
        const { data } = await axiosSecure.post("/api/content", payload);
        return data;
    } catch (error: any) {
        throw new Error(error);
    }
};

export const getMyContent = async (limit:number) => {
    try {
        const { data } = await axiosSecure.get(`/api/content/me?limit=${limit}`);
        return data;
    } catch (error: any) {
        throw new Error(error);
    }
};

export const getAllContent = async (limit:number) => {
    try {
        const { data } = await axiosPublic.get(`/api/content?limit=${limit}`);
        return data;
    } catch (error: any) {
        throw new Error(error);
    }
};

export const getUserContent = async (userId: string, limit:number) => {
    try {
        const { data } = await axiosPublic.get(`/api/content/${userId}?limit=${limit}`);
        return data;
    } catch (error: any) {
        throw new Error(error);
    }
};