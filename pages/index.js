import Head from 'next/head'
import Image from 'next/image'
import Logo from '../components/Logo'
import Search from '../components/Search'
import Button from '../components/Button'
import InfoButtons from '../components/InfoButtons'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'
import { FaCog } from 'react-icons/fa'

{/*export async function getServerSideProps() {
  const res = await fetch(`https://animechan.vercel.app/api/random`)
  const data = await res.json()

  return {
    props: {
      quote: data.quote,
      anime: data.anime,
      character: data.character
    }
  }
}*/}

export default function Home() {

  const [quote, setQuote] = useState({
    anime: 'Preparando...',
    character: null,
    quote: null
  })

  const fetchQuote = async () => {
    return await fetch('https://animechan.vercel.app/api/random')
      .then(response => response.json())
  }

  const generate = async () => {
    setClicked(true) 
    if(clicked == true){
      setQuote(await fetchQuote())
    }
  }


  const [clicked, setClicked] = useState(false)

    const handleClicked = () => {
      setClicked(false)
    }

  return (
    <>
      <Head>
        <title>Qué Comemos?</title>
      </Head>
      <div className="container">
        {/*<Logo />*/}
        <Search />
        <div className="main_button">
          <p>¿O estás sin ideas? ¡Te ayudamos!</p>
          <button onClick={generate}>{clicked && quote ? 'Generar nueva receta' : 'Generar receta '} <FaCog className={clicked ? 'main_button-spinner' : null}/> </button>
          {clicked ? 
              <div>
                <p style={{fontWeight: 'bold'}}>{quote.anime}</p>
                <p>{quote.quote}</p>
                <p style={{fontWeight: 'bold'}}>{quote.character}</p>
              </div> 
            : ''
          }
        </div>
        <a onClick={handleClicked}>cerrar</a>
        <InfoButtons />
        <Footer />
      </div>
    </>
  )
}


