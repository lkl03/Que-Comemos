import React from 'react'
import { FaTools, FaHeart, FaInfoCircle } from 'react-icons/fa'
import Link from 'next/link'

const InfoButtons = () => {
  return (
    <div className="main_buttons">
        <Link href="../faq">
            <button>¿Cómo funciona? <FaInfoCircle /></button>
        </Link>
        <Link href="../colaborar">
            <button>Colaborar <FaHeart /></button>
        </Link>
        <Link href="../changelog">
            <button>Changelog <FaTools /></button>
        </Link>
    </div>
  )
}

export default InfoButtons