import { createSlice } from "@reduxjs/toolkit";

const pharmacySlice = createSlice({
  name: "pharmacy",
  initialState: {
    pharmacy: [],
  },
  reducers: {
    setPharmacy: (state, action) => {
      state.pharmacy = action.payload;
    },
  },
});

export const { setPharmacy } = pharmacySlice.actions;
export default pharmacySlice.reducer;
