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

/**
 * Below we will create a custom hook that will produce the weather data for the given city.
 * It will contain a 'loading' boolean and an 'error' variable.
 *
 * The data collected is from the openweathermap API (https://openweathermap.org/).
 * It holds an array of 5 objects that represent the weather in the current day and the next 4 days.
 *
 * @param {string} city
 * the name of a city.
 * @param {Object} options
 * @property {string} [options.units='standard']
 * the units in which the min and max temperature will be displayed could be 'standard', 'metric' or 'imperial'
 * @returns {Object}
 * the return object has the following properties:
 * @property {string|null} error
 * A string with an error message if the request failed. Else null.
 * @property {boolean} loading
 * true if the request to the API has resolved (successfully or failed). Else false.
 * @property {Object[]} data
 * an array of objects, each object represents a day of weather data, and contains the following properties:
 * date: the short weekday name for the day that is being represented.
 * icon: a string representing the icon to display according to the image name located in the "public/assets/images" folder.
 * min: the min temperature for that day.
 * max: the max temperature for that day.
 */
