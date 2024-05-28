import { inngest } from "../client";
import getSupabaseServerActionClient from "../../app/core/supabase/action-client";

const createSupabaseClient = () =>
  getSupabaseServerActionClient({ admin: true });

const LOCATION = "BS1";

export const getWeatherSharesData = inngest.createFunction(
  { id: "getWeatherSharesData" },
  { event: "data/weather.shares" },
  // { cron: "0 09 * * 1-5" },

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

      console.log(data);
      console.log(error);

      return data;
    });

    // await step.run("get shares data", async () => {});

    return { event, body: weatherData };
  }
);
