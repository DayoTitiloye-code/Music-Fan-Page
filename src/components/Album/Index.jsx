import React from 'react';

const Album = ({ title, desc, img, rating }) =>{
    return (
        <div id='album'>
        <h1>{ title } </h1>
        <em> { desc } </em>
        <img src={ img }/>
        <p> {rating} </p>
        </div>
    )
}

export default Album
