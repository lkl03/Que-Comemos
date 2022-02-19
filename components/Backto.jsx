import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import Link from 'next/link'

const Backto = () => {
  return (
    <div className="backto">
      <Link href='/'>
        <FaArrowLeft />
      </Link>
    </div>
  )
}

export default Backto