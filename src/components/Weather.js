import React, { useState, useEffect } from "react";
//

function Weather() {
  //
  const [weath, setWeath] = useState();
  const [error, setError] = useState();
  //
  const API_URL =
    "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=current,minutely,hourly,alerts&appid=37f731d78f30eee5072bbb693ddacb40";
  //
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setWeath(data);
      })
      .catch((error) => setError(error));
  }, []);
  //
  if (weath === undefined) return <h1>Loading</h1>;
  if (error) console.log(error);
  //
  return (
    <div style={{ display: "flex" }}>
      {weath.daily.map((item) => (
        <div style={{ border: "1px solid black", margin: "1rem" }}>
          <p>max={item.dt}</p>
          <p>max={item.temp.max}</p>
          <p>min={item.temp.min}</p>
          <p>description = {item.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
}

export default Weather;
