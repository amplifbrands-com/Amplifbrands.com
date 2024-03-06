import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Advert } from "./components/Advert";
import { Google } from "./components/Google";
import { Facebook } from "./components/Facebook";
import { Linkendin } from "./components/Linkendin";
import { Youtube } from "./components/Youtube";
import { Platform } from "./components/Platform";



function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Advert/>
      <Google/>
      <Facebook/>
      <Linkendin/>
      <Youtube/>
      <Platform/>
      <Footer/>
     
    </>
  );
}

export default App;
