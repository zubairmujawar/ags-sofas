import { Outlet } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;
