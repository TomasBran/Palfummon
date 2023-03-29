import MainTitle from '../Title/Title'
import './MainScreen.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HowToPlay from '../HowToPlay/HowToPlay'
import SetEventList from '../SetEventList/SetEventList'
import GameScreen from '../GameScreen/GameScreen'

const Main = () =>{

    

    return(


        
        <div className='Main'>

            <BrowserRouter>

                <Routes>
                    <Route path="/Palfummon"  element={<MainTitle/>}/>
                    <Route path="/play" element={<GameScreen/>}/>
                    <Route path="/setevents" element={<SetEventList/>}/>
                    <Route path="/howtoplay" element={<HowToPlay/>}/>
                    
                </Routes>
        
           </BrowserRouter>

        </div>
    )

}

export default Main