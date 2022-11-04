import { Poppins } from "@next/font/google"
import { BsFillTreeFill } from 'react-icons/bs'
import { GiLindenLeaf } from 'react-icons/gi'
import { FaMountain } from 'react-icons/fa'

import classes from './QuickInfo.module.css'

const poppins = Poppins({ weight: '400' })
const poppinsBold = Poppins({ weight: '700' })

const QuickInfo = () => {
    return (
        <section className={`${classes.container} ${poppins.className}`}>
            <div className={classes.mainContainer}>
                <h2 className={`${classes.title} ${poppinsBold.className}`}>Misiunea noastra</h2>

                <div className={classes.mainContentContainer}>
                    <div className={classes.contentContainer}>
                        <div className={classes.contentIcon}>
                            <BsFillTreeFill />
                        </div>
                        <div className={classes.contentTitle}>
                            Gospodărirea silvică
                        </div>
                        <div className={classes.contentText}>
                            Gospodărirea silvică cuprinde lucrări de îngrijire și conducere a arborilor, menținere permanentă într-o stare fitosanitară corespunzătoare, declanșarea procesului de regenerare în arboretele preexploatabile, ajutorarea regenerării naturale și împădurirea terenurilor neacoperite cu păduri.
                        </div>
                    </div>

                    <div className={classes.contentContainer}>
                        <div className={classes.contentIcon}>
                            <GiLindenLeaf />
                        </div>
                        <div className={classes.contentTitle}>
                            Gestionarea durabilă
                        </div>
                        <div className={classes.contentText}>
                            Pădurile asigură numeroase servicii ale ecosistemelor, esențiale pentru mediu și pentru climă, ele contribuie la reglarea climei pe planeta noastră, la alimentarea bazinelor hidrografice, oferind apă curată și purifică aerul. Creșterea fondului forestier contribuie adesea la captarea unor cantități mari de dioxid de carbon din atmosferă.
                        </div>
                    </div>

                    <div className={classes.contentContainer}>
                        <div className={classes.contentIcon}>
                            <FaMountain />
                        </div>
                        <div className={classes.contentTitle}>
                            Conservarea pădurilor
                        </div>
                        <div className={classes.contentText}>
                            Conservarea biodiversității ecosistemelor forestiere implică măsuri de gestionare durabilă, prin aplicarea de tratamente intensive, care promovează regenerarea naturală a speciilor din tipul natural fundamental de pădure și prin conservarea pădurilor virgine și cvasi virgine, dar și constituirea de arii naturale protejate.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default QuickInfo
