import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route ,Navigate } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Services from "./components/Services";
import Portfolio from "./components/portfolio";
import ContactCard from './components/cards/contact-card'
import Project from './components/Project'


function App() {
  const getInitialTheme = () => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme || 'light';
  };


  const [theme, setTheme] = useState(getInitialTheme);

  const [showContact, setShowContact] = useState(false);
  function changeShowContact() {
    setShowContact(
      ()=>{
        return !showContact;
      }
    )
  }

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    setTheme(prefersDarkMode ? 'dark' : 'light');

    const handleChange = (event) => {
      setTheme(event.matches ? 'dark' : 'light');
    };

    const colorTheme = window.matchMedia('(prefers-color-scheme: dark)');
    colorTheme.addEventListener('change', handleChange);

    return () => {
      colorTheme.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <Router>
        <Navbar showContact={showContact} changeShowContact={changeShowContact} />
          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/services" element={<Services theme={theme} />} />
            <Route path="/portfolio/:projectId" element={<Project theme={theme} />} />
          </Routes>
          {
            showContact &&
            <ContactCard  theme={theme} showContact={showContact} changeShowContact={changeShowContact}  />
          }
        <Footer />
     </Router>
  );
}

export default App;
