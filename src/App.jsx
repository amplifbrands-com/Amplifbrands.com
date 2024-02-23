import React from "react";
import { BrowserRouter as Router, Routes, Route ,Navigate } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
<<<<<<< refs/remotes/origin/emmanuel

function App() {
=======
import Portfolio from "./components/portfolio";
import ContactCard from './components/cards/contact-card'

import { ThemeContext, themes } from "./context/themeContext";



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


>>>>>>> local
  

  return (
    <Router>
<<<<<<< refs/remotes/origin/emmanuel
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/services" element={<Services/>} />
      </Routes>
    </Router>
=======
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
>>>>>>> local
  );
}

export default App;
