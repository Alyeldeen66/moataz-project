import React, { useState } from "react";
import "./NavBar.css";
const NavBar = () => {
  const [showMenu, setShowMenu] = useState(true);
  const openMenu = () => {
    const menuIcon = document.querySelector(".menu-bar");
    console.log(menuIcon);
    setShowMenu(false);
  };
  const closeMenu = () => {
    setShowMenu(true);
  };
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

        {showMenu ? (
          <i onClick={openMenu} className="fa-solid fa-bars menu-bar"></i>
        ) : (
          <i onClick={closeMenu} class="fa-solid fa-x menu-bar"></i>
        )}
      </div>
      {!showMenu && (
        <div className="small-menu-container">
          <div className="small-menu">
            <ul className="burger">
              <div className="burger-list-item">
                <li>
                  <a href="#">About us</a>
                  <hr></hr>
                </li>
              </div>
              <div className="burger-list-item">
                <li>
                  <a href="#">Services</a>
                  <hr></hr>
                </li>
              </div>
              <div className="burger-list-item">
                <li>
                  <a href="#">Contact us</a>
                  <hr></hr>
                </li>
              </div>
            </ul>
            <hr></hr>
          </div>
        </div>
      )}
    </div>
  );
};
export default NavBar;
