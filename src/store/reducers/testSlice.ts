import {
  createSlice,
  PayloadAction,
  createDraftSafeSelector,
} from "@reduxjs/toolkit";
import { RootState } from "..";

export interface testState {
  isLoading: boolean;
}

const initialState: testState = {
  isLoading: false,
};

const testSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {
    fetchListBrandRequest(state, action: PayloadAction<any>) {
      state.isLoading = true;
    },
    fetchListBrandSuccess(state, action: PayloadAction<any>) {
      state.isLoading = false;
    },
    fetchListBrandFailed(state, action: PayloadAction) {
      state.isLoading = false;
    },
  },
});

// Action
export const testActions = testSlice.actions;

// Selector
export const isLoadingSelector = (state: RootState) => state.test.isLoading;

// Reducer
const testReducer = testSlice.reducer;

export default testReducer;
