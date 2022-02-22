import React, { useState, useEffect } from "react";
//

function Weather() {
    //
    const [weath, setWeath] = useState();
    const [error, setError] = useState();
    //
    const API_URL = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=current,minutely,hourly,alerts&appid=37f731d78f30eee5072bbb693ddacb40";
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
    return (
        <div>
            <h1>Weather</h1>
        </div>
    )
}

export default Weather
