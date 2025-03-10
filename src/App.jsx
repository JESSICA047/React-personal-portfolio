import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Navbar from "./components/Navbar/Navbar";
import Apple from "./Pages/Resume/Resumee";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import "./assets/font/fonts.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Portfolio />} />
        <Route path="/resume" element={<Apple />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
