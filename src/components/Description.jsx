import React from 'react';

const Description = (props) =>{
    return (
        <div id='description'>
            <h1>{props.name}</h1>
            <ul>
                <li>{props.genre}</li>
                <li>{props.genre2}</li>
                <li>{props.genre3}</li>
            </ul>
            <p>{props.about}</p>
        </div>
    )
}

export default Description
