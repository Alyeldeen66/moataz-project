import "./App.css";
import NavBar from "./Components/navbar/NavBar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="main-app">
      <NavBar />
      <Home />

      <Footer />
    </div>
  );
}

export default App;
