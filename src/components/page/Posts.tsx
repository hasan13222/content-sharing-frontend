import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import SinglePost from "./SinglePost";
import { useGetAllContent } from "@/hooks/content.hooks";

const Posts = () => {
  const [hasMore, setHasMore] = useState(true);
  const [limit, setLimit] = useState(6);

  const { data: items } = useGetAllContent(limit);

  async function loadData() {
    if (items?.length < limit) {
      setHasMore(false);
    } else {
      setLimit((prev) => prev + 2);
    }
  }

  useEffect(() => {
    loadData();
  }, []);
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
          <SinglePost postData={item} user={item?.user}/>
        ))}
      </InfiniteScroll>
    </>
  );
};

export default Posts;
