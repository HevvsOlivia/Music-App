import React, { useState, useEffect } from 'react';
import ReactDom from 'react-router-dom';
import { AboutArtist } from '../../components'
import { ArtistMusic } from '../../components';
import { LikeButton } from "../../components";
import { Player } from "../../components"
import './style.css';
const fearless = 'https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/e9hech8wvrpgskhrwrkf/taylor-swift-fearless-taylors-version-stream?fimg-ssr-default'
const red = 'https://www.bupipedream.com/wp-content/uploads/2021/11/Taylor-Swift-Red-Taylors-Version.jpeg'
const folklore = 'https://media.pitchfork.com/photos/5f1e2abad421092dd8f6c7ca/1:1/w_600/Taylor_Swift_folklore.jpeg'


export function Artist1() {
    const [artist, setArtist] = useState([
        {id: 1, name: 'Taylor Swift', musicType: 'country/pop/folk', intro: 'Taylor Alison Swift is an American singer-songwriter. Her discography spans multiple genres, and her narrative songwriting, which is often inspired by her personal life, has received widespread media coverage and critical praise.'},
        
        ])
    
        const [songs] = useState([
            {
                title: "Fearless (Taylor's Version)",
                artist: "Taylor Swift",
                album: "Fearless (Taylor's Version)",
                img_src: fearless

            },
            {
                title: "Cardigan",
                artist: "Taylor Swift",
                album: "Folklore",
                img_src: folklore

            },
            {
                title: "Fifteen (Taylor's Version)",
                artist: "Taylor Swift",
                album: "Fearless (Taylor's Version)",
                img_src: fearless
            },
            {
                title: "I Knew You Were Trouble (Taylor's Version)",
                artist: "Taylor Swift",
                album: "Red (Taylor's Version)",
                img_src: red
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