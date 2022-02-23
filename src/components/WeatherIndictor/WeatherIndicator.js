import React from "react";
import WeekDay from "./WeekDay/WeekDay.js";
import WeatherImage from "./WeatherImage.js";
import TemperatureGroup from "./TemperatureGroup/TemperatureGroup.js";

function WeatherIndicator({ data, today }) {
  return (
    <div className={`indicator ${today ? "today" : ""}`}>
      <WeekDay />
      <WeatherImage />
      <TemperatureGroup />
    </div>
  );
}

export default WeatherIndicator;
