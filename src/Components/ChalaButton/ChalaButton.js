import {useRef, useEffect} from 'react'

const ChalaButton = ({id}) =>{

    const imgRef = useRef()

    useEffect(() => {

        const img = imgRef.current

        img.addEventListener('mousedown', buttonPressedDown)
        img.addEventListener('mouseup', buttonUnpressed)
        img.addEventListener('mouseout', buttonUnpressed)
    
      return () => {
        img.removeEventListener('mousedown', buttonPressedDown)
        img.removeEventListener('mouseup', buttonUnpressed)
        img.removeEventListener('mouseout', buttonUnpressed)
      }
    }, [])
    
    const buttonPressedDown = (e) =>{
        e.target.src="https://i.ibb.co/9NstdTX/pressed-button.png"
    }

    const buttonUnpressed = (e) =>{
        e.target.src="https://i.ibb.co/qNdNSWZ/unpressed-button.png"
    }

    return(
        <img src="https://i.ibb.co/qNdNSWZ/unpressed-button.png" ref={imgRef} alt="button" id={id} className={`Chala`}></img>
    )

}

export default ChalaButton