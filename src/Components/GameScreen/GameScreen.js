import { useState, useEffect } from "react"
import { toast, ToastContainer } from "react-toastify"
import ChalaButton from "../ChalaButton/ChalaButton"
import EventItem from "../EventList/EventItem"
import './GameScreen.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from 'react-router-dom';

const GameScreen = () => {
    const MySwal = withReactContent(Swal)
    const [segundos, setSegundos] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setSegundos(prev => prev + 1)
        }, 1000);
      
        return () => {
          clearInterval(intervalId)
        }
      }, [segundos])

    const [scoreArray, setScoreArray] = useState([])
    let provArray = scoreArray

    if(sessionStorage.getItem("ListaDeEventos")==null){
        sessionStorage.setItem("ListaDeEventos", JSON.stringify(['Ya estoy careta (Termina la partida) *OBLIGATORIO']))
    }
    let list = JSON.parse(sessionStorage.getItem("ListaDeEventos"))
    list[0] = 'Ya estoy careta (Termina la partida)'

    function calculateResult(score){
        const efectividad = ((score/segundos)*6000).toFixed(2)

        let result = `Tuviste ${score} eventos, ó 1 evento cada ${(segundos/score).toFixed(1)} segundos.
        Una efectividad del ${efectividad}% según nuestro equipo de balance. `

        if(efectividad>100){
            result+="Rompiste el fumómetro."

        } else if(efectividad > 75){
            result+= "Te envidio, yo quiero una fumada así."

        } else if(efectividad > 50){
            result+= "Fue una fumada épica."

        } else if(efectividad > 25){
            result+= "Estuvo bien, pero hubo mejores."

        } else if(efectividad > 10){
            result+= "Realmente fumaste?"
        } else{
            result+= "Te olvidaste de los eventos? Capaz hay que cambiar de genética"
        }

        if(score===0){
            result="Pero realmente fue una fumada? Porque no apretaste ningún botón, crack."
        }

        
        return result
    }

    function calculateScore(array){
        let score = 0;

        array.forEach(element => {
            score+=element;
        });
        
        console.log("score final: " + score)

        return calculateResult(score)
    }
    
    const navigate = useNavigate();
    
    function assignPoints (e) {

        const index = e.target.id

        if(index!=="0"){

            
            
            if(isNaN(provArray[index])){
                provArray[index]=0;
            }
            
            provArray[index]+=1
            setScoreArray(provArray)
            console.log(scoreArray)
            
            toast.info(`+1 a "${list[index]}"`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else{

            MySwal.fire({
                title: '¿Terminamos la partida?',
                showDenyButton: true,
                confirmButtonText: 'Sí, ya estoy careta',
                denyButtonText: `No, flashié de botón`,
              }).then((result) => {
                if (result.isConfirmed) {
                    const finalScore = calculateScore(scoreArray)
                    Swal.fire(`Tu fumada duró ${Math.floor(segundos/60) + ":" + (segundos%60).toString().padStart(2, '0')}`, `${finalScore}`, 'success')
                    navigate('/Palfummon');
                } else if (result.isDenied) {
                  Swal.fire('Tranqui pa, nos pasa a todos', '', 'info')
                }
              })
        }


    }


    function toggleTime() {
        const Timer = document.getElementById("Timer")

        if (Timer.style.display==="none"){
            Timer.style.display="block";
        }else{
            Timer.style.display="none";
        }
    }
    


    return (
        
        <div className="GameEventContainer">
            <ToastContainer 
            />
            {list.map((text, index) => (
                    <div className="GameEventPanel">
                        <div onClick={assignPoints}>
                            <ChalaButton  id={index}/>
                        </div>
                        <EventItem className="coloredPanel" text={`${index+1}. ${text}`}></EventItem>
                    </div>
                ))}
            <div style={{display:"flex", height:40, alignItems:"center", gap:20}}>
                <button onClick={toggleTime}>Mostrar/Ocultar Tiempo</button>
                <h3 id="Timer">
                    {Math.floor(segundos/60) + ":" + (segundos%60).toString().padStart(2, '0')}
                </h3>
            </div>
        </div>
    )
}

export default GameScreen