import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import Footer from "./components/NavBar&&Footer/Footer";
import NavBar from "./components/NavBar&&Footer/NavBar";
// import home from "./components/home"
import Profile from "./components/profile"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignInSide />} /> */}
        <Route path="/profile" element={<Profile />} />
        </Routes>
      <Footer />
      
    </div>
   
  );
}

export default App;
