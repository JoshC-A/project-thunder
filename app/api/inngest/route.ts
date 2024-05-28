import { serve } from "inngest/next";
import { inngest } from "../../../inngest/client";
import { helloWorld } from "../../../inngest/hello-word";
import { sendEmail } from "../../../inngest/send-email";
import { getWeatherSharesData } from "../../../inngest/get-weather-shares-data";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [helloWorld, sendEmail, getWeatherSharesData],
});
