import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
const Whatsapp = () => {
  return (
    <div >
      <FloatingWhatsApp
        chatboxHeight={450}
        phoneNumber={+917499749447}
        accountName={"Amplif's Bot"}
        avatar={"../logo.svg"}
        statusMessage={"we will reach you soon"}
        chatMessage={
          "Hello there!🤝\nHow can we help?\nDigital Marketing Consulting\nWebsite Development\nWebsite Maintenance\nPPC Management\nSEO\nServices E-commerce\n"
        }
        darkMode={true}
        notification={true}
        notificationSound={true}
      />
    </div>
  );
};

export default Whatsapp;
