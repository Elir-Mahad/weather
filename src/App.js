import "./App.css";
import { useWeatherData } from "./hooks/useWeatherData.js";
import Loading from "./components/Loading/Loading.js";

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
    </div>
  );
}

export default App;
