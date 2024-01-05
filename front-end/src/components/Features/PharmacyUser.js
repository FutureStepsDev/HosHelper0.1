import { createSlice } from "@reduxjs/toolkit";

const pharmacyUserSlice = createSlice({
  name: "pharmacyUser",
  initialState: {
    data: {},
  },
  reducers: {
    setPharmacyUser: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setPharmacyUser } = pharmacyUserSlice.actions;

export default pharmacyUserSlice.reducer;
