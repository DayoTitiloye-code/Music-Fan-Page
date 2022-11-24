import React, { useState } from 'react'

const Song = () =>{
    const songs = [
        'Location',
        'Starlight',
        'Clash',
        'Thiago Silva',
        'Verdansk',
        'No Words',
        'In The Fire',
        'Funky Friday',
        'Streatham'
    ]

    const [song, setSong] = useState([]);

    function getSong(number){ 
        const chosenSong = songs.filter((s, i) => i == number ?? s)
        setSong(chosenSong)
    }
    function randNum(){
        return Math.floor(Math.random() * songs.length);
    }
    return(
        <>
        <button onClick={() => getSong(randNum())}>
            Click Here for a Random Song.
        </button>
        <p id='song'>{song}</p>
        </>
    )
}

export default Song;
