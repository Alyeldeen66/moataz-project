import React from "react";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="main-nav">
        <div className="nav-image">
          <img src="https://pixlr.com/images/index/remove-bg.webp" />
        </div>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
