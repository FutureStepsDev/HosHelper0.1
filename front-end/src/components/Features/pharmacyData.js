import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPhamacies = createAsyncThunk(
  "pharmacies/fetchPhamacies",
  () => {
    return axios
      .get("http://localhost:7000/api/getPharmacy")
      .then((response) => response.data);
  }
);

const pharmacySlice = createSlice({
  name: "pharmacies",
  initialState: {
    pending: false,
    data: [],
    error: "",
  },
  reducers: {
    setPharmacies: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPhamacies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPhamacies.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchPhamacies.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export const { setPharmacies } = pharmacySlice.actions;
export default pharmacySlice.reducer;
