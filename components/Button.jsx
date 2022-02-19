import React, {useState} from 'react'
import { FaCog } from 'react-icons/fa'

const Button = () => {
  
    const [clicked, setClicked] = useState(false)

    const handleClicked = () => {
        setClicked(!clicked)
    }

    return (
    <div className="main_button">
        <p>¿O estás sin ideas? ¡Te ayudamos!</p>
        <button onClick={handleClicked}>{clicked ? 'Preparando...' : 'Generar receta '} <FaCog className={clicked ? 'main_button-spinner' : null}/> </button>
    </div>
  )
}

export default Button