import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/NavBar&&Footer/Footer";
import NavBar from "./components/NavBar&&Footer/NavBar";
import Home from "./components/home";
import Profile from "./components/profile";
import Login from "./components/login";
import SignUp from "./components/SignUp";
// import Map from './components/pages/Map';
import Hospital from './components/pages/Hospital';
import Pharmacy from './components/pages/Pharmacy';
import AboutUs from "./components/pages/aboutUs";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path='/map'></Route> */}
          <Route path="/hospital" element={<Hospital />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
