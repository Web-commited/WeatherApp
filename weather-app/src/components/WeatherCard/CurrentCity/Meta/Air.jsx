import React from "react";
import Air_icon from './meta_icon/PM2.5.svg'

const Air = (props) => {
    return <li>
        <img src={Air_icon} alt="Air Quality" height={20} />
        <span>{props.airquality}µg</span>
    </li>

}

export default Air