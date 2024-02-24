import React from "react";
//from aniket-> adding whatsapp floating import
import { FloatingWhatsApp } from "react-floating-whatsapp";
const Whatsapp = () => {
  return (
    <div >
      {/** from aniket adding whatsapp integration starts  */}
      <FloatingWhatsApp
        chatboxHeight={450}
        // buttonStyle={{
        //   position: "fixed",
        //   bottom: "20px",
        //   left: "20px",
        //   zIndex: "9999", // Ensure it appears above other content
        // }}
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
      {/** from aniket  whatsapp integration ends here   */}
    </div>
  );
};

export default Whatsapp;
