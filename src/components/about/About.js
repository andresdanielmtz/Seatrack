import React from "react";
import "./About.css";

function About() {
  return ( 
    <div className="about-wrap">
      <p id="about-content">
        <div id="about-intro">
          {" "}
          <h1 id="about-who"> Who are we?</h1>
          We are a group of CS Students, from{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.openstreetmap.org/#map=12/29.0918/-110.9444"
          >
            {" "}
            Hermosillo, Sonora,
          </a>{" "}
          who want to make the world a better place.
          <br />
          <div className="columns">
            <div className="column"> Based on Hermosillo, Sonora, we are a group of Computer Science Students that want to make the world a better place for everyone. </div>
            <div className="column"> There should be an image right over here</div>
          </div>
        </div>
      </p>{" "}
    </div>
  );
}

export default About;
