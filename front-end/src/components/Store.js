import { configureStore } from "@reduxjs/toolkit";
import hospitalReducer from "./Features/AllData";
const store = configureStore({
  reducer: {
    hospitals: hospitalReducer,
  },
});

export default store;
