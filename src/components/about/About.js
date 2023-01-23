import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-wrap">
      <h1 id = "about-who"> Who are we?</h1>
      <p id = "about-content">
        {" "}
        We are a group of CS Students, from <a href = "https://www.google.com/maps/place/Hermosillo,+Sonora/@29.0878117,-111.0155273,12.3z/data=!4m5!3m4!1s0x86ce84687adfaee5:0xb33d5395e9887ff9!8m2!3d29.0729673!4d-110.9559192"> Hermosillo, Sonora,</a> who want to make
        the world a better place.
        <br />
      </p>
    </div>
  );
}
