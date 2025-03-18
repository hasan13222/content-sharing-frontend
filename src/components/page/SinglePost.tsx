import moment from "moment";

export default function SinglePost({postData, user}: any) {
    return (
        <div className="post_single border rounded-md mb-5 p-4">
            <div className="post_header flex items-center justify-between">
                <div className="user flex items-end gap-2">
                    <img className="h-14 object-contain" src="/man.png" alt="avatar" />
                    <div className="user_details pb-1">
                        <div className="flex items-center gap-2">
                            <h3
                                onClick={() => { }}
                                className="text-lg font-bold hover:underline cursor-pointer"
                            >
                                {user?.fullname}
                            </h3>
                        </div>
                        <p className="text-xs text-gray-600">
                            Posted at {moment(postData?.createdAt).format("MM-DD-YY, h:mm:ss a")}
                        </p>
                    </div>
                </div>

            </div>
            <div className="post_body my-2">
                <p dangerouslySetInnerHTML={{__html: postData?.content}} />

            </div>
        </div>
    )
}
