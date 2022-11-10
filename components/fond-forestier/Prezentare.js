import { Poppins } from '@next/font/google'

import classes from './Prezentare.module.css'

const poppins = Poppins({ weight: '400' })
const poppinsBold = Poppins({ weight: '700' })

const Prezentare = () => {
    return (
        <div className={`${classes.container} ${poppins.className}`}>
            <h1 className={`${poppinsBold.className} ${classes.title}`}>
                Fond Forestier
            </h1>

            <div className={classes.contentContainer}>
                <p>Ocolul Silvic Ciucaș RA administrează o suprafață de fond forestier de 6012,27 ha, proprietate publică a Comunei Tărlungeni, și 124,4 ha fond forestier proprietate privată a Parohiilor Evanghelice Luterane Maghiare Purcăreni, Zizin și Tărlungeni.
                </p>
                <p>Din suprafața menționată anterior 24,9 ha reprezintă rezervații de semințe, necesare recoltării materialului semincer de calitate în vederea regenerării corespunzătoare a pădurii, și 887,7 ha reprezintă păduri cu funcții speciale de protecție a apelor sau solului, din care nu se recoltează masă lemnoasă decât ca produse accidentale și igienă. Din total suprafață, 2159,4 ha se suprapune peste Situl de Importanță Comunitară Natura 2000 ROSCI 0038 munții Ciucaș.
                </p>
                <p>Conform amenajamentelor silvice, fondul forestier proprietate a Comunei Tărlungeni este împărțit în 3 Unități de Producție, respectiv UP I – Dălghiu, UP II – Valea Zizinului și UP III – Valea Satului, iar fondul forestier al Parohiilor Evanghelice este grupat într-un singul amenajament silvic, UP I – Convenția Tărlungeni.
                </p>
                <p>Din punct de vedere administrativ, conform organigramei ocolului silvic, fondul forestier este împărțit în 9 cantoane silvice, fiecare canton fiind gestionat de un pădurar, acestea fiind grupate în 2 districte silvice, fiecare condus de un șef de district.
                </p>
                <p>Din punct de vedere geografic, suprafața administrată este amplasată de-a lungul a 4 văi principale, aparținând bazinului râului Buzău, respectiv Valea Dălghiului, și bazinului râului Tărlung, respectiv Valea Zizinului, Valea Satului și Valea Dracului.
                </p>
                <p>Accesul în fondul forestier se realizează pe următoarele drumuri auto: DJ 103 A Zizin – Dălghiu, DN 11 Teliu – Vama Buzăului și DN 1A Săcele- Cheia – Ploiești.
                </p>
                <p>Exploatarea masei lemnoase din fondul forestier administrat de Ocolul Silvic Ciucaș RA se face în conformitate cu prevederile amenajamentelor silvice în vigoare, volumul posibil de recoltat din pădurea proprietate a Comunei Tărlungeni fiind de 26312 metri cubi pe an, repartizat astfel, pe natură de produse:
                </p>
                <p>Posibilitatea de produse principale: 18178 metri cubi pe an
                </p>
                <p>Posibilitatea de produse secundare (curățiri și rărituri): 6442 metri cubi pe an
                </p>
                <p>Tăieri de conservare: 1692 metri cubi pe an
                </p>
                <p>Din fondul forestier se recoltează cu prioritate produsele accidentale (arbori uscați, rupți sau doborâți de vânt și zăpadă) în vederea evitării apariției de focare de infestare cu insecte xilofage sau defoliatoare și menținerii arboretelor într-o stare fitosanitară bună.
                </p>
            </div>
        </div>
    )
}

export default Prezentare
