import { Poppins } from '@next/font/google'

import classes from './Prezentare.module.css'

const poppins = Poppins({ weight: '400' })
const poppinsBold = Poppins({ weight: '700' })

const Prezentare = () => {
    return (
        <div className={`${classes.container} ${poppins.className}`}>
            <h1 className={`${poppinsBold.className} ${classes.title}`}>
                Activitatea de paza a padurii
            </h1>

            <div className={classes.contentContainer}>
                <p>Activitatea de paza are un rol foarte important in gestionarea durabila a padurilor prin asigurarea integritatii fondului forestier administrat.</p>
                <p>Rolul activitatii de paza consta in prevenirea taierilor si sustragerilor ilegale de material lemnos si cetina prin organizarea de patrulari in fond forestier in zonele expuse sustragerilor de material lemnos( Zizin, Sacele-cartier Garcin) dar si prin efectuarea controlului circulatiei materialului lemnos atat pe drumurile forestiere cat si pe cele publice cu sprijinul organelor abilitate in acest sens.</p>
            </div>

            <h2 className={`${poppinsBold.className} ${classes.title}`}>
                Activitatea de protectie a padurii
            </h2>

            <div className={classes.contentContainer}>
                <p>Consta in monitorizarea si combaterea acolo unde este cazul a populatiilor de daunatori forestieri pentru mentinerea unei stari fitosanitare bune a padurii.</p>
                <p>Lucrariile de combatere se realizeaza prin aplicarea unor masuri ferme conform legislatiei in vigoare, prin amplasarea unor curse feromonale de depistare si monitorizare a populatiilor de daunatori. Principalele specii de daunatori din cadrul ocolului sunt reprezentate de gandacii de scoarta ai rasinoaselor( Fam. Ipidae), defoliatorul rasinoaselor( Lymantria monacha), daunatori ai puietiilor( Hylobius sp.), sau cei din pepiniere( coropisnita, carabusul).</p>
                <p>De asemenea pentru mentinerea in bune conditii a rolului social si recreativ al padurii ocolul organizeaza in fiecare an actiuni de ecologizare a fondului forestier impreuna cu studentii Facultatii de Silvicultura si Exploatari Forestiere din cadrul Universitatii Transilvania Brasov si diferite ONG-uri.</p>
            </div>
        </div>
    )
}

export default Prezentare
