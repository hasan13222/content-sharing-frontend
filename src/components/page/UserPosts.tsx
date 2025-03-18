import {  useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import SinglePost from "./SinglePost";
import { useGetUserContent } from "@/hooks/content.hooks";
import { useGetUserInfo } from "@/hooks/auth.hooks";

const UserPosts = ({userId}:any) => {
  const [hasMore, setHasMore] = useState(true);
  const [limit, setLimit] = useState(6);
  
  const {data: userInfo} = useGetUserInfo(userId);
  const {data: items} = useGetUserContent(userId, limit);

  
  async function loadData() {    
    if (items?.data?.length < limit) {
      setHasMore(false);
    } else {
      setLimit((prev) => prev + 2);
    }
  }

  useEffect(() => {
    loadData();
  }, [items]);
  return (
    <>
      <InfiniteScroll
        dataLength={limit}
        next={loadData}
        hasMore={hasMore}
        loader={<p>Loading...</p>}
        endMessage={<p className="text-center">No more Post</p>}
      >
        {items?.data?.map((item: any) => (
          // <p>{item.content}</p>
          <SinglePost postData={item} user={userInfo?.data}/>
        ))}
      </InfiniteScroll>
    </>
  );
};

export default UserPosts;
