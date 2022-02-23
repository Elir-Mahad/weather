import React from "react";
import WeatherIndicator from "../WeatherIndictor/WeatherIndicator";
//
function WeatherIndicatorGroup({ data }) {
  return (
    <div className="indicator-group">
      {data.map((dataDay, idx) => (
        //
        <WeatherIndicator
          //
          key={dataDay.date}
          //
          today={idx === 0}
          //
          data={dataDay}
          //
        />
      ))}
    </div>
  );
}

export default WeatherIndicatorGroup;
