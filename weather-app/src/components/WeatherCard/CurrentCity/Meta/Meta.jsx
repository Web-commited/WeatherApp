import React from "react";
import Windspeed from "./Windspeed";
import Air from "./Air";
import Somatosensory from "./Somatosensory";
import Humidity from "./Humidity";
import "./Meta.css";

const Meta = ({ humidity, windspeed, air, somatosensory }) => {
    return (<ul className="meta">
        <Humidity Humidity={humidity} />
        <Windspeed windspeed={windspeed} />
        <Air Air={air} />
        <Somatosensory Somatosensory={somatosensory} />

    </ul>)
}

export default Meta