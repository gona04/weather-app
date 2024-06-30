import { getCurrentLocation, getUserIPAddress } from './userData.service';

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_ID = "017dde2927e030d8dc2069f101b19b37";
const UNIT = "metric";

const getWeatherDataAPICall = async (cityName: string) => {
  let FULLURL = await setURL(cityName);
  if (FULLURL !== "") {
    const response: any = await fetch(FULLURL);
    return await response.json();
  }
};

//Set fullurl based on the cityName
const setURL = async (cityName: string) => {
  if (cityName !== "") {
    return `${BASE_URL}?q=${cityName}&appid=${API_ID}&units=${UNIT}&exclude="minutely,hourly,alerts"`;
  } else {
    const location: any = await callCurrentLocation();
    return `${BASE_URL}?lat=${location.lat}&lon=${location.log}&appid=${API_ID}&units=${UNIT}`;
  }
}

// Function to call getCurrentLocation and return coordinates
const callCurrentLocation = async (): Promise<{ lat: number; log: number }> => {
  try {
    const position = await getCurrentLocation();
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    return { lat: latitude, log: longitude };
  } catch (error) {
    console.error("Error getting current location:", error);
    throw error; // Throw the error so it can be handled in the calling function
  }
};

export default getWeatherDataAPICall;