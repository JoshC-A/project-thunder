import { inngest } from "../client";
import getSupabaseServerActionClient from "../../app/core/supabase/action-client";

const createSupabaseClient = () =>
  getSupabaseServerActionClient({ admin: true });

const LOCATION = "BS1";
const COMPANY_NAME = "Rolls Royce";
const TICKER = "RR.LON";

const TIME_SERIES_DAILY = "Time Series (Daily)";
const METADATA = "Meta Data";
const LAST_REFRESHED = "3. Last Refreshed";
const OPEN = "1. open";
const CLOSE = "4. close";

export const getWeatherSharesData = inngest.createFunction(
  { id: "getWeatherSharesData" },
  // { event: "data/weather.shares" },
  { cron: "0 09 * * 1-5" },

  async ({ event, step }) => {
    const weatherData = await step.run("weather data", async () => {
      const supabase = createSupabaseClient();

      // Would be nice to create a URL in code and add search params
      const res = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${LOCATION}&aqi=no`
      );
      const { current, location } = await res.json();

      const { data, error } = await supabase
        .from("weather")
        .insert({
          location: location.name,
          temperature: current.temp_c,
          feels_like: current.feelslike_c,
          condition: current.condition.text,
          icon: current.condition.icon,
          wind_mph: current.wind_mph,
          uv_index: current.uv,
        })
        .select("*");

      if (error) {
        console.log(error);
        throw new Error("Error saving weather data");
      }

      return data;
    });

    const shareData = await step.run("get share data", async () => {
      const res = await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${TICKER}&outputsize=compact&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`
      );

      const shareData = await res.json();

      const lastRefreshed = shareData[METADATA][LAST_REFRESHED]; // When the data was last refreshed.
      const openPrice = shareData[TIME_SERIES_DAILY][lastRefreshed][OPEN];
      const closePrice = shareData[TIME_SERIES_DAILY][lastRefreshed][CLOSE];

      const supabase = createSupabaseClient();

      const { data, error } = await supabase
        .from("stocks")
        .insert({
          name: COMPANY_NAME,
          ticker: TICKER,
          open: openPrice,
          close: closePrice,
          date_from: lastRefreshed,
        })
        .select("*");

      if (error) {
        console.error(error);

        throw new Error("Error saving stock data");
      }

      return data;
    });

    return { event, body: { shareData, weatherData } };
  }
);
