import React from "react";
import "./Footer.css";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="main-footer">
        <div className="footer-item">
          <div>
            <h3>Home</h3>
          </div>
          <div className="footer-list-container">
            <ul className="footer-list">
              <div>
                <li>
                  <a href="#">Our Pricing</a>
                </li>
              </div>
              <div>
                <li>
                  <a href="#">Our Pricing</a>
                </li>
              </div>
              <div>
                <li>
                  <a href="#">Our Pricing</a>
                </li>
              </div>
            </ul>
          </div>
          <hr className="break" />
        </div>
        <div className="footer-item">
          <div>
            <h3>About</h3>
          </div>
          <div className="footer-list-container">
            <ul className="footer-list">
              <div>
                <li>
                  <a href="#">Our Pricing</a>
                </li>
              </div>
              <div>
                <li>
                  <a href="#">Our Pricing</a>
                </li>
              </div>
              <div>
                <li>
                  <a href="#">Our Pricing</a>
                </li>
              </div>
            </ul>
          </div>
          <hr className="break" />
        </div>
        <div className="footer-item">
          <div>
            <h3>Tools</h3>
          </div>
          <div className="footer-list-container">
            <ul className="footer-list">
              <div>
                <li>
                  <a href="#">Our Pricing</a>
                </li>
              </div>
              <div>
                <li>
                  <a href="#">Our Pricing</a>
                </li>
              </div>
              <div>
                <li>
                  <a href="#">Our Pricing</a>
                </li>
              </div>
            </ul>
          </div>
          <hr className="break" />
        </div>
        {/* <div className="footer-item">
          <div>
            <h3>My Account</h3>
          </div>
          <div className="footer-list-container">
            <ul className="footer-list">
              <div>
                <li>
                  <a href="#">Our Pricing</a>
                </li>
              </div>
              <div>
                <li>
                  <a href="#">Our Pricing</a>
                </li>
              </div>
              <div>
                <li>
                  <a href="#">Our Pricing</a>
                </li>
              </div>
            </ul>
          </div>
          <hr className="break" />
        </div> */}
      </div>
      <div className="social-media-container">
        <div className="social-media">
          <div className="icon">
            <Link
              style={{
                color: "white",
              }}
              to="/"
            >
              {" "}
              <i class="fa-brands fa-facebook"></i>{" "}
            </Link>
          </div>
          <div className="icon">
            <Link style={{ color: "white" }} to="/">
              {" "}
              <i class="fa-brands fa-instagram"></i>{" "}
            </Link>
          </div>
          <div className="icon">
            <Link style={{ color: "white" }} to="/">
              {" "}
              <i class="fa-brands fa-linkedin"></i>{" "}
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="footer-trademark">
          <h5 style={{ textAlign: "center" }}>
            Copyright © 2022 · Phone Pros Call Center
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
