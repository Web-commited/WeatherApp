import React from "react";
import Somato_icon from './meta_icon/Somatosensory_temperature.svg'

const Somatosensory = () => {
    return <li>
        <img src={Somato_icon} alt="Somatosensory Temperature" height={20} px />
        25°C
    </li>
}

export default Somatosensory