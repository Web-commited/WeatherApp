import React from 'react'
import CurrentCity from './CurrentCity/CurrentCity'
import './WeatherCard.css'



export default function WeatherCard() {
    return (
        <div className='weather-card'>
            <CurrentCity />
        </div>
    )
}
