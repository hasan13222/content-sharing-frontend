import { TSignup } from "@/components/form/SignupForm";
import { getAllUser, getMyInfo, getUserInfo, loginUser, signupUser } from "@/services/authService";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";


export const useUserSignup = () => {
    const navigate = useNavigate();
    return useMutation<any, Error, Pick<TSignup, "email" | "password" | "fullname">>({
        mutationKey: ["USER_SIGNUP"],
        mutationFn: async (userData) => await signupUser(userData),
        onSuccess: () => {
            toast("signup success");
            navigate('/login');
        },
        onError: () => {
            toast("something went wrong. please try again.");
        },
    });
};

export const useUserLogin = () => {
    const navigate = useNavigate();
    return useMutation<any, Error, Pick<TSignup, "email" | "password">>({
        mutationKey: ["USER_Login"],
        mutationFn: async (loginData) => await loginUser(loginData),
        onSuccess: (data) => {
            toast("login success");
            localStorage.setItem('token', data?.data?.token)
            navigate('/profile');
        },
        onError: () => {
            toast("something went wrong. please try again.");
        },
    });
};

export const useGetMyInfo = () => {
    return useQuery({
        queryKey: ["get_my_info"],
        queryFn: async () => await getMyInfo(),
        staleTime: 0
    });
};
export const useGetUserInfo = (userId: string) => {
    return useQuery({
        queryKey: ["get_user_info"],
        queryFn: async () => await getUserInfo(userId),
        staleTime: 0
    });
};
export const useGetAllUser = (limit:number) => {
    return useQuery({
        queryKey: ["get_all_user"],
        queryFn: async () => await getAllUser(limit),
        staleTime: 0
    });
};