import { LoginParams } from "@/models/login";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface authState {
  isLoading: boolean;
  isLogged: boolean;
  refreshToken: string;
}

const initialState: authState = {
  isLoading: false,
  isLogged: false,
  refreshToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchLoginRequest(state, action: PayloadAction<LoginParams>) {
      state.isLoading = true;
    },
    fetchLoginSuccess(state, action: PayloadAction) {
      state.isLoading = false;
      state.isLogged = true;
    },
    fetchLoginFailed(state, action: PayloadAction) {
      state.isLoading = false;
    },
  },
});

// Action
export const authAction = authSlice.actions;

// Selector
export const isLoadingSelector = (state: RootState) => state.auth.isLoading;
export const isLoggedSelector = (state: RootState) => state.auth.isLoading;

// Reducer
const authReducer = authSlice.reducer;

export default authReducer;
