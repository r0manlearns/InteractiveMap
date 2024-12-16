import React, { useState } from "react";
import Header from "./components/Header";
import MapView from "./components/MapView";
import Sidebar from "./components/Sidebar";
import "./App.css"; // Global styles
import "./index.css"; // Global CSS (for the layout)

const App: React.FC = () => {
  const [is3D, setIs3D] = useState(false); // State to toggle between 2D and 3D modes

  const toggleMapView = () => {
    setIs3D(!is3D);
  };

  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="map-container">
          <button className="toggle-button" onClick={toggleMapView}>
            Toggle to {is3D ? "2D" : "3D"}
          </button>
          <MapView is3D={is3D} />
        </div>
      </div>
    </div>
  );
};

export default App;
