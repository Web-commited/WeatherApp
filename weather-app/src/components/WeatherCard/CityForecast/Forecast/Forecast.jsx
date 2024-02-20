import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import fetchForecast from '../../../APIs/fetchForecast'
import { respondStyles } from '../../CurrentCity/CurrentCity'


const Forecast = (props) => {
    const [forecast, setForecast] = useState([])



    useEffect(() => {
        fetchForecast(props.cityname).then(response => {
            setForecast(response.forecast.forecastday)
        })
    }, [props.cityname])


    return (
        <ul className='week-forecast-container'>
            {forecast.map((day) => {
                return (
                    <li className='weekday-forecastcard'>
                        <h3 style={{ fontWeight: 'bold' }}>{parseWeekday(day.date)}</h3>
                        <h5>{parseDate(day.date)}</h5>

                        <div><img src={respondStyles(day.day.condition.code).iconurl} style={{ width: 130 }} /></div>
                        <div>{Math.floor(day.day.mintemp_c) + ' ~ ' + Math.floor(day.day.maxtemp_c)}°</div>
                    </li>
                )
            })}
        </ul>
    )
}

const parseWeekday = (date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const d = new Date(date)
    return days[d.getDay()]
}

const parseDate = (date) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const d = new Date(date)
    const monthdate = d.getDate()
    return monthdate + ' ' + months[d.getMonth()]
}

export default Forecast