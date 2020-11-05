import React from "react";

import "./style.css";
import hourGlass from "../../../assets/hourglass.png";

export function LoadingScreen() {
  return (
    <div id="loading-screen" className="centralized">
      <div id="hourglass-container">
        <img id="hourglass" src={hourGlass} alt="Time" />
      </div>
      <h1 id="loading-message">
        Loading
        <span id="loading-dots">...</span>
      </h1>
    </div>
  );
}
