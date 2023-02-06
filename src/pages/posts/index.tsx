import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store/hooks";
import {
  getPostsPendingSelector,
  getPostsErrorSelector,
  getPostsSelector,
} from "./selectors";
import { getPostsRequest } from "./slice";
import { useEffect, useState } from "react";

const PostsPage = () => {
  const [email, setEmail] = useState("test@test.com");
  const getPostsPending = useSelector(getPostsPendingSelector);
  const getPostsError = useSelector(getPostsErrorSelector);
  const getPosts = useSelector(getPostsSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPostsRequest({ email }));
  }, []);

  return <div>test</div>;
};

export default PostsPage;
