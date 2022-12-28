import React from "react";
import "./Home.css";
import "font-awesome/css/font-awesome.min.css";
import logo from "../../Images/logo.png";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home-container">
          <div className="home-title">
            <img src={logo} alt="logo" />
          </div>
          <p style={{ textAlign: "center" }}>
            Phone Pros mission is to create an opportunity for Wholesallers to
            tackle their growth & profitability without the loss of quality or
            standards with the lowest cost per acquisition and highest return on
            investment.
          </p>
          <div className="home-btns">
            <button className="home-btn">GET STARTED</button>
            <button className="home-btn">LEARN MORE</button>
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
                {" "}
                We are a call center especialized in real industry
              </p>
              <p className="why-us-card-text"></p>
            </div>
            <div className="why-us-card">
              <i className="fas fa-check-circle"></i>
              <p className="why-us-card-title">
                We have years of experience in the field
              </p>
              <p className="why-us-card-text"></p>
            </div>
            <div className="why-us-card">
              <i className="fas fa-check-circle"></i>
              <p className="why-us-card-title">
                Starting from generating Wholsalling leads, Leads management
              </p>
              <p className="why-us-card-text"></p>
            </div>
            <div className="why-us-card">
              <i className="fas fa-check-circle"></i>
              <p className="why-us-card-title">
                Leads Quality control, Negotiate pricing, Calulating ARV, and
                getting the lead under contract.
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Quisquam voluptates, quod, quia, voluptate quae voluptatem
            </p>
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
              <i className="fa-solid fa-cart-shopping"></i>

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
              <i className="fa-solid fa-credit-card"></i>

              <h3 className="how-it-works-card-title">Seal the deal !</h3>
              <p className="how-it-works-card-text">
                Contact us through contact us section
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
