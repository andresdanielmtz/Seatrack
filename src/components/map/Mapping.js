import React from "react";
import "./Map.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import Overlay from "ol/Overlay.js";
import { fromLonLat } from "ol/proj.js";
import "ol/ol.css";
import file from "./file.json";

export default class MapaCool extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [0, 0],
      zoom: 0,
    };
  }

  componentDidMount() {
    const map = new Map({
      target: "map-container",
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

    let mX = -110.98806195581238;
    let mY = 29.07467654309407;

    /* Array [ 3236578.1877563675, NaN ] */

    const martin = [mX, mY];
    const martinCasaCoords = fromLonLat(martin, "EPSG:3857");
    // {console.log(martinCasaCoords)}

    var martinCasa = new Overlay({
      position: martinCasaCoords,
      positioning: "center-center",
      element: element,
      stopEvent: false,
      name: "Casa de Martin",
      onclick: function () {
        console.log("Casa de Martin");
      }
    });
    map.addOverlay(martinCasa);


    // print all coords from json file 
    for (i = 0; i < file.users.length; i++) {
      let division = document.createElement("div");
      division.innerHTML =
        '<img click = {console.log(":)} src="https://cdn.mapmarker.io/api/v1/fa/stack?size=50&color=DC4C3F&icon=fa-microchip&hoffset=1" />';
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
  }

  render() {
    return (
      <div
        style={{ height: "100vh", width: "100%" }}
        id="map-container"
        className="map-container"
      />
    );
  }
}
