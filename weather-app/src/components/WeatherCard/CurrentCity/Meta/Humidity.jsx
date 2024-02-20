import React from "react";
import Humidity_icon from './meta_icon/Humidity.svg'

const Humidity = (props) => {
    return <li>
        <img src={Humidity_icon} alt="Humidity" height={20} />
        {props.humidity}
    </li>
}

export default Humidity