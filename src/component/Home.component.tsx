import { useEffect, useState } from "react";
import Header from "./Header.component";
import "../styles.css";
import getWeatherDataAPICall from "../service/weather.service";
import { Iweather } from "../model/weather.class";
import WeatherCardComponent from "./WeatherCard.component";

const Home = () => {
  const [cityName, setCityName] = useState<string>(" ");
  const [weatherData, setWeatherData] = useState<Iweather>();

  const getTemperature = (event: any) => {
    event.preventDefault();
    const cityName = event.target[0].value;
    console.dir(cityName);
    setCityName(cityName);
  };

  useEffect(() => {
    if (cityName.length > 1) {
      getWeatherData(cityName);
    }
  }, [cityName]);

  async function getWeatherData(cityName: string): Promise<any> {
    const response: any = await getWeatherDataAPICall(cityName);
    console.log(response);
    if (response.cod == "404") {
      alert(response.message);
      return;
    }
    setWeatherData(response);
  }
  return (
    <>
      <article className="article-header">
        <Header />
      </article>

      <section className="section-content">
        <form className="form-content" id="cityForm" onSubmit={getTemperature}>
          <label htmlFor="cityName"> City Name </label>
          <input
            type="text"
            name="cityName"
            id="cityName"
            placeholder="Please enter city name"
          />
          <button type="submit">Get temperature</button>
        </form>
      </section>

      <main className="card-container">
        {weatherData && <WeatherCardComponent weatherData={weatherData} />}
      </main>
    </>
  );
};

export default Home;
