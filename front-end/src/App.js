import "./App.css";
import Footer from "./components/NavBar&&Footer/Footer";
import NavBar from "./components/NavBar&&Footer/NavBar";
import Home from "./components/home";
import Profile from "./components/profile";
import Login from './components/Login';
import SignUpForm from './components/Signup' 

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home/>
      <Footer />
    </div>
   
  );
}

export default App;