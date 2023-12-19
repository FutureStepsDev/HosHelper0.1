import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Footer from "./components/NavBar&&Footer/Footer";
import NavBar from "./components/NavBar&&Footer/NavBar";
import Home from "./components/home";
import Profile from "./components/profile";
import Login from "./components/login";
import SignUp from "./components/SignUp";
import Hospital from './components/pages/Hospital';
import Pharmacy from './components/pages/Pharmacy';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        
        <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Hospital" element={<Hospital/>} />
          <Route path="/Pharmacy" element={<Pharmacy/>} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
