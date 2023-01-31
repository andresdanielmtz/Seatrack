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
          <div class="columns">
            <div class="column">This is very cool!</div>
            <div class="column">This is another cool thing</div>
          </div>
        </div>
      </p>{" "}
    </div>
  );
}

export default About;
