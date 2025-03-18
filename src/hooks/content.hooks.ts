import { queryClient } from "@/main";
import { createContent, getAllContent, getMyContent, getUserContent } from "@/services/contentService";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export interface TCreateContent {
    userId: string;
    content: string;
}

export const useCreateContent = () => {
    return useMutation<any, Error, TCreateContent>({
        mutationKey: ["UPDATE_PROFILE"],
        mutationFn: async (profileData) => await createContent(profileData),
        onSuccess: () => {
            toast("content posted successfully ");
            queryClient.invalidateQueries({ queryKey: ['get_all_content'] })
            queryClient.invalidateQueries({ queryKey: ['get_my_content'] })
            queryClient.invalidateQueries({ queryKey: ['get_user_content'] })
        },
        onError: () => {
            toast("something went wrong. please try again.");
        },
    });
};

export const useGetAllContent = (limit: number) => {
    return useQuery({
        queryKey: ["get_all_content"],
        queryFn: async () => await getAllContent(limit),
    });
};
export const useGetMyContent = (limit: number) => {
    return useQuery({
        queryKey: ["get_my_content"],
        queryFn: async () => await getMyContent(limit),

    });
};
export const useGetUserContent = (id: string, limit: number) => {
    return useQuery({
        queryKey: ["get_user_content"],
        queryFn: async () => await getUserContent(id, limit),
        staleTime: 0,  // Always mark data as stale so it refetches immediately
        refetchOnMount: true,  // Refetch every time the component mounts
        refetchOnWindowFocus: true,  // Refetch when the window gains focus
    });
};