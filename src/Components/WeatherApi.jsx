import React, { useState } from "react";
import Style from "./WeatherApi.module.css";
import sun from "../assets/images/rainy-day.png";
import { FaCloudSun } from "react-icons/fa";

const WeatherApi = () => {
  let [city, setcity] = useState("");
  let [weatherInfo, setweatherInfo] = useState(null);
  let fetchApi = async () => {
    let apiKey = "7fc73a92fd038cc301f2ed90161458d4";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`;

    try {
      let data = await fetch(apiUrl);
      let finalData = await data.json();
      if (finalData.cod == 200) {
        setweatherInfo(finalData);
        console.log(finalData);
      } else {
        console.log("Error occured");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={Style.sectionContainer}>
      <h1>
        Weather Forecast <FaCloudSun />
      </h1>

      <div className={Style.inputs}>
        <input
          type="text"
          placeholder="Enter Your City Name"
          onChange={(e) => setcity(e.target.value)}
        />
        <button onClick={fetchApi}>Get Weather</button>
      </div>

      {weatherInfo && (
        <>
          <div className={Style.card}>
            <h1>Weather Report</h1>
            <h3>{weatherInfo.name}</h3>
            <span></span>
            <img src={sun} alt="" />

            <h3>Country:{weatherInfo.sys.country}</h3>
            <h3>Temperature:{Math.floor(weatherInfo.main.temp - 273.15)} C</h3>
            <h3>{weatherInfo.weather[0].description}</h3>
          </div>
        </>
      )}
    </section>
  );
};

export default WeatherApi;
