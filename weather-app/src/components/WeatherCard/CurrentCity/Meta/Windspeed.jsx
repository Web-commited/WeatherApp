import React from "react";
import Windspeed_icon from './meta_icon/wind_speed.svg'

const Windspeed = () => {
    return <li>
        <img src={Windspeed_icon} alt="Windspeed" height={20} px />
        10km/s
    </li>
}

export default Windspeed