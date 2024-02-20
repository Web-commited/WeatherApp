import React from 'react'
//const APIKey = process.env.REACT_APP_API_KEY
const APIKey = 'eafbabe8f7d7424fab2132146240202'

const fetchCurrentDay = async (cityname) => {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${APIKey}&q=${cityname}&days=1&aqi=yes`)
    return response.json()
}


export default fetchCurrentDay



