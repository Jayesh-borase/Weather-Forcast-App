import { useState } from "react";
import SearchBox from "./searchBox";
import InfoBox from "./infoBox";
import "./App.css";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Pune",
    humidity: 74,
    temp: 18.94,
    tempMin: 18.94,
    tempMax: 20.22,
    weather: "clear sky",
  });

  let updateInfo = (result) => {
    setWeatherInfo(result);
  };

  return (
    <>
      <h2 className="app-title">Weather App</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </>
  );
}
