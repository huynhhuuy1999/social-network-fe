import { all } from "redux-saga/effects";
import testSaga from "./sagas/testSaga";
import userSaga from "./sagas/userSaga";
import authSaga from "./sagas/authSaga";

export default function* rootSaga() {
  yield all([testSaga(), userSaga(), authSaga()]);
}
