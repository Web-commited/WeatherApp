import React from "react";
import Date from "./Date";
import Name from "./Name";
import Temperature from "./Temperature";
import TemperatureRange from "./TemperatureRange";
import Meta from "./Meta/Meta";

import Weathericon from "./WeatherIcon";
const CurrentCity = () => {
    return (<div>
        <Date />
        <Name />
        <Temperature />
        <TemperatureRange />
        <Weathericon />
        <Meta />
    </div>)
}

export default CurrentCity