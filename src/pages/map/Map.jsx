import React from "react";
import "./mapstyle.scss"

const Map = () => {
    return (
        <div className="map ">
             <iframe
                src="https://www.google.com/maps/embed"
                loading="lazy"></iframe>
        </div>
    )
}

export default Map