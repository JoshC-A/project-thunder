import * as React from "react";
import { Weather } from "../../types/weather.type";
import { Share } from "../../types/share.type";

interface WeatherAndSharesProps {
  weather: Weather;
  shareData: Share;
  percentDiff: number;
  username: string;
}

const RRLogo =
  "https://seeklogo.com/images/R/rolls-royce-logo-24811DB90B-seeklogo.com.png";

export const EmailTemplateCopy = ({
  weather,
  shareData,
  percentDiff,
  username,
}: WeatherAndSharesProps) => (
  <div style={emailBody}>
    <div style={main}>
      <div style={container}>
        <div>
          <div style={row}>
            <img src={RRLogo} alt="Rolls Royce Logo" width="45" />
            <p
              //   Could be worth messing with width here as vertical rule is weird
              className={`text-[52px] pt-5 ${
                shareData.open < shareData.close
                  ? "text-lime-600"
                  : "text-red-400"
              }`}
            >
              £{shareData.close}
            </p>
            <div className="mr-5" style={vertical}></div>
            <div className="flex flex-col w-48">
              <div className="self-center">{weather.temperature}°</div>
              <div className="flex flex-row ">
                <img
                  src={`https:${weather.icon}`}
                  alt="weather icon"
                  width="50"
                />
                <p>{weather.condition}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-8" style={box}>
          <hr className="mb-[50px]" style={hr} />
          <p>Good morning {username},</p>
          <p>Welcome to todays overview of finances and weather!</p>
          <div className="my-10">
            <div className="flex flex-row w-fit">
              <div className="flex flex-col w-6/12">
                <p className="text-center pr-5">
                  {shareData.name} {shareData.ticker}{" "}
                  {shareData.open < shareData.close ? "jumped" : "fell"} by{" "}
                  {percentDiff.toPrecision(2)}% ending the day at £
                  {shareData.close}
                </p>
                <p className="text-center">{shareData.date_from}</p>
              </div>

              <div style={vertical}></div>
              <div className="pl-5 pr-0 mr-0 text-center w-fit">
                <p>Todays weather is {weather.condition}</p>
                <div className="flex flex-col ml-4">
                  <div className="flex flex-row my-0">
                    <p className="my-0">Feels Like:</p>
                    <p className="my-0 font-bold ml-auto">
                      {weather.feels_like}
                    </p>
                  </div>
                  <div className="flex flex-row">
                    <p className="my-0">Wind (mph):</p>
                    <p className="my-0 font-bold ml-auto">{weather.wind_mph}</p>
                  </div>
                  <div className="flex flex-row">
                    <p className="my-0">UV Index:</p>
                    <p className="my-0 font-bold ml-auto">{weather.uv_index}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={box}>
          <hr style={hr} />
          <p style={footer}>
            Finance Barometer, 123 Address line one, Address line two, Postcode
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default EmailTemplateCopy;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const emailBody = {
  width: "640px",
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

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};
