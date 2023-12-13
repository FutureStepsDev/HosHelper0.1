import { createSlice } from "@reduxjs/toolkit";
import data from "../datas/HospitalDatas";
export const dataSlice = createSlice({
  name: "HosData",
  initialState: { value: data },
  reducers: {
    search: (state, action) => {
      state.value = action.payload;
    },
  },
});
