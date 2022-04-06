import React, { useState } from "react";
import { AboutArtist } from '../../components'


export function Homepage() {
    const [artist, setArtist] = useState([
        {id: 1, name: 'Taylor Swift', musicType: 'country/pop/folk', intro: 'Taylor Alison Swift is an American singer-songwriter. Her discography spans multiple genres, and her narrative songwriting, which is often inspired by her personal life, has received widespread media coverage and critical praise', album: ['Fearless (Taylors version), ', 2021]},
        {id: 2, name: 'One Direction', musicType: 'pop', intro: 'One Direction, often shortened to 1D, are an English-Irish pop boy band formed in London, England in 2010. The group are composed of Niall Horan, Liam Payne, Harry Styles and Louis Tomlinson and Zayn Malik', album: ['Up All Night, ', 2011]} 
        ])

        const [ chosenArtist, setChosenArtist ] = useState();

        const handleArtistSelect = artistId => {
            const chosenArtist = artist.find(a => a.id === artistId);
            setChosenArtist(chosenArtist)
        }


    const renderAboutArtist = () => artist.map((a, i) => <AboutArtist key={i} name={a.name} musicType={a.musicType} intro={a.intro} album={a.album} />)
   

    


    return (
        <>
            {renderAboutArtist()}
            
        </>
    )
}