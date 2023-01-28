import React from "react";
import "./About.css";

// show the title of a div when hovering on it, that follows the mouse
// https://stackoverflow.com/questions/10607688/how-to-show-a-tooltip-when-hovering-over-a-div


function About() {
  return (
    <div className="about-wrap">
      <h1 id="about-who"> Who are we?</h1>
      <p id="about-content">
        {" "}
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
        <div id="about-info" title="Tooltip for the example image">
          We want to revolutionize the way people see the amounts of trash we
          produce and release into the environment, year by year.
        </div>
      </p>{" "}
      {/* This should be more than enough I'd say.*/}
    </div>
  );
}

export default About;
