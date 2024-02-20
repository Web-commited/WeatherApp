import React from "react";

const Weathericon = (props) => {
    return <div>
        <img src={props.iconurl} style={{ width: 130 }} />
    </div>
}

export default Weathericon