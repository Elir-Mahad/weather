import React from "react";

const WEATHER_ICON_DESCRIPTION = {
  "01": "clear sky",
  "02": "few clouds",
  "03": "scattered clouds",
  "04": "broken clouds",
  "09": "shower rain",
  10: "rain",
  11: "thunderstorm",
  13: "snow",
  50: "mist",
};

function WeatherImage({ id }) {
  return (
    <div>
      <img
        //
        src={`./assets/images/${id}.png`}
        //
        alt={WEATHER_ICON_DESCRIPTION[id]}
      />
    </div>
  );
}

export default WeatherImage;
