import React from "react";
import "./Home.css";
import logo from "../../img/logoseatrack2.png";
import video from "../../vid/waves.mp4";
export default function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <div id="home-logo-background">
          
          <section class="container">
          <video autoPlay loop muted id="home-video-background">
            <source src={video} type="video/mp4" />
          </video>
            <div class="wave"></div>
            <div id="home-logo-wrap">
            <img src={logo} alt="logo" className="home-logo" />
            <h3>
              Welcome to the <b id="home-future-snippet">future</b> of Debris
              tracking.
            </h3>
          </div>
          </section>
          
        </div>
      </header>
    </div>
  );
}
