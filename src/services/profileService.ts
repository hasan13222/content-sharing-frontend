import { TProfile } from "@/components/form/UpdateProfileForm";
import { axiosPublic, axiosSecure } from "@/lib/axiosInstance";


export const getMyProfile = async () => {
    try {
        const { data } = await axiosSecure.get("/api/profile/me");
        return data;
    } catch (error: any) {
        throw new Error(error)
    }
}
export const getUserProfile = async (userId: string) => {
    try {
        const { data } = await axiosPublic.get(`/api/profile/${userId}`);
        return data;
    } catch (error: any) {
        throw new Error(error)
    }
}

export const updateProfile = async (payload: TProfile) => {
    try {
        const { data } = await axiosSecure.post("/api/profile", payload);
        return data;
    } catch (error: any) {
        throw new Error(error);
    }
};