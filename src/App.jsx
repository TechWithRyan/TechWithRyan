import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Small from "./pages/Small";
import Medium from "./pages/Medium";
import Large from "./pages/Large";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import CookieBanner from 'react-cookie-banner';
import "./App.css";

const App = () => {

  return (
    <>
      <div className="container">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Small" element={<Small />} />
            <Route path="/Medium" element={<Medium />} />
            <Route path="/Large" element={<Large />} />
          </Routes>
        </Router>
        <CookieBanner disableStyle={true} />
        <Footer />
      </div>
    </>
  )
}

export default App
