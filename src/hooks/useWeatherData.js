import { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

/**
 * The weather data comes with 8 3h forcast per day.
 * We only care about one per day.
 * so we can use this function to filter only what we want.
 */

const isDesiredIndex = (_, i) => i % 8 === 0;

/**
 * Given the name of a city.
 * And an optional options object.
 * Produce a string
 * of the appropiate OpenWeatherMap API url
 * to get the desired data.
 */
const createApiUrl = (city, { units = "standard" }) => {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${API_KEY}`;
};
