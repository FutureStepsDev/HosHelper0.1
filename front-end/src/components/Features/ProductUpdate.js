import { createSlice } from "@reduxjs/toolkit";

const updateSlice = createSlice({
  name: "product",
  initialState: {
    data: {},
  },
  reducers: {
    setProduct: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setProduct } = updateSlice.actions;

export default updateSlice.reducer;
