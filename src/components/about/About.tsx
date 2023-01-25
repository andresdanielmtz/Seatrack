import React from 'react'; 
import "./About.css";

function About() {
    return (
      <div className="about-wrap">
        <h1 id = "about-who"> Who are we?</h1>
        <p id = "about-content">
          {" "}
          We are a group of CS Students, from <a rel="noopener noreferrer" target = "_blank" href = "https://www.openstreetmap.org/#map=12/29.0918/-110.9444"> Hermosillo, Sonora,</a> who want to make
          the world a better place.
          <br />
        </p> {/* This should be more than enough I'd say.*/}
      </div>
    );
  }

export default About;
