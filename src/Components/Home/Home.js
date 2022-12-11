import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "font-awesome/css/font-awesome.min.css";

function Home() {
  return (
    <>
      <div className="home"></div>
      <section className="why-us">
        <hr />
        <h1 className="why-us-title">WHY CHOOSE COMPANY?</h1>
        <hr />
        <div className="why-us-container">
          <div className="why-us-cards">
            <div className="why-us-card">
              <i className="fas fa-check-circle"></i>
              <h2 className="why-us-card-title">Card Title</h2>
              <p className="why-us-card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptates, quod, quia, voluptate quae voluptatem
                quibusdam voluptas quidem quos nemo quas. Quisquam, quae.
              </p>
            </div>
            <div className="why-us-card">
              <i className="fas fa-check-circle"></i>
              <h2 className="why-us-card-title">Card Title</h2>
              <p className="why-us-card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptates, quod, quia, voluptate quae voluptatem
                quibusdam voluptas quidem quos nemo quas. Quisquam, quae.
              </p>
            </div>
            <div className="why-us-card">
              <i className="fas fa-check-circle"></i>
              <h2 className="why-us-card-title">Card Title</h2>
              <p className="why-us-card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptates, quod, quia, voluptate quae voluptatem
                quibusdam voluptas quidem quos nemo quas. Quisquam, quae.
              </p>
            </div>
            <div className="why-us-card">
              <i className="fas fa-check-circle"></i>
              <h2 className="why-us-card-title">Card Title</h2>
              <p className="why-us-card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptates, quod, quia, voluptate quae voluptatem
                quibusdam voluptas quidem quos nemo quas. Quisquam, quae.
              </p>
            </div>
          </div>
        </div>

        <section className="how-it-works">
          <div className="how-it-works-container">
            <hr />
            <h2 className="how-it-works-title">HOW IT WORKS</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Quisquam voluptates, quod, quia, voluptate quae voluptatem
            </p>
            <hr />

            <div className="how-it-works-cards">
              <div className="how-it-works-card">
                <div className="how-it-works-card-icon">
                  <i class="fa-solid fa-arrow-pointer"></i>
                </div>
                <h3 className="how-it-works-card-title">Card Title</h3>
                <p className="how-it-works-card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam voluptates, quod, quia, voluptate quae voluptatem
                  quibusdam voluptas quidem quos nemo quas. Quisquam, quae.
                </p>
              </div>
              <div className="how-it-works-card">
                <div className="how-it-works-card-icon">
                  <i class="fa-solid fa-arrow-pointer"></i>
                </div>
                <h3 className="how-it-works-card-title">Card Title</h3>
                <p className="how-it-works-card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam voluptates, quod, quia, voluptate quae voluptatem
                  quibusdam voluptas quidem quos nemo quas. Quisquam, quae.
                </p>
              </div>
              <div className="how-it-works-card">
                <div className="how-it-works-card-icon">
                  <i class="fa-solid fa-arrow-pointer"></i>
                </div>
                <h3 className="how-it-works-card-title">Card Title</h3>
                <p className="how-it-works-card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam voluptates, quod, quia, voluptate quae voluptatem
                  quibusdam voluptas quidem quos nemo quas. Quisquam, quae.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Home;
