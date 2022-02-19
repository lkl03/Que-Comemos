import React from 'react'
import { FaCog } from 'react-icons/fa'

const Button = () => {
  return (
    <div className="main_button">
        <p>¿O estás sin ideas? ¡Te ayudamos!</p>
        <button>Generar receta <FaCog className="main_button-spinner"/> </button>
    </div>
  )
}

export default Button