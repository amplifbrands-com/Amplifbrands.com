import React from "react";
import "../styles/Whatsapp.css";
import { BsWhatsapp } from "react-icons/bs";
const Whatsapp = () => {
  return (
    <div class="whatsapp">
    <a href="https://wa.link/n0188s"
     class="cta-button">
     <BsWhatsapp 
      className="whatIcon"
     />
     </a>
  </div>
  );
};

export default Whatsapp;
