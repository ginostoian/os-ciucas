import Head from 'next/head'
import Image from 'next/image'
import Despre from '../components/home/Despre'
import Organizare from '../components/home/Organizare'
import HomeHero from '../components/HomeHero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ocolul Silvic Ciucas</title>
      </Head>
      <main>
        <HomeHero />
        <Despre />
        <Organizare />
      </main>
    </>

  )
}
