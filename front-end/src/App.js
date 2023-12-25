import React, { useState } from "react";
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

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile user={user} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/hospital" element={<Hospital />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
