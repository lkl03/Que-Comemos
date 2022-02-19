import Head from 'next/head'
import Backto from '../components/Backto'
import Logo from '../components/Logo'

export default function Home() {
  return (
    <>
      <Head>
        <title>Qué Comemos? || Colaborar</title>
      </Head>
      <div className="container">
        <Backto />
        <Logo />
      </div>
    </>
  )
}