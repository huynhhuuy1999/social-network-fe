import { User } from "@/models/personal";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface userState {
  isLoading: boolean;
  currentUser?: User;
}

const initialState: userState = {
  isLoading: false,
  currentUser: undefined,
};

const userSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {
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
export const userActions = userSlice.actions;

// Selector
export const isLoadingSelector = (state: RootState) => state.user.isLoading;
export const currentUser = (state: RootState) => state.user.currentUser;

// Reducer
const userReducer = userSlice.reducer;

export default userReducer;
