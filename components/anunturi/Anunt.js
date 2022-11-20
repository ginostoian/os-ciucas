import Link from "next/link"
import { useState } from "react"
import { Poppins } from "@next/font/google"

import classes from './Anunt.module.css'

const poppins = Poppins({ weight: '400' })
const poppinsBold = Poppins({ weight: '700' })

const Anunt = ({ anunt }) => {
    const [isClicked, setIsClicked] = useState(false)

    return (
        <div className={`${classes.anuntContainer} ${poppins.className}`}>
            <h3 className={`${classes.anuntTitle} ${poppinsBold.className}`}>{anunt.titlu}</h3>
            <p className={classes.anuntDescription}>{anunt.descriere}</p>
            <div className={classes.anuntFooter}>
                <p className={classes.anuntDate}>{anunt.data}</p>
                <a target='_blank' rel='noreferrer' className={classes.anuntLink} href="https://www.osbucegipiatracraiuluiciucas.ro/wp-content/uploads/2022/10/Anunt-17.10.2022.pdf">Descarca</a>
            </div>
        </div>
    )
}

export default Anunt
