import { User } from "@/models/personal";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface userState {
  isLoading: boolean;
}

const initialState: userState = {
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

// Action
export const userActions = userSlice.actions;

// Selector
export const isLoadingSelector = (state: RootState) => state.user.isLoading;

// Reducer
const userReducer = userSlice.reducer;

export default userReducer;
