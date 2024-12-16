import React, { useEffect } from "react";
import L from "leaflet";
import "./MapView.css"; // Add your custom styling for the map here

const MapView: React.FC<{ is3D: boolean }> = ({ is3D }) => {
  useEffect(() => {
    const map = L.map("map", {
      center: [51.505, -0.09], // Set the initial center coordinates
      zoom: 13,
    });

    // Add tile layer (e.g., OpenStreetMap)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

    // Optional: Set up 3D features or interactions when the map switches to 3D
    if (is3D) {
      map.getContainer().style.transform = "perspective(500px) rotateX(20deg)";
    } else {
      map.getContainer().style.transform = "none";
    }

    return () => {
      map.remove(); // Clean up the map when the component unmounts
    };
  }, [is3D]);

  return <div id="map" style={{ height: "100%", width: "100%" }} />;
};

export default MapView;