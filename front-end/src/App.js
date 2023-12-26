// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/NavBar&&Footer/Footer";
import NavBar from "./components/NavBar&&Footer/NavBar";
import Home from "./components/home";
import Profile from "./components/profile";

import Login from "./components/login";
import SignUp from "./components/SignUp";
import Hospital from "./components/pages/Hospital";
import Pharmacy from "./components/pages/Pharmacy";
import HospitalDetails from "./components/pages/HospitalDetails"; // Import the HospitalDetails component

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Updated route for hospital details */}
          <Route path="/hospital" element={<Hospital />} />
          <Route path="/hospital/:hospitalName" element={<HospitalDetails />} />

          <Route path="/pharmacy" element={<Pharmacy />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
