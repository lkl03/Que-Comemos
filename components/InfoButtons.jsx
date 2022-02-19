import React from 'react'
import { FaTools, FaHeart, FaInfoCircle } from 'react-icons/fa'

const InfoButtons = () => {
  return (
    <div className="main_buttons">
        <button>¿Cómo funciona? <FaInfoCircle /></button>
        <button>Colaborar <FaHeart /></button>
        <button>Changelog <FaTools /></button>
    </div>
  )
}

export default InfoButtons