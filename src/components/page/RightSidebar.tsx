import { useGetAllUser } from "@/hooks/auth.hooks";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";

function RightSidebar() {
    const [hasMore, setHasMore] = useState(true);
    const [limit, setLimit] = useState(50);

    const navigate = useNavigate();

    const {data: items} = useGetAllUser(limit)
    async function loadData() {
        if (items?.data?.length < limit) {
            setHasMore(false);
        } else {
            setLimit((prev) => prev + 10);
        }
    }

    useEffect(() => {
        loadData();
    }, [items]);
    return (
        <div className="">
            <h3 className="font-semibold text-xl mb-1 pl-5">You May Visit</h3>
            <ul>
                <InfiniteScroll
                    dataLength={limit}
                    next={loadData}
                    hasMore={hasMore}
                    loader={<p>Loading...</p>}
                    endMessage={<p className="text-center">No More Users</p>}
                >
                    {items?.data?.map((item: any) => (
                        <li onClick={() => navigate(`/${item?.id}`)} className="flex gap-2 hover:bg-gray-200 py-1 px-2 rounded-md cursor-pointer">
                            <img className="rounded-full w-7 h-7 border object-contain" src="/man.png" alt="avatar" />
                            <span>{item?.fullname}</span>
                        </li>
                    ))}
                </InfiniteScroll>
            </ul>
        </div>
    )
}

export default RightSidebar