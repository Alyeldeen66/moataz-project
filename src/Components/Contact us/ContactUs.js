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
              <br /> +01234567890
            </p>
          </div>
          <div className="contact-location contact-icon">
            <i className="fa-solid fa-location-dot"></i>
            <address>
              Some St. Somewhere <br /> Downtown Avenue
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
