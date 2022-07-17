import "./SeasonDisplay.css";

import "./SeasonDisplay.css";

import React from "react";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun",
  },
  winter: {
    text: "Brr, it's cold!",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat >= 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive loading ${iconName} icon`} />
      <h1 className='time'>{props.time}</h1>
      <h1>{text}</h1> <br />
      <h1 className='location'>
        Lat: {props.lat} Long: {props.lng}
      </h1>
      <i className={`icon-right massive loading ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
