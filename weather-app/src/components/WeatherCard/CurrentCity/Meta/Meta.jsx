import React from "react";
import Windspeed from "./Windspeed";
import Air from "./Air";
import Somatosensory from "./Somatosensory";
import Humidity from "./Humidity";
import "./Meta.css";

const Meta = (props) => {
    return (<ul className="meta">
        <Humidity humidity={props.humidity} />
        <Windspeed windspeed={props.windspeed} />
        <Air airquality={props.airquality} />
        <Somatosensory somatosensory={props.somatosensory} />

    </ul>)
}

export default Meta