import React, { useState, useEffect } from 'react';
import ReactDom from 'react-router-dom';
import { AboutArtist } from '../../components'
import { ArtistMusic } from '../../components';
import { LikeButton } from "../../components";
import { Player } from "../../components"
import './style.css';
const midnightMems = 'https://i.scdn.co/image/ab67616d0000b2732f76b797c382bedcafdf45e1'
const four = 'https://upload.wikimedia.org/wikipedia/en/e/e8/One_Direction_-_Four.png'
const takeMeHome = 'https://upload.wikimedia.org/wikipedia/en/7/79/Take_Me_Home_by_One_Direction.png'


export function Artist2() {
    const [artist, setArtist] = useState([
        {id: 2, name: 'One Direction', musicType: 'pop', intro: 'One Direction, often shortened to 1D, are an English-Irish pop boy band formed in London, England in 2010. The group are composed of Niall Horan, Liam Payne, Harry Styles and Louis Tomlinson and Zayn Malik'},
        
        ])
    
        const [songs] = useState([
            {
                title: "Best Song Ever",
                artist: "One Direction",
                album: "Midnight Memories",
                img_src: midnightMems

            },
            {
                title: "They Don't Know About Us",
                artist: "One Direction",
                album: "Take Me Home",
                img_src: takeMeHome

            },
            {
                title: "Story of My Life",
                artist: "One Direction",
                album: "Midnight Memories",
                img_src: midnightMems
            },

            {
                title: "Stockholm Syndrome",
                artist: "One Direction",
                album:  "Four",
                img_src: four
            }

        ])



    const renderAboutArtist = () => artist.map((a, i) => <AboutArtist key={i} name={a.name} musicType={a.musicType} intro={a.intro} />)
   
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);


    useEffect(() => {
        setNextSongIndex(() => {
            if(currentSongIndex + 1 > songs.length -1) {
                return 0;
            } else {
                return currentSongIndex + 1;
            }
        })
    }, [currentSongIndex])


    return (
        <>
            {renderAboutArtist()}
            <LikeButton />
            <Player 
                currentSongIndex={currentSongIndex}
                setCurrentSongIndex={setCurrentSongIndex}
                nextSongIndex={nextSongIndex}
                songs={songs}
            />
            
            
            
        </>
    )
}