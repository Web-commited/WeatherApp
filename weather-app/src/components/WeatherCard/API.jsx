import React from 'react'
import axios from 'axios'
const APIKey = 'eafbabe8f7d7424fab2132146240202'



const fetchCurrrentDay = ({ city }) => {
    axios.get(`https://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${city}&aqi=yes`).then(res => {
        const weatherData = {
            'date': res.data.location.localtime,
            'name': res.data.location.name,
            'temperature': res.data.current.temp_c,
            'weather': res.data.current.condition.text,
            'meta': {
                'air': res.data.current.air_quality.pm2_5,
                'humidity': res.data.current.humidity,
                'somatosensory': res.data.current.feelslike_c,
                'windspeed': res.data.current.wind_kph
            }
        }
        return weatherData
    })
}

const API = ({ city }) => {
    const data = fetchCurrrentDay(city)
}

export default API

