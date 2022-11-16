import Link from "next/link"
import { Poppins } from "@next/font/google"

import classes from './Anunt.module.css'

const poppins = Poppins({ weight: '400' })
const poppinsBold = Poppins({ weight: '700' })

const Anunt = () => {
    return (
        <div className={`${classes.anuntContainer} ${poppins.className}`}>
            <h3 className={`${classes.anuntTitle} ${poppinsBold.className}`}>Licitatie de masa imbulzata</h3>
            <p className={classes.anuntDescription}>OS Ciucas Scoate la licitatie o multitudine de masa imbulzata si este incredibil.</p>
            <div className={classes.anuntFooter}>
                <p className={classes.anuntDate}>12.08.2022</p>
                <a target='_blank' rel='noreferrer' className={classes.anuntLink} href="https://www.osbucegipiatracraiuluiciucas.ro/wp-content/uploads/2022/10/Anunt-17.10.2022.pdf">Descarca</a>
            </div>
        </div>
    )
}

export default Anunt
