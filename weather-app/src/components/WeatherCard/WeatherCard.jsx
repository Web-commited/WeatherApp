import React from 'react'
import { useState } from 'react'
import CurrentCity from './CurrentCity/CurrentCity'
import CityForecast from './CityForecast/CityForecast'
import SearchBar from './SearchBar/SearchBar'


import './WeatherCard.css'



export default function WeatherCard() {
    const [cityname, setCityname] = useState('Shanghai')
    const handleSearch = (newCityName) => {
        setCityname(newCityName)
    }
    return (
        <div className='weather-card'>
            <CurrentCity cityname={cityname} />
            <CityForecast cityname={cityname} />
            <SearchBar onSearchclick={handleSearch} />
        </div>
    )
}
