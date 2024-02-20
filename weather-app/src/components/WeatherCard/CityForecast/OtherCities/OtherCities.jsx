import React from 'react'
import City from './City'
export default function OtherCities() {
    const cities = ['Sydney', 'Shanghai', 'Melbourne', 'London']
    return (
        <div className='othercities-container'>
            {cities.map(city => {
                return (
                    <City cityname={city} />
                )
            })}
        </div>
    )
}
