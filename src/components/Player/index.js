import React, { useState, useEffect } from 'react';
import { PlayerDetails } from '../.';
import { PlayerControls } from '../.';

export function Player(props) {

    const [isPlaying, setIsPlaying] = useState(false);


    const SkipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }
                return temp;
            })
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                }
                return temp;
            })
        }
    }

    return (
        <div className='content'>
            <div className='c-player'>
                <h4>Playing now</h4>
                <PlayerDetails song={props.songs[props.currentSongIndex]} />
                <PlayerControls 
                    isPlaying={isPlaying} 
                    setIsPlaying={setIsPlaying} 
                    SkipSong={SkipSong} 
                />
                <p>
                    <strong>Next up: </strong>
                    {props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}
                </p>

            </div>
        </div>
    )
}