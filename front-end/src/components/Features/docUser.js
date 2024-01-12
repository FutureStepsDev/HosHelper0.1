import { createSlice } from "@reduxjs/toolkit";

const docUserSlice = createSlice({
  name: "docUser",
  initialState: {
    data: {},
  },
  reducers: {
    setDocUser: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setDocUser } = docUserSlice.actions;

export default docUserSlice.reducer;
