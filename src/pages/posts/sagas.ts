import { all, call, put, takeLatest } from "redux-saga/effects";

import { getPostsFailure, getPostsRequest, getPostsSuccess } from "./slice";

import { API_URLS } from "_helpers/config";
import { IPostsResponse } from "./types";
import axios, { AxiosResponse } from "axios";

/*
    Worker Saga: Fired on getPostsRequest action
  */
function* getPostsSaga(action: ReturnType<typeof getPostsRequest>) {
  const { email } = action.payload;

  try {
    const response: AxiosResponse<IPostsResponse> = yield call(
      axios.get,
      `${API_URLS.BASE_URL}${API_URLS.POSTS}?email=${encodeURIComponent(email)}`
    );
    yield put(
      getPostsSuccess({
        products: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      getPostsFailure({
        error: e,
      })
    );
  }
}

/*
    Starts worker saga on latest dispatched `getPostsRequest` and `postProductsRequest` action.
    Allows concurrent increments.
  */
function* postsSaga() {
  yield all([takeLatest(getPostsRequest, getPostsSaga)]);
}

export default postsSaga;
