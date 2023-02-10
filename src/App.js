import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home/Home.js";
import About from "./components/about/About.js";
import MapaCool from "./components/map/Mapping.js";
import Login from "./components/login/Login.js";

function VerifyLogin() {
  const [profileData, setProfileData] = useState([{}]);
  const [logged, setLogged] = useState(false);

  useEffect(() => { // This is a hook, it's a function that runs when the component is rendered. It is also a function that takes info from the server and stores it in a variable.
    fetch("/data")
      .then((res) => res.json())
      .then((profileData) => {
        setProfileData(profileData);
        console.log(profileData);
        console.log(profileData.id);
      });
  }, []);

  useEffect(() => {
    if (profileData.username) {
      setLogged(true);
      }
      }, [profileData.username])
        
      if (logged) {
        return (
          <li>
            {" "}
            <Link to="/logout">Logout</Link>{" "}
          </li>
        );
      }
      console.log(logged)
      console.log(profileData.username)
      console.log(typeof(profileData.username
        ))

  if (!profileData.username) {
    return (
      <li>
        {" "}
        <Link to="/login">Login</Link>{" "}
      </li>
    );
  }
}

function App() {
  const [profileData, setProfileData] = useState([{}]);

  useEffect(() => {
    fetch("/data")
      .then((res) => res.json())
      .then((profileData) => {
        setProfileData(profileData);
        console.log(profileData);
        console.log(profileData.id);
      });
  }, []);

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
              <VerifyLogin/>
            </ul>
          </nav>
        </header>
        <div className="App-body">
          <Routes>
            <Route
              path="/"
              element={<Home username={profileData.username} />}
            ></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/map" element={<MapaCool />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
