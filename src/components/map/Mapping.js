import React, { useRef, useEffect } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import Overlay from "ol/Overlay.js";
import { fromLonLat } from "ol/proj.js";
import file from "./file.json";
import 'ol/ol.css'

const MapComponent = () => {
  const mapRef = useRef(null);

  useEffect(() => {

    const map = new Map({
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

    for (var i = 0; i < 10; i++) {
      var element = document.createElement("div");
      element.innerHTML =
        '<img src="https://cdn.mapmarker.io/api/v1/fa/stack?size=50&color=DC4C3F&icon=fa-microchip&hoffset=1" />';
      var marker = new Overlay({
        position: [i * 500000, i * 500000],
        positioning: "center-center",
        element: element,
        stopEvent: false,
      });
      map.addOverlay(marker);
    }

    try { 
    // print all coords from json file
    for (i = 0; i < file.users.length; i++) {
      let division = document.createElement("div");
      division.innerHTML =
        '<img click = {console.log(":)} src="https://i.imgur.com/tCxXAkm.png" />';
      let coordinates = [
        file.users[i].coordinates.lng,
        file.users[i].coordinates.lat,
      ];
      console.log(coordinates);
      const translatedCoordinates = fromLonLat(coordinates);
      console.log(translatedCoordinates);
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
  
  }, []);


  return (
    <div style={{ height: "100vh", width: "100%" }} ref={mapRef}>
    </div>
  );
};
export default MapComponent;
