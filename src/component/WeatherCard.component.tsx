import { Iweather } from "../model/weather.class";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureThreeQuarters,
  faArrowUp,
  faArrowDown,
  faTint,
  faWind,
  faSun,
  faCloud,
  faCloudSun,
  faCloudShowersHeavy,
  faSnowflake,
  faSmog,
  faFire,
  faIcicles,
} from "@fortawesome/free-solid-svg-icons";

const WeatherCardComponent = (props: { weatherData: Iweather }) => {
  const getWeatherIcon = (description: string) => {
    switch (description.toLowerCase()) {
      case "clear sky":
        return faSun;
      case "few clouds":
      case "scattered clouds":
        return faCloudSun;
      case "broken clouds":
      case "overcast clouds":
        return faCloud;
      case "shower rain":
      case "rain":
      case "thunderstorm":
        return faCloudShowersHeavy;
      case "snow":
        return faSnowflake;
      case "mist":
        return faSmog;
      default:
        return faCloud;
    }
  };

  const feelsLikeIcon =
    props.weatherData.main.feels_like > 20 ? faFire : faIcicles;

  return (
    <div className="weather-content">
      <h4>{props.weatherData.name}</h4>
      <span>
        <FontAwesomeIcon
          className="weather-icon"
          icon={getWeatherIcon(props.weatherData.weather[0].description)}
        />
        {props.weatherData.main.temp}°C
      </span>
      <ul>
        <li>
          <FontAwesomeIcon className="arrow-down" icon={faArrowDown} />
          {props.weatherData.main.temp_min}°C
        </li>
        <li>
          <FontAwesomeIcon className="arrow-up" icon={faArrowUp} />
          {props.weatherData.main.temp_max}°C
        </li>
        <li>
          <FontAwesomeIcon
            className="temperature-icon"
            icon={faTemperatureThreeQuarters}
          />
          {props.weatherData.main.feels_like}°C
        </li>
        <li>
          <FontAwesomeIcon className="humidity-icon" icon={faTint} />
          {props.weatherData.main.humidity}%
        </li>
        {/* <li>
          <FontAwesomeIcon
            className="weather-icon"
            icon={getWeatherIcon(props.weatherData.weather[0].description)}
          />
          {props.weatherData.weather[0].main}
        </li> */}
      </ul>
    </div>
  );
};

export default WeatherCardComponent;
