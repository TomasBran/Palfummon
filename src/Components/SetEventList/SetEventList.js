import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EventList from "../EventList/EventList";


const SetEventList = () => {

        const saveStorage = () => {
            sessionStorage.setItem("ListaDeEventos", JSON.stringify(eventList));
        }

        const [eventList, setEventList] = useState(['Ya estoy careta (Termina la partida) *OBLIGATORIO'])


        useEffect(() => {
            
            setEventList(JSON.parse(sessionStorage.getItem("ListaDeEventos")))
        
        }, [])
        

        if(sessionStorage.getItem("ListaDeEventos")==null){
            saveStorage();;
        }
        

        const [input, setInput] = useState('')


        const AddEvent = () => {
            
            let auxVar = true;
            eventList.map(function() {
                if (auxVar){
                    setEventList(prev => [...prev, input])
                    setInput('')
                    auxVar=false;
                    
                }
                
            })


        }



        const resetEvents = () =>{
            
            

            if(eventList.length!==1){

                toast.error(`${eventList.length-1} Eventos Borrados`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                setEventList(['Ya estoy careta (Termina la partida) *OBLIGATORIO'])

            } else{
                toast.warn(`Solo existe el evento obligatorio`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
            
            saveStorage();

        }

        const saveEvents = () => {
            saveStorage();


            if(eventList.length!==1){
                toast.success(`${eventList.length-1} Eventos guardados`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
            }else{
                toast.warn(`Solo existe el evento obligatorio`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
            }

        }
        


    return(
        <div className='EventListContainer'>

            <ToastContainer 
            />

            <h1 className='Title'>Weed Experience</h1>
            <h2>Personalizar eventos<br/>Recordá guardar antes de salir</h2>

            <div>
                <input placeholder="Ingrese evento" value={input} onChange={(e) => setInput(e.target.value)}/>
                <button onClick={AddEvent}>+</button>
            </div>

            <EventList list={eventList}/>

            <div>
                <button onClick={saveEvents} className="Button">Guardar</button>    
                <button onClick={resetEvents} className="Button">Reset</button>
            </div>
            <Link onClick={saveStorage} to={"/Palfummon"} className='Button'>Volver al menu principal</Link>
        </div>
    )
}

export default SetEventList