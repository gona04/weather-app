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
      <article
        className="article-header"
        tabIndex={0}
        aria-label="Header of the app"
      >
        <Header />
      </article>

      <section className="section-content" role="search" tabIndex={4}>
        <form
          className="form-content"
          id="cityForm"
          tabIndex={5}
          onSubmit={getTemperature}
        >
          <label htmlFor="cityName" tabIndex={6}>
            City Name
          </label>
          <input
            tabIndex={7}
            type="text"
            name="cityName"
            id="cityName"
            placeholder="Search By City Name"
            aria-label="Search By City Name"
            required
          />
          <button type="submit" tabIndex={8}>
            Get temperature
          </button>
        </form>
      </section>

      <main
        className="card-container"
        tabIndex={9}
        role="status"
        aria-live="polite"
      >
        {weatherData && <WeatherCardComponent weatherData={weatherData} />}
      </main>
    </>
  );
};

export default Home;
