import React from 'react'
import Forecast from './Forecast/Forecast'
import OtherCities from './OtherCities/OtherCities'
import './CityForecast.css'

export default function CityForecast(props) {
    return (
        <div className='cityforecast-container'>
            <OtherCities />
            <Forecast cityname={props.cityname} />
        </div>
    )
}
