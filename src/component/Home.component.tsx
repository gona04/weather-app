import { useEffect, useState } from "react";
import Header from "./Header.component";
import getWeatherDataAPICall from "../service/weather.service";
import { Iweather } from "../model/weather.class";
import WeatherCardComponent from "./WeatherCard.component";

const Home = () => {
  const [cityName, setCityName] = useState<string>("");
  const [weatherData, setWeatherData] = useState<Iweather>();

  const getTemperature = (event: any) => {
    event.preventDefault();
    const cityName = event.target[0].value;
    setCityName(cityName);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: any = await getWeatherDataAPICall(cityName);
        if (response.cod === "404") {
          alert(response.message);
          return;
        }
        setWeatherData(response);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, [cityName]);

  return (
    <>
      <article className="article-header">
        <Header />
      </article>

      <section
        className="section-content"
        role="search"
        aria-labelledby="weatherSearchHeading"
      >
        <form className="form-content" id="cityForm" onSubmit={getTemperature}>
          <label htmlFor="cityName">Search By City Name</label>
          <input
            type="text"
            name="cityName"
            id="cityName"
            placeholder="Please enter city name"
            aria-label="Enter city name"
          />
          <button type="submit">Get temperature</button>
        </form>
      </section>

      <main className="card-container" role="status" aria-live="polite">
        {weatherData && <WeatherCardComponent weatherData={weatherData} />}
      </main>
    </>
  );
};

export default Home;
