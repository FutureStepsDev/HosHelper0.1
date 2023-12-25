import { configureStore } from "@reduxjs/toolkit";
import hospitalReducer from "./Features/AllData";
import pharmacyReducer from "./Features/pharmacyData";
import userReducer from "./Features/User";
const store = configureStore({
  reducer: {
    user: userReducer,
    hospitals: hospitalReducer,
    pharmacies: pharmacyReducer,
  },
});

export default store;
