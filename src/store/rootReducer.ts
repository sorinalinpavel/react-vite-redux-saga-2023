import { combineReducers } from "redux";
import postsSlice from "pages/posts/slice";

const rootReducer = combineReducers({
  postsSlice,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
