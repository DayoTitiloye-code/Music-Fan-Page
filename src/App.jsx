import React from 'react';
import Description from './components/Description'
import Album from './components/Album'
import { name, genre, genre2, genre3, about} from './dave'
import img1 from './assets/WAAINTT.jpg'
import img2 from './assets/psychodrama.jpg'
import img3 from './assets/GameOver.jpg'
import img4 from './assets/6paths.jpg'
import './app.css'

const App = () =>{
    return(
        <>
        <Description name={ name } 
                    genre={ genre } 
                    genre2 ={ genre2 } 
                    genre3 = { genre3 } 
                    about = { about }/>
        <div id='albums'>
        <Album title={"We're All Alone in This Together"}
                desc={"We're All Alone in This Together is the second studio album by British rapper Dave, released on 23 July 2021 by Neighbourhood Recordings. "}
                img={img1}
                rating={7.5}/>

        <Album title={"Psychodrama"}
                desc={"Psychodrama is the debut studio album by British rapper Dave, released on 8 March 2019. It follows his first two EPs, Six Paths (2016) and Game Over (2017) "}
                img={img2}
                rating={9}/>

        <Album title={"Game Over"}
                desc={"Game Over is the second extended play by British rapper Dave. It was released on 3 November 2017 independently for streaming and digital download."}
                img={img3}
                rating={7}/>

        <Album title={"Six Paths"}
                desc={"Six Paths is Streatham, South London MC Dave’s debut EP. The six-track project was released on the 30th September 2016, and debuted at Number 11 in UK Albums chart."}
                img={img4}
                rating={8}/>
        </div>
        
        </>
    )
}

export default App
