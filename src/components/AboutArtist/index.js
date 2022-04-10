//name, music type, intro paragraph

import React from "react";

export const AboutArtist = ({ name, musicType, intro }) => {
    return (
        <div className="about">
            <div className="aboutContent">
                <h1>{name}</h1>
                <p>Music genre: {musicType}</p>
                <p>{intro}</p>
            </div>
        </div>
    )
}

