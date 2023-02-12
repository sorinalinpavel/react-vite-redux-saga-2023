import { IPostsParams, IPostsResponse, PostsState } from "./types";
import {
  PayloadAction,
  Slice,
  SliceCaseReducers,
  createSlice,
} from "@reduxjs/toolkit";

const initialState: PostsState = {
  posts: [],
  error: "",
  pending: false,
};

const postsSlice: Slice<
  PostsState,
  SliceCaseReducers<PostsState>,
  "postsSlice"
> = createSlice({
  name: "postsSlice",
  initialState,
  reducers: {
    getPostsRequest(state: PostsState, action: PayloadAction<IPostsParams>) {
      return {
        ...state,
        pending: true,
        params: action.payload,
        error: null,
      };
    },
    getPostsSuccess(state: PostsState, action: PayloadAction<IPostsResponse>) {
      return {
        ...state,
        pending: false,
        posts: action.payload.posts,
        error: null,
      };
    },
    getPostsFailure(state: PostsState, action) {
      return {
        ...state,
        pending: false,
        posts: initialState.posts,
        error: action.payload.error,
      };
    },
  },
});

export const { getPostsRequest, getPostsSuccess, getPostsFailure } =
  postsSlice.actions;

export default postsSlice.reducer;
