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
import Project from './components/Project'



import GoogleAds from "./components/single-service-pages/google-ads";
import YoutubeAds from "./components/single-service-pages/youtube-ads";
import FacebookAds from "./components/single-service-pages/facebook-ads";
import LinkedinAds from "./components/single-service-pages/linkedin-ads";
import CustomAds from "./components/single-service-pages/custom";
import Wordpress from "./components/single-service-pages/wordpress";
import Wix from "./components/single-service-pages/wix";
import Shopify from "./components/single-service-pages/shopify";
import Whatsapp from "./components/Whatsapp";
import ScrollToTopButton from "./components/ScrollToTopButton";



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
        <Whatsapp />
        <ScrollToTopButton />
          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/services" element={<Services theme={theme} />} />
            <Route path="/google-ads" element={<GoogleAds theme={theme} />} />
            <Route path="/youtube-ads" element={<YoutubeAds theme={theme} />} />
            <Route path="/facebook-ads" element={<FacebookAds theme={theme} />} />
            <Route path="/linkedin-ads" element={<LinkedinAds theme={theme} />} />
            <Route path="/custom" element={<CustomAds theme={theme} />} />
            <Route path="/wordpress" element={<Wordpress theme={theme} />} />
            <Route path="/wix" element={<Wix theme={theme} />} />
            <Route path="/shopify" element={<Shopify theme={theme} />} />
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
