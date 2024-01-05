import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/NavBar&&Footer/Footer";
import NavBar from "./components/NavBar&&Footer/NavBar";
import Home from "./components/home";
import Profile from "./components/profile";

import { useSelector } from "react-redux";

import "leaflet/dist/leaflet.css";

import Login from "./components/login";
import SignUp from "./components/SignUp";
import Hospital from "./components/pages/Hospital";
import Pharmacy from "./components/pages/Pharmacy";

import UpdateProfil from "./components/UpdateProfil";

import AboutUs from "./components/pages/aboutUs";
import HospitalDetails from "./components/pages/HospitalDetails";
import PharmacyStore from "./components/PharmacyStore";
import AddMedication from "./components/AddMedication";

import AddPharmacy from "./components/AddPharmacy";
import MyPharmacy from "./components/MyPharmacy";
import ProductInOnePharmacy from "./components/ProductInOnePharmacy";

function App() {
  const log = useSelector((state) => state.user.log);
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />

          {log && <Route exact path="/profile" element={<Profile />} />}

          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/hospital" element={<Hospital />} />
          <Route
            exact
            path="/hospital/:hospitalName"
            element={<HospitalDetails />}
          />
          <Route exact path="/pharmacy" element={<Pharmacy />} />
          <Route exact path="/UpdateProfil" element={<UpdateProfil />} />
          <Route exact path="/pharmacystore" element={<PharmacyStore />} />
          <Route exact path="/addmedication" element={<AddMedication />} />
          <Route exact path="/addpharmacy" element={<AddPharmacy />} />
          <Route exact path="/mypharmacy" element={<MyPharmacy />} />
          <Route
            exact
            path="/productInOnePharmacy"
            element={<ProductInOnePharmacy />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
