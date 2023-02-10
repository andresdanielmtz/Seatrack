import React, { useRef, useEffect, useState } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import Overlay from "ol/Overlay.js";
import { fromLonLat } from "ol/proj.js";
import file from "./file.json";
import "ol/ol.css";

const MapComponent = () => {
  const mapRef = useRef(null);
  const [profileData, setProfileData] = useState([{}]);

  useEffect(() => {
    fetch("/data")
      .then((res) => res.json())
      .then((profileData) => {
        setProfileData(profileData);
        console.log(profileData.username);
      });
  }, []);
  console.log(profileData.img);
  console.log(profileData.coords);

  const [map, setMap] = useState(null);

  useEffect(() => {
    if (!map) {
      const newMap = new Map({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: [0, 0],
          zoom: 1,
        }),
      });
      setMap(newMap);
    }
  }, [map]);

  const addMarkers = () => {
    try {
      for (let i = 0; i < file.users.length; i++) {
        let division = document.createElement("div");
        division.innerHTML = '<img src="https://i.imgur.com/tCxXAkm.png" />';
        let coordinates = [
          file.users[i].coordinates.lng,
          file.users[i].coordinates.lat,
        ];
        const translatedCoordinates = fromLonLat(coordinates);
        let jsonOverlay = new Overlay({
          position: translatedCoordinates,
          positioning: "center-center",
          element: division,
          stopEvent: true,
        });
        map.addOverlay(jsonOverlay);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const add_marker_from_json = (coords) => {
    try {
      let division = document.createElement("div");
      division.innerHTML = '<img src="https://i.imgur.com/tCxXAkm.png" />';
      let coordinates = [coords.lng, coords.lat];
      const translatedCoordinates = fromLonLat(coordinates);
      let jsonOverlay = new Overlay({
        position: translatedCoordinates,
        positioning: "center-center",
        element: division,
        stopEvent: true,
      });
      map.addOverlay(jsonOverlay);
    } catch (error) {
      console.log(error);
    }
  };

  const addMarkerInput = () => {
    try {
      let division = document.createElement("div");
      division.innerHTML = '<img src="https://i.imgur.com/tCxXAkm.png" />';
      let lat = prompt("Enter latitude");
      let lng = prompt("Enter longitude");
      if (lat === null || lng === null) {
        return;
      } // not coords on [0,0] so it doesn't show up
      let coordinates = [lng, lat];
      const translatedCoordinates = fromLonLat(coordinates);
      let jsonOverlay = new Overlay({
        position: translatedCoordinates,
        positioning: "center-center",
        element: division,
        stopEvent: true,
      });
      map.addOverlay(jsonOverlay);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          addMarkerInput();
        }}
      >
        Click
      </button>
      <div style={{ height: "100vh", width: "200vh" }} ref={mapRef} />
    </div>
  );
};
export default MapComponent;
