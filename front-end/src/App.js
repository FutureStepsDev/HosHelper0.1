import "./App.css";
import Footer from "./components/NavBar&&Footer/Footer";
import NavBar from "./components/NavBar&&Footer/NavBar";
<<<<<<< HEAD
import Home from "./components/home";
import Profile from "./components/profile";
import Login from './components/login';
import SignUp from './components/signUp';

=======
import Home from "./components/home"
>>>>>>> parent of 9be4ffe (ading path)
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;