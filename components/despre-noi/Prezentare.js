import { Poppins } from '@next/font/google'

import classes from './Prezentare.module.css'

const poppins = Poppins({ weight: '400' })
const poppinsBold = Poppins({ weight: '700' })

const Prezentare = () => {
    return (
        <div className={`${classes.container} ${poppins.className}`}>
            <h1 className={`${poppinsBold.className} ${classes.title}`}>
                Prezentare Ocolul Silvic Ciucas
            </h1>

            <div className={classes.contentContainer}>
                <p>
                    Ocolul Silvic Ciucaș R.A. are ca obiect de activitate aplicarea legilor și strategiei nationale în domeniul silviculturii, actionând pentru apărarea, conservarea si dezvoltarea durabilă a fondului forestier proprietate publică a comunei Tărlungeni, a fondului forestier proprietate privată  a persoanelor juridice și fizice pe care îl administrează sau pentru care prestează servicii silvice, în conformitare cu prevederile legale în vigoare, și valorificarea, prin acte si fapte de comert, a produselor specifice fondului forestier, în conditii de eficiență economică, exercitând si atributii de serviciu public cu specific silvic.
                </p>

                <p>
                    Ocolul Silvic Ciucaş R.A. s-a înfiinţat ca regie autonomă în anul 2005, prin H.C.L. al comunei Tărlungeni nr. 74 din 28.11.2005, în vederea administrării fondului forestier proprietate publică al Comunei Tărlungeni, preluat de către aceasta în baza Legilor proprietăţii nr. 1 din 2000 şi 247 din 2005.
                </p>

                <p>
                    Ocolul Silvic Ciucaş R.A. deține Certificatul de Înregistrare cu Seria A nr. 45 din 06.04.2009, eliberat de către Ministerul Agriculturii, Pădurilor și Dezvoltării Rurale.
                </p>

                <p>
                    Ocolul Silvic Ciucaș R.A. administrează suprafaţa de 6.012,27 ha fond forestier – proprietate publică al Comunei Tărlungeni, grupată din punct de vedere al amenajamentului silvic pe trei Unități de Producţie, respectiv
                </p>

                <ul>
                    <li>U.P. I - Dălghiu</li>
                    <li>U.P. II – Valea Zizinului</li>
                    <li>U.P. III – Valea Satului.</li>
                </ul>

                <p>
                    Din această suprafaţă, 887,66 ha sunt păduri cu funcţii speciale de protecţie, 5.099,71 ha sunt păduri cu funcţii de Producţie şi Protecţie, iar 24,9 ha reprezintă rezervații de semințe necesare recoltării materialului semincer de calitate în vederea regenerării corespunzătoare a pădurii. Din punct de vedere administrativ suprafața de fond forestier administrată este împărțită în 9 cantoane silvice, gestionate de pădurari, grupate în două districte silvice.
                </p>

                <p>
                    Suprafața de fond forestier administrată de către Ocolul Silvic Ciucaș R.A. este constituită din 5.376,36 ha fond forestier preluat de către Comuna Tărlungeni de la Statul Român în baza Legilor proprietăţii nr. 1 din 2000 şi 247 din 2005, 517,0 ha pășuni împădurite proprietate privată ale comunei incluse în fond forestier odată cu amenajamentele silvice întocmite în anul 2007 și 2017, 10,46 ha teren degradat și împădurit, preluat în fond forestier în anul 2014 și 108,45 ha teren prevăzut pentru Reconstrucție ecologică forestieră pe terenuri degradate-Perimetrul de ameliorare Tărlungeni, conform avizului nr.35 din 21.04.2016 al Ministerului Apelor și Pădurilor.  Suprafaţa administrată de regie este amplasată în bazinul râurilor Zizin, Tărlung și Dălghiu, în totalitate pe teritoriul administrativ al judeţului Braşov, și situate pe UAT Tărlungeni.
                </p>

                <p>
                    Din suprafața totală, 2.159,42 ha fond forestier proprietate al Comunei Tărlungeni sunt situate în Situl Natura 2000 RO SCI 0038 – Munții Ciucaș.
                </p>

                <p>
                    Pe lângă suprafața de 6.012,27 ha, Ocolul Silvic Ciucaș administrează pe bază de contract alte 124,4 ha fond forestier proprietate privată al Parohiilor Evanghelice Luterane Maghiare Purcăreni, Zizin și Tărlungeni.
                </p>

                <p>
                    Recoltarea materialului lemnos din fondul forestier  administrat de Ocolul Sivic Ciucaș R.A. se face în conformitate cu prevederile amenajamentelor silvice în vigoare, volumul posibil de recoltat conform amenajamentelor fiind de 26.312 mc/an. Din această cantitate, ocolul silvic valorifică anual prin Hotărâre de Consiliu Local, 12.000 de metri cubi material lemnos, în mod direct, pentru consumul propriu al instituțiilor publice, al instituțiilor de interes local finanțate de la bugetul de stat sau local, pentru nevoile proprii ale persoanelor fizice, persoanelor fizice autorizate, întreprinderilor individuale si întreprinderilor familiale, asociațiilor și fundațiilor situate pe teritoriul administrativ al comunei Tărlungeni.
                </p>

                <p>
                    Produsele specifice fondului forestier, precum si celelalte bunuri care se recoltează și se valorifica din fondul forestier aflat în administrare:
                </p>

                <ol>
                    <li>
                        masa lemnoasă pe picior, provenită din taieri de produse principale, secundare, accidentale si de igiena ale pădurii si sub forma de sortimente, precum si produsele rezultate prin prelucrarea primara a lemnului;
                    </li>
                    <li>
                        alte produse lemnoase: pomi de Crăciun, puieți forestieri, si altele de aceasta natura;
                    </li>
                    <li>
                        produsele nelemnoase din fondul forestier, cum sunt: fructele de pădure, semințele forestiere, ciupercile comestibile, plantele medicinale si aromatice, cultivate si din flora spontană;
                    </li>
                </ol>

                <p>
                    Domeniul principal de activitate este `&quot;`Silvicultură şi alte activităţi forestiere`&quot;` - cod  CAEN 0210
                </p>

                <p>
                    Ocolul Silvic Ciucaș R.A. administrează și Fondul de Vânătoare nr. 44 – Zizin.
                </p>
            </div>
        </div>
    )
}

export default Prezentare
