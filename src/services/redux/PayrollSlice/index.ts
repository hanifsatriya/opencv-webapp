import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IListDestinationPayroll } from "@/pages/admin/Payroll/SendPayroll/index.model";

interface selectedSof {
  idSof: string;
  cardImage: string;
  segmentTitle: string;
  accountNumber: string;
  balance: string;
}

export interface PayrollState {
  selectedSof: selectedSof[];
  listDestinationPayroll: IListDestinationPayroll[];
}

const initialState: PayrollState = {
  selectedSof: [],
  listDestinationPayroll: [],
};

export const PayrollSlice = createSlice({
  name: "payroll",
  initialState,
  reducers: {
    setSelectedSofPayroll: (state, action: PayloadAction<selectedSof[]>) => {
      state.selectedSof = action.payload;
    },
    setListDestinationPayrollRedux: (
      state,
      action: PayloadAction<IListDestinationPayroll[]>
    ) => {
      state.listDestinationPayroll = action.payload;
    },
  },
});

export const { setSelectedSofPayroll, setListDestinationPayrollRedux } =
  PayrollSlice.actions;

export default PayrollSlice.reducer;
