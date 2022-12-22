import React from "react";
import "./Home.css";
import "font-awesome/css/font-awesome.min.css";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home-container">
          <h1 className="home-title">COMPANY LOGO</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Quisquam voluptates, quod, quia, voluptate quae voluptatem
          </p>
          <div className="home-btns">
            <button className="home-btn">GET STARTED</button>
            <button className="home-btn">LEARN MORE</button>
          </div>
        </div>
      </div>
      <section className="why-us">
        <hr />
        <h1 className="why-us-title">why choose phone pros?</h1>
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
            <div className="how-it-works-title-container">
              <h2 className="how-it-works-title">HOW IT WORKS</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Quisquam voluptates, quod, quia, voluptate quae voluptatem
              </p>
            </div>

            <div className="how-it-works-cards">
              <div className="how-it-works-card hiw-1">
                <i class="fa-solid fa-arrow-pointer"></i>

                <h3 className="how-it-works-card-title">Card Title</h3>
                <p className="how-it-works-card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam voluptates, quod, quia, voluptate quae voluptatem
                  quibusdam voluptas quidem quos nemo quas. Quisquam, quae.
                </p>
              </div>
              <div className="how-it-works-animation anim1">
                <div className="how-it-works-animation-circle"></div>
                <div className="how-it-works-animation-circle"></div>
                <div className="how-it-works-animation-circle"></div>
              </div>
              <div className="how-it-works-card hiw-2">
                <i class="fa-solid fa-cart-shopping"></i>

                <h3 className="how-it-works-card-title">Card Title</h3>
                <p className="how-it-works-card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam voluptates, quod, quia, voluptate quae voluptatem
                  quibusdam voluptas quidem quos nemo quas. Quisquam, quae.
                </p>
              </div>
              <div className="how-it-works-animation anim2">
                <div className="how-it-works-animation-circle"></div>
                <div className="how-it-works-animation-circle"></div>
                <div className="how-it-works-animation-circle"></div>
              </div>
              <div className="how-it-works-card hiw-3">
                <i class="fa-solid fa-credit-card"></i>

                <h3 className="how-it-works-card-title">Card Title</h3>
                <p className="how-it-works-card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam voluptates, quod, quia, voluptate quae voluptatem
                  quibusdam voluptas quidem quos nemo quas. Quisquam, quae.
                </p>
              </div>
              <div className="how-it-works-animation anim3">
                <div className="how-it-works-animation-circle"></div>
                <div className="how-it-works-animation-circle"></div>
                <div className="how-it-works-animation-circle"></div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Home;
