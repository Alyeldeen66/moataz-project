import React, { useEffect, useState } from "react";
import "./NavBar.css";
import navlogo from "../../Images/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
  const location = useLocation();

  return (
    <div className="nav-container">
      <div className="main-nav">
        <div className="nav-image">
          <img src={navlogo} />
        </div>
        <div className="nav-links-container">
          <ul className="nav-links">
            {location.pathname == "/" ? (
              <li>
                <a id="link-1" href="#AboutUs">
                  About us
                </a>
              </li>
            ) : (
              <Link to="/">
                <li id="link-1">
                  {/* <a id="link-1" href="#"> */}
                  About us
                  {/* </a> */}
                </li>
              </Link>
            )}

            {location.pathname == "/" ? (
              <li>
                <a id="link-2" href="#howItWorks">
                  How it works
                </a>
              </li>
            ) : (
              <Link to="/">
                <li id="link-2">
                  {/* <a id="link-1" href="#"> */}
                  How it works
                  {/* </a> */}
                </li>
              </Link>
            )}

            <Link to="/contact-us">
              <li id="link-3">
                {/* <a id="link-3" href="#"> */}
                Contact us
                {/* </a> */}
              </li>
            </Link>
            <Link to="/services">
              <li id="link-3">
                {/* <a id="link-3" href="#"> */}
                Services
                {/* </a> */}
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
                {location.pathname == "/" ? (
                  <li>
                    <a href="#AboutUs" onClick={() => setShowMenu(true)}>
                      About us
                    </a>
                    <hr></hr>
                  </li>
                ) : (
                  <Link to="/">
                    <li>
                      {/* <a onClick={() => setShowMenu(true)} href="#AboutUs"> */}
                      About us
                      {/* </a> */}
                      <hr></hr>
                    </li>
                  </Link>
                )}
              </div>
              <div className="burger-list-item">
                {location.pathname == "/" ? (
                  <li>
                    <a href="#howItWorks" onClick={() => setShowMenu(true)}>
                      How it works
                    </a>
                    <hr></hr>
                  </li>
                ) : (
                  <Link to="/">
                    <li>
                      {/* <a onClick={() => setShowMenu(true)} href="#AboutUs"> */}
                      How it works
                      {/* </a> */}
                      <hr></hr>
                    </li>
                  </Link>
                )}
              </div>
              <div className="burger-list-item">
                <Link to="/contact-us" onClick={() => setShowMenu(true)}>
                  <li>
                    {/* <a onClick={() => setShowMenu(true)} href="#"> */}
                    Contact us
                    {/* </a> */}
                    <hr></hr>
                  </li>
                </Link>
              </div>

              <div className="burger-list-item">
                <Link to="/services">
                  <li>
                    {/* <a id="link-3" href="#"> */}
                    Services
                    {/* </a> */}
                  </li>
                </Link>
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
