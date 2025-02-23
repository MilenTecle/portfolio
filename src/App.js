import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import './App.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ReactGA from "react-ga4";

function App() {
  const location = useLocation(); // Get the current location

  // Initialize GA once when the component mounts
  useEffect(() => {
    ReactGA.initialize('G-00K6V3XV5S');
  }, []);

  // Send a pageview event whenever the location changes
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  // Check if it's the homepage
  const isHomePage = location.pathname === "/";

  return (
    <div className={!isHomePage ? "mt-5 pt-5" : ""}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
