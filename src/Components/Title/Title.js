import EventList from '../EventList/EventList'
import './Title.css'
import '../Button/Button.css'
import { Link } from 'react-router-dom'


const MainTitle = () => {

    if(sessionStorage.getItem("ListaDeEventos")==null){
        sessionStorage.setItem("ListaDeEventos", JSON.stringify(['Ya estoy careta (Termina la partida) *OBLIGATORIO', 'Me di cuenta que estoy high', 'Me trabé al hablar', 'Me agarró un Déjà Vu', 'Mi mente omitió por completo algo que pasó']))
    }
    let list = JSON.parse(sessionStorage.getItem("ListaDeEventos"))

    return(
        <div className="MainTitleContainer">
            <div className='MainTitle'>
                <h1 className='Title'>Weed Experience</h1>
                <div className='MainText'>
                <h2>Eventos a checkear:</h2>
                
                <EventList className="coloredPanel" list={list}/>

                </div>
                
                <Link to={"/play"} className='Button'>Comenzar</Link>
                <Link to={"/setevents"} className='Button'>Personalizar eventos</Link>
                <Link to={"/howtoplay"} className='Button'>¿Cómo se juega?</Link>
            </div>
        </div>
    )
}

export default MainTitle