import React, { useRef, useState } from "react";
import { dataHook } from "./hooks/WeatherDataHook";
import { WeatherComponent } from "./components/WeatherDataComponent";

export const WeatherApp = () => {
  const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
  const initialURLFetch = `https://api.openweathermap.org/data/2.5/weather?q=Lima&appid=${API_KEY}`;
  const cityInputRef = useRef<HTMLInputElement | null>(null);
  const [uRLFetch, setURLFetch] = useState<string>(initialURLFetch);
  const { dataWeather, isLoading, error } = dataHook(uRLFetch);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!cityInputRef.current) return;
    const cityName = cityInputRef.current.value;
    if (!cityName) {
      alert("Please enter a city name.");
      return;
    }
    setURLFetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
    );
  };

  return (
    <div className="container">
      <h1 className="titleApp">Weather Application</h1>
      <form className="formApp" onSubmit={handleSubmit}>
        <input type="text" ref={cityInputRef} name="city" />
        <button type="submit">Search</button>
      </form>
      {isLoading ? (
        <p className="loadingData">Loading...</p>
      ) : error ? (
        <p className="errorData">{error}</p>
      ) : dataWeather ? (
        <div className="weatherComponentContainer">
          <WeatherComponent dataWeather={dataWeather} />
        </div>
      ) : null}
    </div>
  );
};
