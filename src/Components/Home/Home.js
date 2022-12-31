import React from "react";
import "./Home.css";
import "font-awesome/css/font-awesome.min.css";
import logo from "../../Images/logo.png";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="home">
        <div className="home-container">
          <div className="home-title">
            <img src={logo} alt="logo" />
          </div>
          <p>
            Phone Pros mission is to create an opportunity for Wholesallers to
            tackle their growth & profitability without the loss of quality or
            standards with the lowest cost per acquisition and highest return on
            investment.
          </p>
          <div className="home-btns">
            <Link to="/services">
              <button className="home-btn">GET STARTED</button>
            </Link>
            <Link to="/contact-us">
              <button className="home-btn">LEARN MORE</button>
            </Link>
          </div>
        </div>
      </div>
      <section id="AboutUs" className="why-us">
        <div className="why-us-container">
          <h1 className="why-us-title">why choose phone pros?</h1>

          <div className="why-us-cards">
            <div className="why-us-card">
              <i className="fas fa-check-circle"></i>
              <p className="why-us-card-title">
                We are a call center especialized in real industry as we have
                years of experience in the field
              </p>
              <p className="why-us-card-text"></p>
            </div>
            <div className="why-us-card">
              <i className="fas fa-check-circle"></i>
              <p className="why-us-card-title">
                Generating Wholsalling leads, Leads Management
              </p>
              <p className="why-us-card-text"></p>
            </div>
            <div className="why-us-card">
              <i className="fas fa-check-circle"></i>
              <p className="why-us-card-title">
                Leads Quality control, Negotiate pricing
              </p>
              <p className="why-us-card-text"></p>
            </div>
            <div className="why-us-card">
              <i className="fas fa-check-circle"></i>
              <p className="why-us-card-title">
                Calulating ARV, and getting the lead under contract.
              </p>
              <p className="why-us-card-text"></p>
            </div>
          </div>
        </div>
      </section>

      <section id="howItWorks" className="how-it-works">
        <div className="how-it-works-container">
          <div className="how-it-works-title-container">
            <h2 className="how-it-works-title">HOW IT WORKS</h2>
          </div>

          <div className="how-it-works-cards">
            <div className="how-it-works-card hiw-1">
              <i className="fa-solid fa-arrow-pointer"></i>

              <h3 className="how-it-works-card-title">Press on get started</h3>
              <p className="how-it-works-card-text"></p>
            </div>
            <div className="how-it-works-animation anim1">
              <div className="how-it-works-animation-circle"></div>
              <div className="how-it-works-animation-circle"></div>
              <div className="how-it-works-animation-circle"></div>
              <div className="how-it-works-animation-circle"></div>
              <div className="how-it-works-animation-circle"></div>
            </div>
            <div className="how-it-works-card hiw-2">
              <i class="fa-solid fa-check-double"></i>

              <h3 className="how-it-works-card-title">Choose your package</h3>
              <p className="how-it-works-card-text">
                Choose one of our premium packages avaliable
              </p>
            </div>
            <div className="how-it-works-animation anim2">
              <div className="how-it-works-animation-circle"></div>
              <div className="how-it-works-animation-circle"></div>
              <div className="how-it-works-animation-circle"></div>
              <div className="how-it-works-animation-circle"></div>
              <div className="how-it-works-animation-circle"></div>
            </div>
            <div className="how-it-works-card hiw-3">
              <i class="fa-solid fa-handshake"></i>

              <h3 className="how-it-works-card-title">Seal the deal !</h3>
              <p className="how-it-works-card-text">
                Contact us through one of our social media platforms or email
              </p>
            </div>
            <div className="how-it-works-animation anim3">
              <div className="how-it-works-animation-circle"></div>
              <div className="how-it-works-animation-circle"></div>
              <div className="how-it-works-animation-circle"></div>
              <div className="how-it-works-animation-circle"></div>
              <div className="how-it-works-animation-circle"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
