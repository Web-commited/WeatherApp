import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Date from "./Date";
import Name from "./Name";
import Temperature from "./Temperature";
import TemperatureRange from "./TemperatureRange";
import Meta from "./Meta/Meta";
import Weathericon from "./WeatherIcon";
import fetchCurrentDay from "../../APIs/fetchCurrentDay";
import "./CurrentCity.css";



const CurrentCity = (props) => {

    const [currentDate, setCurrentDate] = useState('')
    const [currentName, setCurrentName] = useState('')
    const [temperature, setTemperature] = useState(0)
    const [temperatureRange, setTemperatureRange] = useState('')
    const [humidity, setHumidity] = useState(0)
    const [windspeed, setWindspeed] = useState(0)
    const [airquality, setAirQuality] = useState(0)
    const [somatosensory, setSomatosensory] = useState(0)
    const [weatherIcon, setWeatherIcon] = useState('src/components/WeatherCard/Weathericon-asset/Sunny.png')
    const [cardstyle, setCardstyle] = useState('sunny')
    useEffect(() => {
        fetchCurrentDay(props.cityname).then(response => {
            setCurrentDate(response.current.last_updated)
            setCurrentName(response.location.name)
            setTemperature(Math.floor(response.current.temp_c))
            setHumidity(response.current.humidity)
            setWindspeed(Math.floor(response.current.wind_kph))
            setAirQuality(response.current.air_quality.pm10)
            setSomatosensory(response.current.feelslike_c)
            setWeatherIcon(respondStyles(response.current.condition.code).iconurl)
            setCardstyle(respondStyles(response.current.condition.code).cardstyle)

            setTemperatureRange(Math.floor(response.forecast.forecastday[0].day.mintemp_c) +
                ' ~ ' +
                Math.floor(response.forecast.forecastday[0].day.maxtemp_c) + '°')

        }).catch(error => {
            console.log('Error fetching current day data: ', error)
        })

    }, [props.cityname])

    return (<div className={'current-city ' + cardstyle} >
        <div className="date" ><Date currentdate={currentDate} /></div>
        <div className="name" ><Name currentname={currentName} /></div>
        <div className="temperature"><Temperature temperature={temperature} /></div>
        <div className="temperature-range"><TemperatureRange temperatureRange={temperatureRange} /></div>
        <div className="weather-icon"><Weathericon iconurl={weatherIcon} /></div>
        <Meta humidity={humidity} windspeed={windspeed} airquality={airquality} somatosensory={somatosensory} />
    </div>)
}



const respondStyles = (weathercode) => {
    const weathericon = {
        sunny: 'src/components/WeatherCard/Weathericon-asset/Sunny.png',
        cloudy_day: 'src/components/WeatherCard/Weathericon-asset/Cloudy_day.png',
        cloudy: 'src/components/WeatherCard/Weathericon-asset/Cloudy.png',
        rain: 'src/components/WeatherCard/Weathericon-asset/Rain.png',
        snow: 'src/components/WeatherCard/Weathericon-asset/Snow.png',
        hail: 'src/components/WeatherCard/Weathericon-asset/Hail.png'
    }

    switch (weathercode) {
        case 1000:
            return { cardstyle: 'sunny', iconurl: weathericon.sunny }
        case 1003:
            return { cardstyle: 'cloudy-day', iconurl: weathericon.cloudy_day }
        case 1006:
        case 1009:
        case 1030:
            return { cardstyle: 'cloudy', iconurl: weathericon.cloudy }
        case 1063:
        case 1180:
        case 1183:
        case 1186:
        case 1189:
        case 1192:
        case 1195:
        case 1198:
            return { cardstyle: 'rain', iconurl: weathericon.rain }
        case 1066:
        case 1069:
        case 1072:
        case 1201:
        case 1204:
        case 1207:
        case 1210:
        case 1213:
        case 1216:
        case 1219:
        case 1222:
        case 1225:
        case 1255:
        case 1258:
        case 1249:
            return { cardstyle: 'snow', iconurl: weathericon.snow }
        case 1237:
        case 1261:
        case 1264:
        default:
            console.log('Weather code not found')
            return { cardstyle: 'cloudy', iconurl: weathericon.cloudy }

    }
}
export { respondStyles }
export default CurrentCity

