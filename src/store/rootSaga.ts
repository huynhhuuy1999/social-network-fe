import { all } from "redux-saga/effects";
import testSaga from "./sagas/testSaga";

export default function* rootSaga() {
  yield all([testSaga()]);
}