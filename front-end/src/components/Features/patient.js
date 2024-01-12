import { createSlice } from "@reduxjs/toolkit";

const patientSlice = createSlice({
    name: "patient",
    initialState: {
      data: {},
      loading: false,
      error: null,
    },
    reducers: {
      setPatient: (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      },
      setPatientLoading: (state) => {
        state.loading = true;
      },
      setPatientError: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
    },
  });

export const { setPatient } = patientSlice.actions;

export default patientSlice.reducer;
