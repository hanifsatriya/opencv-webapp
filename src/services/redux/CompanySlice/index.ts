import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CompanyState {
  activeMenu: string;
}

const initialState: CompanyState = {
  activeMenu: "",
};

export const CompanySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    setActiveMenu: (state, action: PayloadAction<string>) => {
      state.activeMenu = action.payload;
    },
  },
});

export const { setActiveMenu } = CompanySlice.actions;

export default CompanySlice.reducer;
