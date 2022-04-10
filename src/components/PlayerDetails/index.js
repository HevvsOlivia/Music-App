import React from 'react';

export function PlayerDetails(props) {
    return (
        <div className='c-player--details'>
            <div className='details-image'>
                <img src={props.song.img_src}/>
            </div>
            <div>
                <h3 className='details-title'>{props.song.title}</h3>
                <h4 className='details-artist'>{props.song.artist}</h4>
                <h4 className='details-album'>{props.song.album}</h4>
            </div>
            
        </div>
    )
}