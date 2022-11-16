import Link from "next/link"
import { Poppins } from "@next/font/google"

import classes from './AnunturiBody.module.css'
import Anunt from "./Anunt"

const poppins = Poppins({ weight: '400' })
const poppinsBold = Poppins({ weight: '700' })

const AnunturiBody = (props) => {
    return (
        <section className={classes.container}>
            <h2 className={`${classes.title} ${poppinsBold.className}`}>Toate anunturile</h2>

            <div className={classes.anunturiContainer}>
                <Anunt />
                <Anunt />
                <Anunt />
                <Anunt />
                <Anunt />
                <Anunt />
            </div>
        </section>
    )
}

export default AnunturiBody
