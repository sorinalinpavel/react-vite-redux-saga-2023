import { all, fork } from "redux-saga/effects";

import postsSaga from "pages/posts/sagas";

export function* rootSaga() {
  yield all([fork(postsSaga)]);
}
