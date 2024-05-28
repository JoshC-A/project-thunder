import * as React from "react";
import { Weather } from "../../types/weather.type";

interface WeatherAndSharesProps {
  username: string;
  weather: Weather;
}

export const WeatherAndSharesTemplate: React.FC<
  Readonly<WeatherAndSharesProps>
> = ({ username, weather }) => (
  <div>
    <h1>Welcome, {username}!</h1>
    <p>It is {weather.temperature} degrees celsius</p>
    <p>It feels like {weather.feels_like}</p>
  </div>
);
