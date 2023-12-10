import "./App.css";
import Footer from "./components/NavBar&&Footer/Footer";
import NavBar from "./components/NavBar&&Footer/NavBar";
import Home from "./components/home"
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