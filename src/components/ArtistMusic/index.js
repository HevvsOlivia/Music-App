import React from "react";

export const ArtistMusic = ({ title, artist, album, img_src}) => {
        return (
        <>
        <h1>{title}</h1>
        <p>{artist}</p>
        <p>{album}</p>
        <img>{img_src}</img>
       
        </>
    )
}