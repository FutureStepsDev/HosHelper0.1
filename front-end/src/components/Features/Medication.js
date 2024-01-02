import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMedication = createAsyncThunk(
  "Medication/fetchMedication",
  () => {
    return axios
      .get("http://localhost:7000/api/getAllProducts")
      .then((response) => response.data);
  }
);

const MedicationSlice = createSlice({
  name: "Medication",
  initialState: {
    pending: false,
    data: [],
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(fetchMedication.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMedication.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchMedication.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default MedicationSlice.reducer;
