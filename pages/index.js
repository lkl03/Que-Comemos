import Head from 'next/head'
import Image from 'next/image'
import Logo from '../components/Logo'
import Search from '../components/Search'
import Button from '../components/Button'
import InfoButtons from '../components/InfoButtons'
import Footer from '../components/Footer'
import { useState } from 'react'
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

export default function Home(props) {

  const [clicked, setClicked] = useState(false)

    const handleClicked = (props) => {
      setClicked(!clicked)
    }

  return (
    <>
      <Head>
        <title>Qué Comemos?</title>
      </Head>
      <div className="container">
        <Logo />
        <Search />
        <div className="main_button">
        <p>¿O estás sin ideas? ¡Te ayudamos!</p>
        <button onClick={handleClicked}>{clicked ? 'Preparando...' : 'Generar receta '} <FaCog className={clicked ? 'main_button-spinner' : null}/> </button>
        {clicked ? 
          <div>
                <p style={{fontWeight: 'bold'}}>{props.anime}</p>
                <p>{props.quote}</p>
                <p style={{fontWeight: 'bold'}}>-{props.character}</p>
            </div> : ''}
        </div>
        <InfoButtons />
        <Footer />
      </div>
    </>
  )
}


