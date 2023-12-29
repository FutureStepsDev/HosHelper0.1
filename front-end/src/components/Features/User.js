import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: {},
    log: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload;
      state.log = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
