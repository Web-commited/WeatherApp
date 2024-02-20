import React from "react";
import Windspeed_icon from './meta_icon/wind_speed.svg'

const Windspeed = (props) => {
    return <li>
        <img src={Windspeed_icon} alt="Windspeed" height={20} />
        <span>{props.windspeed}km/s</span>
    </li>
}

export default Windspeed