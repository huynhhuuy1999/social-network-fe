import { RegisterParams } from "@/models/login";
import { registerApi } from "@/services/auth";
import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { testActions } from "../reducers/testSlice";

function* getTest(action: PayloadAction<RegisterParams>): any {
  try {
    const resp: any = yield call(registerApi, action.payload);
    if (resp && !resp.isError) {
      yield put(testActions.fetchListBrandSuccess(resp.data || []));
    }
  } catch (error) {}
}

export default function* testSaga() {
  yield takeLatest(testActions.fetchListBrandRequest.type, getTest);
}
