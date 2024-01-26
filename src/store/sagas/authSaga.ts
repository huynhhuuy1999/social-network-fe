import { REFRESH_TOKEN_KEY, TOKEN_KEY } from "@/constants/common";
import { ToastEnums } from "@/constants/enum";
import { ResponseProperties } from "@/models/common";
import { LoginParams, LoginResponse } from "@/models/login";
import { User } from "@/models/personal";
import { getUserApi } from "@/services";
import { loginApi } from "@/services/auth";
import { deleteCookie, setCookie } from "@/utils";
import { ShowNotificationToast } from "@/utils/toastNotify";
import { PayloadAction } from "@reduxjs/toolkit";
import { call, fork, put, race, take, takeLatest } from "redux-saga/effects";
import { authAction } from "../reducers/authSlice";

function* logInWithCredentials(payload: LoginParams): any {
  try {
    const resp: ResponseProperties<LoginResponse> = yield call(
      loginApi,
      payload,
    );
    if (resp && !resp.isError) {
      const dateExpireCookie = 7;
      setCookie(TOKEN_KEY, resp.data.accessToken, dateExpireCookie);
      setCookie(REFRESH_TOKEN_KEY, resp.data.refreshToken, dateExpireCookie);
      ShowNotificationToast({
        type: ToastEnums.success,
        message: resp.message,
      });
      yield put(authAction.fetchLoginSuccess(resp.data));
      yield call(getCurrentUser);
    }
  } catch (error) {
    ShowNotificationToast({
      type: ToastEnums.error,
      message: "Login failed",
    });
    yield put(authAction.fetchLoginFailed());
  }
}

function* logout() {
  deleteCookie(TOKEN_KEY);
  deleteCookie(REFRESH_TOKEN_KEY);
  window.localStorage.clear();
}

function* loginFlow() {
  while (true) {
    const action: PayloadAction<LoginParams> = yield take(
      authAction.fetchLoginRequest.type,
    );

    yield race({
      login: call(logInWithCredentials, action.payload),
      logout: take(authAction.logout),
    });
  }
}

function* logoutFlow() {
  while (true) {
    yield take(authAction.logout);
    yield call(logout);
  }
}

function* getCurrentUser(): any {
  try {
    const resp: ResponseProperties<User> = yield call(getUserApi);

    if (resp && !resp.isError) {
      yield put(authAction.fetchCurrentUserSuccess(resp.data));
    }
  } catch (error) {
    yield put(authAction.fetchCurrentUserFailed());
  }
}

export default function* authSaga() {
  yield fork(loginFlow);
  yield fork(logoutFlow);
  yield takeLatest(authAction.fetchCurrentUserRequest.type, getCurrentUser);
}
