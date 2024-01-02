import { configureStore } from "@reduxjs/toolkit";
import hospitalReducer from "./Features/AllData";
import pharmacyReducer from "./Features/pharmacyData";
import userReducer from "./Features/User";
import medicationReducer from "./Features/Medication";
import updateReducer from "./Features/ProductUpdate";
const store = configureStore({
  reducer: {
    user: userReducer,
    hospitals: hospitalReducer,
    pharmacies: pharmacyReducer,
    medications: medicationReducer,
    updates: updateReducer,
  },
});

export default store;
