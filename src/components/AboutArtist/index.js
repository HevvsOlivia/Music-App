//name, music type, intro paragraph

import React from "react";

export const AboutArtist = ({ name, musicType, intro, album}) => {
        return (
        <>
        <h1>Let's find out about {name}</h1>
        <p>Their music is of the genre {musicType}</p>
        <p>Let's find out a little more about them: {intro}</p>
        <p>{album}</p>
        </>
    )
}

