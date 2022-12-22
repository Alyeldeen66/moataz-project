import React, { useEffect, useState } from "react";
import "./NavBar.css";
import navlogo from "../../Images/logo.png";
import { Link, useNavigate } from "react-router-dom";
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
    if (
      window.scrollY >= window.innerHeight - 100 &&
      window.scrollY < 2 * window.innerHeight
    ) {
      document.getElementById("link-2").classList.remove("link-hover");
      document.getElementById("link-1").classList.add("link-hover");
    } else if (window.scrollY > 2 * window.innerHeight) {
      document.getElementById("link-1").classList.remove("link-hover");
      document.getElementById("link-2").classList.add("link-hover");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <div className="nav-container">
        <div className="main-nav">
          <div className="nav-image">
            <img src={navlogo} />
          </div>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li>
                <a id="link-1" href="#AboutUs">
                  About us
                </a>
              </li>

              <li>
                <a id="link-2" href="#howItWorks">
                  How it works
                </a>
              </li>

              <Link to="/contact-us">
                <li>
                  <a id="link-3" href="#">
                    Contact us
                  </a>
                </li>
              </Link>
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
                    <a onClick={() => setShowMenu(true)} href="#AboutUs">
                      About us
                    </a>
                    <hr></hr>
                  </li>
                </div>
                <div className="burger-list-item">
                  <li>
                    <a onClick={() => setShowMenu(true)} href="#howItWorks">
                      How it works
                    </a>
                    <hr></hr>
                  </li>
                </div>
                <div className="burger-list-item">
                  <li>
                    <a onClick={() => setShowMenu(true)} href="#">
                      Contact us
                    </a>
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
