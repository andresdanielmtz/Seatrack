import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home/Home.js";
import About from "./components/about/About.js";
import MapaCool from "./components/map/Mapping.js";

function App() {

  const [profileData, setProfileData] = useState([{}])

  useEffect(() => {
    fetch("/data").then(
      res => res.json()
    ).then(
      profileData => {
        setProfileData(profileData)
        console.log(profileData)
        console.log(profileData.id)
      }
    )
  }, [])

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                {" "}
                <Link to="/">Home</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/map">Map</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/about">About</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/login">Login</Link>{" "}
              </li>
            </ul>
          </nav>
        </header>
        <div className="App-body">
          <Routes>
            <Route path="/" element={<Home username={profileData.username} />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/map" element={<MapaCool />}></Route>
            <Route path="/login"></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;