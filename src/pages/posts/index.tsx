import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../store/hooks";
import {
  getPostsPendingSelector,
  getPostsErrorSelector,
  getPostsSelector,
} from "./selectors";
import { getPostsRequest } from "./slice";
import { IPosts } from "./types";

const PostsPage = () => {
  const [email, setEmail] = useState("test@test.com");
  const isPostsPenging = useSelector(getPostsPendingSelector);
  const postsError = useSelector(getPostsErrorSelector);
  const posts = useSelector(getPostsSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPostsRequest({ email }));
  }, []);

  return (
    <>
      {isPostsPenging && <p>Loading...</p>}
      {posts.length &&
        posts.map((post: IPosts) => (
          <div key={post.id}>
            <p>{post.id}</p>
            <p>{post.title}</p>
          </div>
        ))}
      {postsError && <p>{postsError}</p>}
    </>
  );
};

export default PostsPage;
