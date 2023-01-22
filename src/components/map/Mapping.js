import * as React from "react";
import Map, { NavigationControl } from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./Map.css";

export default function MapaGenial() {
  return (
    <div className="map-wrap">
      <p> Map Test Map Test </p> 
      <Map
        mapLib={maplibregl}
        initialViewState={{
          longitude: 27.54016655616425,
          latitude: -20.94496323506394, 
          zoom: 14,
        }}
        style={{ width: "1000px", height: "1000px" }}
        mapStyle="https://api.maptiler.com/maps/basic-v2/style.json?key=13xWI0yRcTyBVuoPyMJy"
      >
        <NavigationControl position="top-left" />
      </Map>
    </div>
  );
}
