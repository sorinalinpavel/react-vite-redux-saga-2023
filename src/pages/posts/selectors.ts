import { createSelector } from "reselect";

const getPending = (state: any) => {
  return state.postsSlice.pending;
};

const getPosts = (state: any) => state.postsSlice.posts;

const getError = (state: any) => state.postsSlice.error;

export const getPostsSelector = createSelector(getPosts, (posts) => posts);

export const getPostsPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getPostsErrorSelector = createSelector(getError, (error) => error);
