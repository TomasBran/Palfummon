import { Link } from 'react-router-dom'
import '../Button/Button.css'
import './HowToPlay.css'

const HowToPlay = () => {
    
    return(
        <div className='HowToPlay'>
            <h1 className='Title'>Weed Experience</h1>
            <h2>¿Como se juega?</h2>
            <p>Este juego fue hecho para divertirte pensando en cómo te está pegando el porrito y para llevar una estadística de que te suele pasar.</p>
            <p>Para jugar, tenés que darle a comenzar, y luego ir apretando los botones correspondientes a los eventos que te vayan pasando. Por ejemplo: hacer click en el botón de "Ya me pegó" en el primer momento que te das cuenta que te pegó.</p>
            <p>Estos botones vienen con valores predeterminados, pero son completamente customizables, acorde a cómo te pegue a vos.</p>
            <p>No olvides darle al botón de "Ya estoy careta" para finalizar la partida, y ver tus resultados!!</p>
            <Link to={"/Palfummon"} className='Button'>Volver al menu principal</Link>
        </div>
    )
}

export default HowToPlay