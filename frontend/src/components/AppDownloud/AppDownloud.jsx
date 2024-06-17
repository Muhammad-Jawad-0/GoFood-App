import React from "react";
import "./AppDownloud.css";
import {assets} from "../../assets/assets"

const AppDownloud = () => {
  return (
    <div className="app-downloud" id="app-downloud">
      <p>
        For Better Experience Downloud <br /> Tomato App
      </p>
      <div className="app-downloud-platforms">
        <img src={assets.play_store} alt="play_store" />
        <img src={assets.app_store} alt="app_store" />
      </div>
    </div>
  );
};

export default AppDownloud;
