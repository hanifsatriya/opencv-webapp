import { IManagementUserData } from "@/pages/admin/Company/ManagementUser/ListPengguna/index.model";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ManagemenUserState {
  detailUser: IManagementUserData;
}

const initialState: ManagemenUserState = {
  detailUser: {
    id: "",
    fullName: "",
    email: "",
    role: [],
    status: false,
  },
};

export const ManagementUserSlice = createSlice({
  name: "managementUser",
  initialState,
  reducers: {
    setDetailUser: (state, action: PayloadAction<IManagementUserData>) => {
      state.detailUser = action.payload;
    },
  },
});

export const { setDetailUser } = ManagementUserSlice.actions;

export default ManagementUserSlice.reducer;
