import React from "react";

function TemperatureGroup({ min, max }) {
  return (
    <div className="temp-group">
      <p className="max-temp">max degree</p>
      <p> min degree</p>
    </div>
  );
}

export default TemperatureGroup;
