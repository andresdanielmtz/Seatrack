import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-wrap">
      <p id="about-content">
        <div id="about-intro">
          {" "}
          <h1 id="about-who"> Who are we?</h1>
          <div className="columns">
            <div className="column">
              {" "}
              Based on Hermosillo, Sonora. We are a group of Computer Science
              Students that want to make the world a better place for everyone. For this very reason we have started making positive actions to contribute to our society through the use of technology, expanding the capabilities of what is possible through collaboration into creating a better society.{" "}
            </div>
            <div className="column">
              {" "}
              There should be an image right over here
            </div>
          </div>
        </div>
      </p>{" "}
    </div>
  );
}

export default About;
