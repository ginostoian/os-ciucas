import Link from "next/link"
import { Poppins } from "@next/font/google"
import { IoIosPeople } from 'react-icons/io'
import { TbReportSearch } from 'react-icons/tb'
import { GrCertificate } from 'react-icons/gr'

import classes from './Organizare.module.css'

const poppins = Poppins({ weight: '400' })
const poppinsBold = Poppins({ weight: '700' })

const Organizare = () => {
    return (
        <section className={`${classes.container} ${poppins.className}`}>
            <h2 className={`${classes.title} ${poppinsBold.className}`}>Organizare</h2>

            <div className={classes.mainContainer}>
                <div className={classes.mainContainerCard}>
                    <div className={classes.mainContainerCardLeft}>
                        <IoIosPeople />
                    </div>

                    <div className={classes.mainContainerCardRight}>
                        <Link href='/conducere'>
                            <h3 className={classes.cardTitle}>Conducere</h3>
                            <p className={classes.cardText}>Membrii consililului de administratie</p>
                        </Link>
                    </div>
                </div>


                <div className={classes.mainContainerCard}>
                    <div className={classes.mainContainerCardLeft}>
                        <TbReportSearch />
                    </div>

                    <div className={classes.mainContainerCardRight}>
                        <Link href='/'>
                            <h3 className={classes.cardTitle}>Regulament organizare</h3>
                            <p className={classes.cardText}>Rapoarte financiare, rapoarte de activitate</p>
                        </Link>
                    </div>
                </div>

                <div className={classes.mainContainerCard}>
                    <div className={classes.mainContainerCardLeft}>
                        <GrCertificate />
                    </div>

                    <div className={classes.mainContainerCardRight}>
                        <Link href='/'>
                            <h3 className={classes.cardTitle}>Autorizari si certificari</h3>
                            <p className={classes.cardText}>Autorizatie functionare si certificat international</p>
                        </Link>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Organizare
