import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Footer from "./components/NavBar&&Footer/Footer";
import NavBar from "./components/NavBar&&Footer/NavBar";
import Home from "./components/home";
import Profile from "./components/profile";
import Map from './components/pages/Map';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path='/map'></Route>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;