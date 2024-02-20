import React from 'react'
import Name from './Name'
import Weathericon from './Weathericon'
import TemperatureRange from './TemperatureRange'
import Date from './Date'


export const DayofWeek = () => {
    return (
        <div>
            <Name />
            <Weathericon />
            <TemperatureRange />
            <Date />
        </div>
    )
}
