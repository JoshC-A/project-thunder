import * as React from "react";
import { Weather } from "../../types/weather.type";
import { Share } from "../../types/share.type";

interface WeatherAndSharesProps {
  username: string;
  weather: Weather;
  shareData: Share;
}

export const WeatherAndSharesTemplate: React.FC<
  Readonly<WeatherAndSharesProps>
> = ({ username, weather, shareData }) => (
  <div>
    <h1>Welcome, {username}!</h1>
    <p>It is {weather.temperature} degrees celsius</p>
    <p>It feels like {weather.feels_like}</p>
    <p>
      On their last trading day {shareData.name} closed at £{shareData.close}
    </p>
  </div>
);
