import { Iweather } from "../model/weather.class";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_ID = "017dde2927e030d8dc2069f101b19b37";
const UNIT = "metric";

const getWeatherDataAPICall = async (cityName: string) => {
  console.log("in Service");
  let FULLURL;

  if (cityName !== "") {
    FULLURL = `${BASE_URL}?q=${cityName}&appid=${API_ID}&units=${UNIT}&exclude="minutely,hourly,alerts"`;
  } else {
    try {
      const location: any = await callCurrentLocation();
      FULLURL = `${BASE_URL}?lat=${location.lat}&lon=${location.log}&appid=${API_ID}&units=${UNIT}`;
    } catch (error) {
      console.error("Error getting current location:", error);
      throw error; // Throw the error so it can be handled in the calling function
    }
  }

  const response = await fetch(FULLURL);
  return await response.json();
};

// Function to get current location
const getCurrentLocation = (): Promise<GeolocationPosition> =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

// Function to call getCurrentLocation and return coordinates
const callCurrentLocation = async (): Promise<{ lat: number; log: number }> => {
  try {
    const position = await getCurrentLocation();
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    return { lat: latitude, log: longitude };
  } catch (error) {
    console.error("Error getting current location:", error);
    throw error; // Throw the error so it can be handled in the calling function
  }
};

export default getWeatherDataAPICall;
