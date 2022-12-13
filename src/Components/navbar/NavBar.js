import React, { useEffect, useState } from "react";
import "./NavBar.css";
const NavBar = () => {
  const [showMenu, setShowMenu] = useState(true);
  const openMenu = () => {
    const menuIcon = document.querySelector(".menu-bar");
    setShowMenu(false);
  };
  const closeMenu = () => {
    setShowMenu(true);
  };

  const listenScrollEvent = () => {
    document.getElementById("link-1").classList.remove("link-hover");
    document.getElementById("link-2").classList.remove("link-hover");
    if (window.scrollY > 500 && window.scrollY < 1450) {
      document.getElementById("link-2").classList.remove("link-hover");
      document.getElementById("link-1").classList.add("link-hover");
    } else if (window.scrollY > 1000) {
      document.getElementById("link-1").classList.remove("link-hover");
      document.getElementById("link-2").classList.add("link-hover");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });

  return (
    <>
      <div className="nav-container">
        <div className="main-nav">
          <div className="nav-image">
            <img src="https://pixlr.com/images/index/remove-bg.webp" />
          </div>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li>
                <a id="link-1" href="#">
                  About us
                </a>
              </li>
              <li>
                <a id="link-2" href="#">
                  Services
                </a>
              </li>
              <li>
                <a id="link-3" href="#">
                  Contact us
                </a>
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
    </>
  );
};
export default NavBar;
