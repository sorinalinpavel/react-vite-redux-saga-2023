import { List, Spin } from "antd";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  getPostsPendingSelector,
  getPostsErrorSelector,
  getPostsSelector,
} from "./selectors";
import { getPostsRequest } from "./slice";
import { IPosts } from "./types";

const PostsPage = () => {
  const email = "test@test.com";
  const isPostsPenging = useAppSelector<boolean>(getPostsPendingSelector);
  const postsError = useAppSelector(getPostsErrorSelector);
  const posts = useAppSelector<any>(getPostsSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPostsRequest({ email }));
  }, []);

  return (
    <>
      <Link to={`/`}>GO HOME</Link>
      <Spin tip="Loading" size="large" spinning={isPostsPenging}>
        <List
          size="large"
          header={<div>Example from AntD Header</div>}
          footer={<div>Example from AntD Footer</div>}
          bordered
          dataSource={posts}
          renderItem={(post: IPosts) => (
            <List.Item>
              {post.id} / {post.title}
            </List.Item>
          )}
        />
      </Spin>
      {postsError && <p>{postsError}</p>}
    </>
  );
};

export default PostsPage;
