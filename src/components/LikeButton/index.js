import React, { useState } from 'react';

export const LikeButton = () => {
    const [ liked, setLiked ] = useState(false);

    const handleLike = e => {
        e.stopPropagation()
        setLiked(!liked)
    }

    return (
        <span role="switch" onClick={handleLike} style={{ color: liked ? 'red' : 'grey' }}>❤</span>
    );
}
