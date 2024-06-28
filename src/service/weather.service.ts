import { Iweather } from "../model/weather.class";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_ID = "017dde2927e030d8dc2069f101b19b37";
const UNIT = "metric";

const getWeatherDataAPICall = async (cityName: string) => {
  console.log("in Service");
  const response = await fetch(
    `${BASE_URL}?q=${cityName}&appid=${API_ID}&units=${UNIT}&exclude="minutely,hourly,alerts"`
  );
  return await response.json();
};
export default getWeatherDataAPICall;
