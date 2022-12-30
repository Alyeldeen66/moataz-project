import React from "react";
import "./ContactUs.css";
import "font-awesome/css/font-awesome.min.css";
import NavBar from "../navbar/NavBar";
import Footer from "../Footer/Footer";

const ContactUs = () => {
  return (
    <>
      <NavBar />
      <div className="main-contact-us">
        <h2 className="contactUs-title">Let's Have a Chat !</h2>
        <h3 className="contactUs-text">We would love to hear from you</h3>
        <div className="contact-icons">
          <div className="contact-mobile contact-icon">
            <i className="fa-solid fa-mobile"></i>
            <p>
              Call us at
              <br /> +1(786)-690-5972
              <br /> +1(210)-888-9222
            </p>
          </div>
          <div className="contact-location contact-icon">
            <i className="fa-solid fa-location-dot"></i>
            <address>
              Our Location <br />
              Miami, FL, United States, Florida
            </address>
          </div>
          <div className="contact-email contact-icon">
            <i className="fa-solid fa-envelope"></i>
            <p>
              Email us at <br />
              sales@phone-pros.com
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
