import { Poppins } from '@next/font/google'

import MembruConducere from "../components/conducere/MembruConducere"
import HomeHero from "../components/HomeHero"
import conducere from "../utils/conducere"
import classes from "../components/conducere/MembruConducere.module.css"
import ContactSection from '../components/ContactSection'

const poppins = Poppins({ weight: '400' })
const poppinsBold = Poppins({ weight: '700' })

const ConducerePage = ({ conducere }) => {
    console.log(conducere)
    return (
        <main>
            <HomeHero title='Conducerea Ocolului Silvic Ciucas' height='50vh' />
            <section className={`${classes.container} ${poppins.className}`}>
                <h2 className={`${classes.title} ${poppinsBold.className}`}>Membrii Conducerii</h2>
                <div className={classes.mainContainer}>
                    {conducere.map(membru => {
                        return <MembruConducere membru={membru} key={membru.name} />
                    })}
                </div>
            </section>
            <ContactSection />
        </main>
    )
}

export async function getStaticProps() {
    return {
        props: { conducere }
    }
}

export default ConducerePage
