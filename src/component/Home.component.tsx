import { useEffect, useState } from "react";
import Header from "./Header.component";
import getWeatherDataAPICall from "../service/weather.service";
import { Iweather } from "../model/weather.class";
import WeatherCardComponent from "./WeatherCard.component";

const Home = () => {
  const [cityName, setCityName] = useState<string>("");
  const [weatherData, setWeatherData] = useState<Iweather>();

  const getTemperature = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const cityNameInput = event.currentTarget.elements.namedItem(
      "cityName"
    ) as HTMLInputElement | null;
    const cityName = cityNameInput?.value || "";
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
      <article className="article-header" aria-label="Header of the app">
        <Header />
      </article>

      <section className="section-content" role="search">
        <form
          className="form-content"
          id="cityForm"
          onSubmit={getTemperature}
          aria-labelledby="cityFormLabel"
        >
          <label id="cityFormLabel" htmlFor="cityName">
            City Name
          </label>
          <input
            type="text"
            name="cityName"
            id="cityName"
            placeholder="Search By City Name"
            aria-label="Search By City Name"
            required
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
