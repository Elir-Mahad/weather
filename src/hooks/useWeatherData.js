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

const useWeatherData = (city, options) => {
  //
  const [isLoading, setIsLoading] = useState(true);
  //
  const [error, setError] = useState(null);
  //
  const [data, setData] = useState();
  //

  const apiUrl = createApiUrl(city, options);
  //

  useEffect(() => {
    //
    const getWeatherData = async () => {
      // The constant getweather data is the custom hook
      try {
        //
        const res = await fetch(apiUrl);
        // fetch url
        if (!res.ok) {
          // if the response was not successful
          throw new Error(`The status of the response is: ${res.status}`);
          //    show this error
        }
        const data = await res.json();
        // console.log(data)
        // this log will show you all the unfiltered data

        const dataArr = data.list //
          // the const dataArr stores a process
          // enter the data object
          // enter the list property

          // the list property contains an array of 40 objects
          // 8 objects are dedicated for each day
          // there are a total of 5 days captured
          // the current day + 4 coming days

          // each object contains
          // the weather data at 3 hour intervals
          // time slots: 0, 3, 6, 9, 12, 15, 18, 21

          .filter(isDesiredIndex)
          // filter the list array
          // using the isDesiredIndex

          // this will output 5 objects
          // each object will contain the weather data for each day at the 12 pm time slot
          // and all other objects will be excluded

          // you can see the 5 objects by
          // add this log console.log(dataArr)
          // at the end of the below mapping blog

          .map((singleDayData) => {
            // map all 5 objects
            // each object containing the following properties: dt, main, weather, clouds, wind, visibility, pop, rain, sys
            // these properties have values such as arrays, objects, strings, etc

            // console.log(singleDayData)
            // this log will output all 5 objects

            const { dt_txt, main, weather } = singleDayData;
            // from each object we will use only
            // the dt_text, main, and weather properties

            // dt_text property has the value of a date string
            // main property has the value of an object that contains different temperatures
            // weather property has the value of an array that contains a object which contains icon id and description

            const icon = weather[0].icon
              // The const icon stores a process
              // enter the weather property
              // enter the array
              // grab the value of the icon property
              .slice(0, -1);
            // slice the last element (letter d)

            const min = main.temp_min
              // The const min stores a process
              // enter the main property
              // grab the value of the temp_min property
              .toFixed();
            // convert the number to a string
            //and round it to the nearest non-decimal number

            const max = main.temp_max
              // The const max stores a process
              // enter the main property
              // grab the value of the temp_max property
              .toFixed();
            // convert the number to a string
            //and round it to the nearest non-decimal number

            const date = new Date(dt_txt)
              // The const date stores a process
              // create a new data instance
              // of the value that's in the dt_txt property
              .toLocaleDateString("en-US", { weekday: "short" });
            // use the toLocaleDateString method to return
            // a representation of the data thats in english
            // and that is the shortened weekday

            return { date, max, min, icon };
            // return the dataArr
            // which will include an object
            // that contains the 4 properities
            // date, max, min, icon
          });

        // console.log(dataArr)
        // This log will show 5 objects
        // each object will contain 4 properities
        // date, max, min, icon

        setData(dataArr);
        // set the value of the constant data as the dataArr
        setIsLoading(false);
        // set value of the const isLoading to false
      } catch (err) {
        // if there is an error
        setError(err.message);
        // sett the value of the const error to the erro message
        setIsLoading(false);
        // set the value of the const isLoading to false
      }
    };
    getWeatherData();
  }, [apiUrl]);

  return {
    //
    loading: isLoading,
    //
    error,
    //
    data,
    //
  };
};

export { useWeatherData };
