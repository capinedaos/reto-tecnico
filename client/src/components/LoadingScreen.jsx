import React from "react";
import "../assets/styles/LoadingScreen.css"

const LoadingScreen = () => {
  return (
    <div className="overlay">
      <div className="lds-hourglass"></div>
    </div>
  );
};

export default LoadingScreen;
