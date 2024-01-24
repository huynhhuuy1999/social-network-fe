import { LoginParams, LoginResponse } from "@/models/login";
import { loginApi } from "@/services/auth";
import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { authAction } from "../reducers/authSlice";
import { userActions } from "../reducers/userSlice";
import { ResponseProperties } from "@/models/common";
import { ShowNotificationToast } from "@/utils/toastNotify";
import { ToastEnums } from "@/constants/enum";
import { setCookie } from "@/utils";
import { REFRESH_TOKEN_KEY, TOKEN_KEY } from "@/constants/common";

function* logInWithCredentials(action: PayloadAction<LoginParams>): any {
  try {
    console.log("first");
    const resp: ResponseProperties<LoginResponse> = yield call(
      loginApi,
      action.payload,
    );
    console.log("hihi");
    if (resp && !resp.isError) {
      const dateExpireCookie = 7;
      setCookie(TOKEN_KEY, resp.data.accessToken, dateExpireCookie);
      setCookie(REFRESH_TOKEN_KEY, resp.data.refreshToken, dateExpireCookie);
      ShowNotificationToast({
        type: ToastEnums.success,
        message: resp.message,
      });
      yield put(authAction.fetchLoginSuccess());
      yield put(userActions.fetchCurrentUserSuccess(resp.data?.infoUser || {}));
    }
  } catch (error) {
    yield put(authAction.fetchLoginFailed());
  }
}

export default function* authSaga() {
  yield takeLatest(authAction.fetchLoginRequest.type, logInWithCredentials);
}
