import React from "react";
import Humidity_icon from './meta_icon/Humidity.svg'

const Humidity = () => {
    return <li>
        <img src={Humidity_icon} alt="Humidity" height={20} px />
        80%
    </li>
}

export default Humidity