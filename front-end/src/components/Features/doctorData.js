import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDoctors = createAsyncThunk(
  "doctors/fetchDoctors",
  () => {
    return axios
      .get("http://localhost:7000/api/doctors")
      .then((response) => response.data);
  }
);

const doctorSlice = createSlice({
  name: "doctors",
  initialState: {
    pending: false,
    data: [],
    error: "",
  },
  reducers: {
    setDoctors: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDoctors.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchDoctors.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchDoctors.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export const { setDoctors } = doctorSlice.actions;
export default doctorSlice.reducer;
