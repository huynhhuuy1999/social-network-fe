import { getUserApi } from "@/services";
import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { userActions } from "../reducers/userSlice";
import { User, UserParams } from "@/models/personal";
import { ResponseProperties } from "@/models/common";

// function* getCurrentUser(action: PayloadAction<UserParams>): any {
//   try {
//     const resp: ResponseProperties<User> = yield call(
//       getUserApi,
//       action.payload,
//     );

//     if (resp && !resp.isError) {
//       yield put(userActions.fetchCurrentUserSuccess(resp.data));
//     }
//   } catch (error) {}
// }

export default function* userSaga() {
  // yield takeLatest(userActions.fetchCurrentUserRequest.type, getCurrentUser);
}
