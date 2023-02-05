import { createSelector } from "reselect";

const getPending = (state: any) => {
  debugger;
  return state.posts.pending;
};

const getPosts = (state: any) => state.posts.posts;

const getError = (state: any) => state.posts.error;

export const getPostsSelector = createSelector(getPosts, (posts) => posts);

export const getPostsPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getPostsErrorSelector = createSelector(getError, (error) => error);
