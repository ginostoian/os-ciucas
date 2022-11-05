import Link from 'next/link'
import { Poppins } from '@next/font/google'

import classes from './HomeHero.module.css'

const poppins = Poppins({ weight: '400' })
const poppinsBold = Poppins({ weight: '700' })

const HomeHero = ({ title, height }) => {
    return (
        <div className={`${classes.hero} ${poppins.className}`} style={{ height: `${height}` }}>
            <h1 className={`${classes.heroTitle} ${poppinsBold.className}`}>{title}</h1>
            <Link href='/contact'>
                <div className={classes.heroBtn}>Contact</div>
            </Link>
        </div>
    )
}

export default HomeHero
