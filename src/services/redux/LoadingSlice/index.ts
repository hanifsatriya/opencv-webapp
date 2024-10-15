import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface LoadingState {
  isOpenLoading: boolean;
}

const initialState: LoadingState = {
  isOpenLoading: false,
};

export const loadingSlice = createSlice({
  name: "loadingRedux",
  initialState,
  reducers: {
    setIsOpenLoading: (state, action: PayloadAction<boolean>) => {
      state.isOpenLoading = action.payload;
    },
  },
});

export const { setIsOpenLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
