import React from "react";
import "../styles/Whatsapp.css";
import { BsWhatsapp } from "react-icons/bs";
const Whatsapp = () => {
  return (
    <div class="container">
    <a href="whatsapp://send?phone=+919007579469&text=Hello%20there%20how may i help you !"
     class="cta-button">
     <BsWhatsapp />
    
     </a>
  </div>
  );
};

export default Whatsapp;
