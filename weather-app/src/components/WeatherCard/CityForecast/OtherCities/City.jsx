import React from 'react'
import { useState, useEffect } from 'react'

import fetchCurrentDay from '../../../APIs/fetchCurrentDay'
import { respondStyles } from '../../CurrentCity/CurrentCity'



export default function City(props) {
    const [weatherIcon, setWeatherIcon] = useState('')
    const [temperatureRange, setTemperatureRange] = useState('')


    useEffect(() => {
        fetchCurrentDay(props.cityname).then(response => {
            setTemperatureRange(Math.floor(response.forecast.forecastday[0].day.mintemp_c) +
                ' ~ ' +
                Math.floor(response.forecast.forecastday[0].day.maxtemp_c) + '°')
            setWeatherIcon(respondStyles(response.current.condition.code).iconurl)
        })
    })
    return (
        <div className='othercity-card'>
            <div><img src={weatherIcon} style={{ width: 60 }} /></div>
            <h3>{props.cityname}</h3>
            {temperatureRange}
        </div>
    )
}


