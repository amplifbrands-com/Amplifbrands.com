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
import ContactCard from './components/cards/contact-card'


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

  
// const [theme, setTheme] = useState(themes.light)

// function handleOnClick(){
//   theme === themes.light ?  setTheme(themes.dark) : setTheme(themes.light);
// }

// const body = document.body;

// useEffect( () => {

//   switch(theme){
//     case themes.light:
//       body.classList.remove('bg-dark');
//       body.classList.remove('text-light')
//       body.classList.add('bg-light');
//       body.classList.add('text-dark');
//       break;
//     case themes.dark:
//       body.classList.remove('bg-light');
//       body.classList.remove('text-dark')
//       body.classList.add('bg-dark');
//       body.classList.add('text-light');
//       break;
//     default:
//       body.classList.remove('bg-dark');
//       body.classList.remove('text-light')
//       body.classList.add('bg-light');
//       body.classList.add('text-dark');
//   }

// }, [theme]);

  return (
    <Router>
      {/* <ThemeContext.Provider value={{ theme, handleOnClick }}> */}

        <Navbar showContact={showContact} changeShowContact={changeShowContact} />
          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/services" element={<Services theme={theme} />} />
          </Routes>

          {
            showContact &&
            <ContactCard  theme={theme} showContact={showContact} changeShowContact={changeShowContact}  />
          }

        <Footer />
      {/* </ThemeContext.Provider> */}
     </Router>
  );
}

export default App;
