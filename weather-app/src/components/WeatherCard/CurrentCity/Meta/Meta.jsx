import React from "react";
import Windspeed from "./Windspeed";
import Air from "./Air";
import Somatosensory from "./Somatosensory";
import Humidity from "./Humidity";

const Meta = () => {
    return (<div>
        <Humidity />
        <Windspeed />
        <Air />
        <Somatosensory />

    </div>)
}

export default Meta