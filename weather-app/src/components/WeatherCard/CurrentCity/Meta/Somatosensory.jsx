import React from "react";
import Somato_icon from './meta_icon/Somatosensory_temperature.svg'

const Somatosensory = (props) => {
    return <li>
        <img src={Somato_icon} alt="Somatosensory Temperature" height={20} />
        <span>{props.somatosensory}°C</span>
    </li>
}

export default Somatosensory