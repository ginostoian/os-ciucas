import Link from "next/link"
import { useState } from "react"
import { Poppins } from "@next/font/google"

import classes from './Anunt.module.css'
import AnuntOverlay from "./AnuntOverlay"

const poppins = Poppins({ weight: '400' })
const poppinsBold = Poppins({ weight: '700' })

const Anunt = ({ anunt }) => {
    const [isClicked, setIsClicked] = useState(false)

    const closeAdDetails = () => setIsClicked(false)

    return (
        <div className={`${classes.anuntContainer} ${poppins.className}`}>
            <h3 onClick={() => setIsClicked(true)} className={`${classes.anuntTitle} ${poppinsBold.className}`}>{anunt.titlu}</h3>
            <p onClick={() => setIsClicked(true)} className={classes.anuntDescription}>{anunt.descriere}</p>
            <div className={classes.anuntFooter}>
                <p className={classes.anuntDate}>{anunt.data}</p>
                <a target='_blank' rel='noreferrer' className={classes.anuntLink} href="https://www.osbucegipiatracraiuluiciucas.ro/wp-content/uploads/2022/10/Anunt-17.10.2022.pdf">Descarca</a>
            </div>

            {isClicked && <AnuntOverlay text={anunt.textAnunt} onClose={closeAdDetails} />}
        </div>
    )
}

export default Anunt
