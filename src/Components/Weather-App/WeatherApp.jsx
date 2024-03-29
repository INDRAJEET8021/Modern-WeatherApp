import React, { useState } from 'react'
import './WeatherApp.css'
import search_icon from '../Assets/search.png'
import cloud_icon from '../Assets/cloud.png'
import clear_icon from '../Assets/clear.png'
import drizzle_icon from '../Assets/drizzle.png'
import humidity_icon from '../Assets/humidity.png'
import rain_icon from '../Assets/rain.png'
import snow_icon from '../Assets/snow.png'
import wind_icon from '../Assets/wind.png'




const WeatherApp = () => {
  const [wicon,setwicon]=useState(cloud_icon)
  let api_key="dd94f859a0e52d6e4767fddf735f04a7";

  const search=async()=>{
    const input_data=document.getElementsByClassName("cityInput");
    if(input_data[0].value===""){
      return 0;
    }
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${input_data[0].value}&units=metric&appid=${api_key}`;
    let response=await fetch(url);
    let data=await response.json();

  const humidity=document.getElementsByClassName("humidity-percentage")
  const temprature=document.getElementsByClassName("weather-temp")
  const location=document.getElementsByClassName("weather-location")
  const windspeed=document.getElementsByClassName("wind-rate")

  humidity[0].innerHTML=data.main.humidity+"%";
  temprature[0].innerHTML=Math.floor(data.main.temp)+"°C";
  location[0].innerHTML=data.name;
  windspeed[0].innerHTML=Math.floor(data.wind.speed)+"Km/h";

  if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
    setwicon(clear_icon);
  } else if (
    data.weather[0].icon === "02d" ||
    data.weather[0].icon === "02n"
  ) {
    setwicon(cloud_icon);
  } else if (
    data.weather[0].icon === "03d" ||
    data.weather[0].icon === "03n"
  ) {
    setwicon(drizzle_icon);
  } else if (
    data.weather[0].icon === "04d" ||
    data.weather[0].icon === "04n"
  ) {
    setwicon(drizzle_icon);
  } else if (
    data.weather[0].icon === "09d" ||
    data.weather[0].icon === "09n"
  ) {
    setwicon(rain_icon);
  } else if (
    data.weather[0].icon === "010d" ||
    data.weather[0].icon === "010n"
  ) {
    setwicon(rain_icon);
  } else if (
    data.weather[0].icon === "013d" ||
    data.weather[0].icon === "013n"
  ) {
    setwicon(snow_icon);
  } else {
    setwicon(clear_icon);
  }
 

  }
  return (
    <div className="container">
      <div className="top-bar">
      <input type="text" className='cityInput' placeholder='Enter City'/>
      <div className="search" onClick={()=>{search()}}>
        <img src={search_icon} alt="" />
      </div>
      </div>
      <div className="weather-image">
        <img src={wicon} alt="" />
      </div>
      <div className="weather-temp">24°C</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt=""className='icon'/>
          <div className="data">
            <div className="humidity-percentage">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon}alt=""className='icon'/>
          <div className="data">
            <div className="wind-rate">18 Km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default WeatherApp
