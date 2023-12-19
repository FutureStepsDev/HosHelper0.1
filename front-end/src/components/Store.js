import { configureStore } from "@reduxjs/toolkit";
import hospitalReducer from "./Features/AllData";
import pharmacyReducer from "./Features/pharmacyData";
const store = configureStore({
  reducer: {
    hospitals: hospitalReducer,
    pharmacy: pharmacyReducer,
  },
});

export default store;
