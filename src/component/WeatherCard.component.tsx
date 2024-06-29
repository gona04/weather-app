import { Iweather } from "../model/weather.class";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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

  return (
    <div
      className="weather-content"
      role="status"
      aria-label={`Weather in ${props.weatherData.name}`}
    >
      <h3>
        {props.weatherData.name}, {props.weatherData.sys.country}
      </h3>
      <div className="weather-main">
        <FontAwesomeIcon
          className="weather-icon"
          icon={getWeatherIcon(props.weatherData.weather[0].description)}
          title={props.weatherData.weather[0].description}
          aria-hidden="true"
        />
        <span>{props.weatherData.main.temp}°C</span>
      </div>
      <ul>
        <li>
          <FontAwesomeIcon
            className="arrow-down"
            icon={faArrowDown}
            title="Min Temperature"
            aria-label={`Minimum Temperature: ${props.weatherData.main.temp_min} degrees Celsius`}
          />
          {props.weatherData.main.temp_min}°C
        </li>
        <li>
          <FontAwesomeIcon
            className="arrow-up"
            icon={faArrowUp}
            title="Max Temperature"
            aria-label={`Maximum Temperature: ${props.weatherData.main.temp_max} degrees Celsius`}
          />
          {props.weatherData.main.temp_max}°C
        </li>
        <li>
          <FontAwesomeIcon
            className="feels-like-icon"
            icon={props.weatherData.main.feels_like > 20 ? faFire : faIcicles}
            title="Feels Like"
            aria-label={`Feels Like: ${props.weatherData.main.feels_like} degrees Celsius`}
          />
          {props.weatherData.main.feels_like}°C
        </li>
        <li>
          <FontAwesomeIcon
            className="humidity-icon"
            icon={faTint}
            title="Humidity"
            aria-label={`Humidity: ${props.weatherData.main.humidity}%`}
          />
          {props.weatherData.main.humidity}%
        </li>
        <li>
          <FontAwesomeIcon
            className="wind-icon"
            icon={faWind}
            title="Wind Speed"
            aria-label={`Wind Speed: ${props.weatherData.wind.speed} meters per second`}
          />
          {props.weatherData.wind.speed} m/s
        </li>
      </ul>
    </div>
  );
};

export default WeatherCardComponent;
