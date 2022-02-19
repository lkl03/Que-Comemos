import Head from 'next/head'
import Image from 'next/image'
import Logo from '../components/Logo'
import Search from '../components/Search'
import Button from '../components/Button'
import InfoButtons from '../components/InfoButtons'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Qué Comemos?</title>
      </Head>
      <div className="container">
        <Logo />
        <Search />
        <Button />
        <InfoButtons />
        <Footer />
      </div>
    </>
  )
}
