import React from 'react';
import Description from './components/Description'
import { name, genre, genre2, genre3, about} from './dave'
const App = () =>{
    return(
        <>
        <Description name={name} genre={genre} genre2 ={genre2} genre3 = {genre3} about = { about }/>
        </>
    )
}

export default App
