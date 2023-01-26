import React from "react";
import "./Map.css";
import { Map, View, } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import Overlay  from "ol/Overlay.js";
import { fromLonLat } from "ol/proj.js"; 
import "ol/ol.css";

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
        zoom: 0,
      }),
    });

    for (var i = 0; i < 10; i++) {
      var element = document.createElement('div');
      element.innerHTML = '<img src="https://cdn.mapmarker.io/api/v1/fa/stack?size=50&color=DC4C3F&icon=fa-microchip&hoffset=1" />';
      var marker = new Overlay({
          position: [i * 500000, i * 500000],
          positioning: 'center-center',
          element: element,
          stopEvent: false
      });
      map.addOverlay(marker);
    }
    
    var element = document.createElement('div');
    element.innerHTML = '<img src="https://cdn.mapmarker.io/api/v1/fa/stack?size=50&color=DC4C3F&icon=fa-microchip&hoffset=1" />';
  
    let mX = -110.98806195581238
    let mY = 29.07467654309407

    {/* Array [ 3236578.1877563675, NaN ] */}
    const martin = [mX, mY]
    const martinCasaCoords = fromLonLat(martin, 'EPSG:3857');
    {console.log(martinCasaCoords)}

    var martinCasa = new Overlay( { 
      position: martinCasaCoords,
      positioning: 'center-center',
      element: element, 
      stopEvent: false,
      name: "Casa de Martin"
  
    });
    map.addOverlay(martinCasa);

    {/* It just works... */}
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
