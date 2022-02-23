import React from "react";
import WeekDay from "./WeekDay/WeekDay.js";
import WeatherImage from "./WeatherImage.js";
import TemperatureGroup from "./TemperatureGroup/TemperatureGroup.js";

function WeatherIndicator() {
  return (
    <div>
      <WeekDay />
      <WeatherImage />
      <TemperatureGroup />
    </div>
  );
}

export default WeatherIndicator;
