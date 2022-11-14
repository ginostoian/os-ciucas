import Link from "next/link"
import Image from "next/image"
import { Poppins } from "@next/font/google"

import classes from './Despre.module.css'

const poppins = Poppins({ weight: '400' })
const poppinsBold = Poppins({ weight: '700' })

const Despre = () => {
    return (
        <section className={`${classes.container} ${poppins.className}`}>
            <h2 className={`${classes.title} ${poppinsBold.className}`}>Despre Noi</h2>

            <div className={classes.mainContainer}>
                <div className={classes.mainContainerLeft}>
                    <Image src='/images/padure-1.jpg' width='500' height='500' alt='padure deasa si cativa copaci taiati' />
                </div>

                <div className={classes.mainContainerRight}>
                    <p className={classes.mainContainerRightText}>
                        Ocolul Silvic Ciucaș R.A. are ca obiect de activitate aplicarea legilor și strategiei nationale în domeniul silviculturii, actionând pentru apărarea, conservarea si dezvoltarea durabilă a fondului forestier proprietate publică a comunei Tărlungeni, fondul forestier proprietate privată a persoanelor juridice și fizice, în conformitare cu prevederile legale în vigoare.
                    </p>
                    <Link href='/despre-noi'>
                        <div className={classes.btn}>Citeste mai mult</div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Despre
