import "./App.css";
import { useWeatherData } from "./hooks/useWeatherData.js";
import WeatherIndicatorGroup from "./components/WeatherIndicatorGroup/WeatherIndicatorGroup.js";
import Loading from "./components/Loading/Loading.js";
import ErrorDisplay from "./components/ErrorDisplay/ErrorDisplay.js";

function App() {
  const { data } = useWeatherData("santo domingo", {
    //
    units: "metric",
    //
  });
  return (
    <div className="app-container">
      <h1>Weather</h1>
      {loading && <Loading />}
      {error && <ErrorDisplay error={error} />}
      {data && !error && <WeatherIndicatorGroup data={data} />}
    </div>
  );
}

export default App;
