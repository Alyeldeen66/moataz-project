import "./App.css";
import NavBar from "./Components/navbar/NavBar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import ContactUs from "./Components/Contact us/ContactUs";
import Services from "./Components/Services/Services";

function App() {
  return (
    <div className="main-app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact-us"
          element={
            <>
              <ContactUs />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <Services />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
