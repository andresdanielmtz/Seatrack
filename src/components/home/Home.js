import React from "react";
import "./Home.css";
import logo from "../../img/logoseatrack.png";

export default function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <img src={logo} alt="logo" className="home-logo" />
        <h3>
          Welcome to the <b id="home-future-snippet">future</b> of Debris
          tracking.
        </h3>
      </header>
    </div>
  );
}
