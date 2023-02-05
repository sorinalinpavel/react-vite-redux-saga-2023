import { combineReducers } from "redux";
import postsSlice from "../pages/posts/slice";

const rootReducer = combineReducers({
  posts: postsSlice,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
