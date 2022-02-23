import "./App.css";
import { useWeatherData } from "./hooks/useWeatherData.js";

function App() {
  const { data } = useWeatherData("santo domingo", {
    //
    units: "metric",
    //
  });
  return (
    <div className="app-container">
      <h1>Weather</h1>
    </div>
  );
}

export default App;
