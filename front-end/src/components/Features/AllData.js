import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHospitals = createAsyncThunk(
  "hospitals/fetchByIdStatus",
  () => {
    return axios
      .get("http://localhost:7000/api/gethospitals")
      .then((response) => response.data);
  }
);

const hospitalSlice = createSlice({
  name: "hospitals",
  initialState: {
    pending: false,
    data: [],
    error: "",
  },
  reducers: {
    setHospitals: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHospitals.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchHospitals.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchHospitals.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export const { setHospitals } = hospitalSlice.actions;

export default hospitalSlice.reducer;
