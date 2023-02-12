import { createSelector } from "reselect";
import { IPostsResponse } from "./types";

const getPending = (state: any) => {
  return state.postsSlice.pending;
};

const getPosts = (state: any) => state.postsSlice.posts;

const getError = (state: any) => state.postsSlice.error;

export const getPostsSelector = createSelector(
  getPosts,
  (posts: IPostsResponse) => posts
);

export const getPostsPendingSelector = createSelector(
  getPending,
  (pending: boolean) => pending
);

export const getPostsErrorSelector = createSelector(
  getError,
  (error: any) => error
);
