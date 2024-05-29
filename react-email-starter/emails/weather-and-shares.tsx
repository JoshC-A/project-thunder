import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";
import { Weather } from "../../app/types/weather.type";
import { Share } from "../../app/types/share.type";

interface WeatherAndSharesProps {
  weather: Weather;
  shareData: Share;
  percentDiff: number;
  username: string;
}

const weather: Weather = {
  created_at: "2024-05-28 15:49:02.635288+00",
  location: "Bristol",
  feels_like: 16,
  condition: "Partly cloudy",
  icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
  wind_mph: 11.9,
  uv_index: 3,
  temperature: 16,
};

const shareData: Share = {
  created_at: "2024-05-29 09:00:00.972562+00",
  name: "Rolls Royce",
  ticker: "RR.LON",
  open: 448.7,
  close: 451,
  //   open: 451,
  //   close: 448.7,
  date_from: "2024-05-28",
};

const percentDiff =
  100 *
  Math.abs(
    (shareData.open - shareData.close) /
      ((shareData.open + shareData.close) / 2)
  );

const username = "Josh";

const RRLogo =
  "https://seeklogo.com/images/R/rolls-royce-logo-24811DB90B-seeklogo.com.png";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const WeatherAndShares = ({
  weather,
  shareData,
  percentDiff,
  username,
}: WeatherAndSharesProps) => (
  <Html>
    <Head />
    <Preview>Preview</Preview>
    <Tailwind>
      <Body style={main}>
        <Container style={container}>
          <Section>
            <div style={row}>
              <Img src={RRLogo} alt="Rolls Royce Logo" width="45" />
              <Text
                //   Could be worth messing with width here as vertical rule is weird
                className={`text-[52px] pt-5 ${
                  shareData.open < shareData.close
                    ? "text-lime-600"
                    : "text-red-400"
                }`}
              >
                £{shareData.close}
              </Text>
              <div className="mr-5" style={vertical}></div>
              <div className="flex flex-col w-48">
                <div className="self-center">{weather.temperature}°</div>
                <div className="flex flex-row ">
                  <Img
                    src={`https:${weather.icon}`}
                    alt="weather icon"
                    width="50"
                  />
                  <Text>{weather.condition}</Text>
                </div>
              </div>
            </div>
          </Section>
          <Section style={box}>
            <Hr className="mb-[50px]" style={hr} />
            <Text>Good morning {username},</Text>
            <Text>Welcome to todays overview of finances and weather!</Text>
            <div className="flex flex-row w-[400px]">
              <div className="flex flex-col">
                <Text className="text-center pr-5">
                  {shareData.name} {shareData.ticker}{" "}
                  {shareData.open < shareData.close ? "jumped" : "fell"} by{" "}
                  {percentDiff.toPrecision(2)}% ending the day at £
                  {shareData.close}
                </Text>
                <Text className="text-center">{shareData.date_from}</Text>
              </div>

              <div style={vertical}></div>
              <div className="pl-5 w-[200px] text-center">
                <Text>Todays weather is {weather.condition}</Text>
                <div className="flex flex-col ml-4">
                  <div className="flex flex-row my-0">
                    <Text className="my-0">Feels Like:</Text>
                    <Text className="my-0 font-bold ml-auto">
                      {weather.feels_like}
                    </Text>
                  </div>
                  <div className="flex flex-row">
                    <Text className="my-0">Wind (mph):</Text>
                    <Text className="my-0 font-bold ml-auto">
                      {weather.wind_mph}
                    </Text>
                  </div>
                  <div className="flex flex-row">
                    <Text className="my-0">UV Index:</Text>
                    <Text className="my-0 font-bold ml-auto">
                      {weather.uv_index}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section style={box}>
            <Hr style={hr} />
            <Text style={footer}>
              Finance Barometer, 123 Address line one, Address line two,
              Postcode
            </Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

WeatherAndShares.PreviewProps = {
  weather,
  shareData,
  percentDiff,
  username,
} as WeatherAndSharesProps;

export default WeatherAndShares;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const vertical = {
  borderLeft: "1px solid #c9c9c9",
};

const box = {
  padding: "0 48px",
};
const row = {
  padding: "0 48px",
  display: "flex",
  flex: "row",
  flexDirection: "row" as "row",
  justifyContent: "space-between",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const paragraph = {
  color: "#525f7f",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const anchor = {
  color: "#556cd6",
};

const button = {
  backgroundColor: "#656ee8",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
  padding: "10px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};
