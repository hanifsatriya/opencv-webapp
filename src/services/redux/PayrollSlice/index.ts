import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface selectedSof {
  idSof: string;
  cardImage: string;
  segmentTitle: string;
  accountNumber: string;
  balance: string;
}

export interface PayrollState {
  selectedSof: selectedSof[];
  // listDestinationPayroll: IListDestinationPayroll[];
}

const initialState: PayrollState = {
  selectedSof: [],
  // listDestinationPayroll: [],
};

export const PayrollSlice = createSlice({
  name: "payroll",
  initialState,
  reducers: {
    setSelectedSofPayroll: (state, action: PayloadAction<selectedSof[]>) => {
      state.selectedSof = action.payload;
    },
  },
});

export const { setSelectedSofPayroll } = PayrollSlice.actions;

export default PayrollSlice.reducer;
