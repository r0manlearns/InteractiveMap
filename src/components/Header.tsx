import React from "react";

interface HeaderProps {
  toggleView: () => void;
  view: string;
}

const Header: React.FC<HeaderProps> = ({ toggleView, view }) => {
  return (
    <header className="header">
      <h1>Interactive Map</h1>
      <button onClick={toggleView}>
        Switch to {view === "2D" ? "3D" : "2D"} View
      </button>
    </header>
  );
};

export default Header;
