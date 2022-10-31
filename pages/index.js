import Head from 'next/head'
import Image from 'next/image'
import HomeHero from '../components/HomeHero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ocolul Silvic Ciucas</title>
      </Head>
      <main>
        <HomeHero />
      </main>
    </>

  )
}
