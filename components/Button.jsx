import React, {useState} from 'react'
import { FaCog } from 'react-icons/fa'

export async function getServerSideProps() {
    const res = await fetch(`https://animechan.vercel.app/api/random`)
    const data = await res.json()
  
    return {
      props: {
        quote: data.quote,
        anime: data.anime,
        character: data.character
      }
    }
  }

const Button = () => {
  
    const [clicked, setClicked] = useState(false)

    const handleClicked = (props) => {
        return (
            <div>
                <p style={{fontWeight: 'bold'}}>{props.anime}</p>
                <p>{props.quote}</p>
                <p style={{fontWeight: 'bold'}}>-{props.character}</p>
            </div>
        )
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