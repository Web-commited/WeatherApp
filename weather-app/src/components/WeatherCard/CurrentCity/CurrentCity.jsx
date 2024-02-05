import React from "react";
import Date from "./Date";
import Name from "./Name";
import Temperature from "./Temperature";
import TemperatureRange from "./TemperatureRange";
import Meta from "./Meta/Meta";
import Weathericon from "./WeatherIcon";
import "./CurrentCity.css";
const humidity = 15
const temperatureRange = '20-25'
const windspeed = 100
const air = 400
const somatosensory = -13

const CurrentCity = () => {
    const weather = 'hail'

    return (<div className='current-city cloudy'>
        <div className="date"><Date /></div>
        <div className="name"><Name /></div>
        <div className="temperature"><Temperature /></div>
        <div className="temperature-range"><TemperatureRange TemperatureRange={temperatureRange} /></div>
        <div className="weather-icon"><Weathericon /></div>
        <Meta Humidity={humidity} Windspeed={windspeed} Air={air} Somatosensory={somatosensory} />
    </div>)
}





export default CurrentCity