import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="InnerContact">
        <h2>Contact us</h2>
        <h4>
          mail:
          <p>shop@shop.com</p>
        </h4>
        <h4>
          phone:<p>999-99-99</p>
        </h4>
        <h4>
          fax:<p>992-89-99</p>
        </h4>
      </div>

      <div className="ContentImg">
        <img
          src={`${process.env.PUBLIC_URL}/images/kościotrup.png`}
          alt="contactImg"
        />
      </div>
    </div>
  );
};

export default Contact;
