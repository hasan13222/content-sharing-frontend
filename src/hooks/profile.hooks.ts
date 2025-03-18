import { TProfile } from "@/components/form/UpdateProfileForm";
import { queryClient } from "@/main";
import { getMyProfile, getUserProfile, updateProfile } from "@/services/profileService";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

interface TUpProfile extends TProfile {
    userId: string;
}


export const useUpdateProfile = () => {
    return useMutation<any, Error, TUpProfile>({
        mutationKey: ["UPDATE_PROFILE"],
        mutationFn: async (profileData) => await updateProfile(profileData),
        onSuccess: () => {
            toast("profile updated successfully ");
            queryClient.invalidateQueries({ queryKey: ['get_my_profile'] })
        },
        onError: () => {
            toast("something went wrong. please try again.");
        },
    });
};


export const useGetMyProfile = () => {
    return useQuery({
        queryKey: ["get_my_profile"],
        queryFn: async () => await getMyProfile(),
        staleTime: 0
    });
};

export const useGetUserProfile = (userId: string) => {
    return useQuery({
        queryKey: ["get_user_profile"],
        queryFn: async () => await getUserProfile(userId),
        staleTime: 0
    });
};