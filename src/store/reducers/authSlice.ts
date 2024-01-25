import { LoginParams, LoginResponse } from "@/models/login";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { User } from "@/models/personal";

export interface authState {
  isLoading: boolean;
  isLogged: boolean;
  refreshToken: string;
  currentUser?: User;
}

const initialState: authState = {
  isLoading: false,
  isLogged: false,
  refreshToken: "",
  currentUser: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchLoginRequest(state, action: PayloadAction<LoginParams>) {
      state.isLoading = true;
    },
    fetchLoginSuccess(state, action: PayloadAction<LoginResponse>) {
      state.isLoading = false;
      state.isLogged = true;
      state.currentUser = action.payload.infoUser;
    },
    fetchLoginFailed(state, action: PayloadAction) {
      state.isLoading = false;
    },
    logout(state) {
      state.isLogged = false;
      state.currentUser = undefined;
    },
    fetchCurrentUserRequest(state, action: PayloadAction<any>) {
      state.isLoading = true;
    },
    fetchCurrentUserSuccess(state, action: PayloadAction<User>) {
      state.isLoading = false;
      state.currentUser = action.payload;
    },
    fetchCurrentUserFailed(state, action: PayloadAction) {
      state.isLoading = false;
    },
  },
});

// Action
export const authAction = authSlice.actions;

// Selector
export const isLoadingSelector = (state: RootState) => state.auth.isLoading;
export const isLoggedSelector = (state: RootState) => state.auth.isLoading;
export const currentUser = (state: RootState) => state.auth.currentUser;

// Reducer
const authReducer = authSlice.reducer;

export default authReducer;
