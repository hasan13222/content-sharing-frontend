import PostEditor from "@/components/form/PostEditor";
import MyPosts from "@/components/page/MyPosts";
import UserInfo from "@/components/page/UserInfo";
import { useGetMyInfo } from "@/hooks/auth.hooks";
import { Loader2 } from "lucide-react";

export default function UserProfile() {
    const { data: myInfo, isPending } = useGetMyInfo();
    return (
        <>
            <UserInfo myInfo={myInfo} />
            {isPending && (<Loader2 className="h-4 w-4 animate-spin mr-2" />)}
            <PostEditor userId={myInfo?.data?.id} />
            <MyPosts />
        </>
    )
}
