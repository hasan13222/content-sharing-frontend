import { useGetUserProfile } from "@/hooks/profile.hooks"

export default function UserInfoById({userInfo, userId}:any) {

    const {data: userProfile} = useGetUserProfile(userId)
  return (
    <>
        <div className="post_header flex items-center border p-5 rounded-md mb-3">
                <div className="user flex items-center gap-5">
                    <img className="w-36 object-contain" src="/man.png" alt="avatar" />
                    <div className="flex flex-col">
                        <h3 className="text-lg font-medium flex gap-2 items-center">
                            <span>{userInfo?.data?.fullname}</span>{" "}
                        </h3>
                        <p>{userProfile?.data?.occupation}</p>
                        <p>{userInfo?.data?.email}</p>
                        <p>{userProfile?.data?.phone}</p>
                        <p>{userProfile?.data?.address}</p>
                    </div>
                </div>
            </div>
    </>
  )
}
