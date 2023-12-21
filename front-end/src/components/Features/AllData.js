import { createSlice } from "@reduxjs/toolkit";

const hospitalSlice = createSlice({
  name: "hospitals",
  initialState: {
    hospitals: [],
  },
  reducers: {
    setHospitals: (state, action) => {
      state.hospitals = action.payload;
    },
  },
});

export const { setHospitals } = hospitalSlice.actions;
export default hospitalSlice.reducer;
