
import UserInfoById from "@/components/page/UserInfoById";
import UserPosts from "@/components/page/UserPosts";
import { useGetUserInfo } from "@/hooks/auth.hooks";
import { queryClient } from "@/main";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function UserDetails() {
    const { userId } = useParams();

    const { data: userInfo } = useGetUserInfo(userId!);

    useEffect(() => {
        queryClient.invalidateQueries({ queryKey: ['get_user_content'] })
        queryClient.invalidateQueries({ queryKey: ['get_user_info'] })
        queryClient.invalidateQueries({ queryKey: ['get_user_profile'] })
    }, [userId])
    return (
        <>
            <UserInfoById userInfo={userInfo} userId={userId} />
            <UserPosts userId={userId} />
        </>
    )
}
