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
                <p>În vederea folosirii raţionale a potenţialului productiv al fondului forestier, a sporirii capacităţii de producţie şi protecţie a pădurii, este necesar ca pe fiecare suprafaţă în cuprinsul acestui fond să se instaleze vegetaţia lemnoasă care să corespundă în cel mai înalt grad factorilor staţionali şi cerinţelor economice de perspectivă.</p>
                <p>În vederea folosirii raţionale a potenţialului productiv al fondului forestier, a sporirii capacităţii de producţie şi protecţie a pădurii, este necesar ca pe fiecare suprafaţă în cuprinsul acestui fond să se instaleze vegetaţia lemnoasă care să corespundă în cel mai înalt grad factorilor staţionali şi cerinţelor economice de perspectivă.</p>
                <ul>
                    <li>
                        alegerea judicioasă a speciilor, în sensul unei concordanţe depline între cerinţele acestora şi specificul ecologic al staţiunii;
                    </li>
                    <li>
                        asocierea speciilor alese de aşa manieră astfel încât fiecare în parte să-şi îndeplinească rolul atribuit în compoziţia de regenerare;
                    </li>
                    <li>
                        folosirea unui material de împădurire selecţionat şi ameliorat;
                    </li>
                    <li>
                        instalarea adecvată a culturilor prin adoptarea corespunzătoare a tehnologiilor;
                    </li>
                    <li>
                        stabilirea şi aplicarea la momentul oportun a lucrărilor de întreţinere necesare până când culturile ating starea de masiv.
                    </li>
                </ul>

                <p>Puietii utilizati la impaduririle din cadrul regenerarilor mixte sunt obtinuti in pepiniera proprie cu o suprafata de 11000 mp, Ocolul Silvic Ciucaș R.A. fiind autorizat in scopul producerii de puieti forestieri.</p>

                <p>Necesitatea intervenţiei artificiale pentru instalarea culturilor forestiere se impune într-o mare diversitate de situaţii determinate de particularităţile staţionale şi de vegetaţie ale terenurilor de împădurit.  Din necesităţi practice s-a procedat la o sistematizare a terenurilor de împădurit în raport cu natura folosinţei lor anterioare, ca şi a specificului vegetaţiei lemnoase în măsura în care este semnalată. S-au diferenţiat patru categorii de terenuri, care includ multitudinea de situaţii ce pot fi întâlnite în cuprinsul fondului forestier şi în care trebuie să se intervină cu lucrări de împăduriri.</p>

                <p>Potrivit noilor norme tehnice în vigoare, terenurile de împădurit sau reîmpădurit se încadrează în una din următoarele categorii (***,2000 Norme tehnice privind compozitii, scheme şi tehnologii de regenerare a pădurilor şi de împădurire a terenurilor degradate):</p>

                <ol>
                    <li>
                        terenuri lipsite de vegetaţie lemnoasă şi anume:
                        <ol>
                            <li>
                                poieni şi goluri neregenerate din cuprinsul pădurii;
                            </li>
                            <li>
                                suprafeţe (parchete) rezultate în urma exploatării prin tăieri rase.
                            </li>
                        </ol>
                    </li>

                    <li>
                        terenuri pe care regenerarea naturală este incompletă:
                    </li>
                    <li>
                        suprafeţe ocupate cu arborete parcurse cu lucrări de regenerare sub adăpost având porţiuni neregenerate sau regenerate cu specii neindicate în compoziţia de regenerare, cu seminţiş neutilizabil, vătămat etc;
                    </li>
                </ol>

                <p>În prezent  pe raza Ocolului Silvic Ciucaș prin controlul anual al regenerărilor etapa I se urmărește o suprafață de 676,9ha regenerare naturală  iar prin controlul anual etapa a II se urmărește  o suprafață de 73,3ha , din care 35,0 ha regenerare naturală și 38,3 ha regenerare artificială.
                </p>

                <p>
                    În anul 2017 au fost plantați 34092 puieți din care : 20262 puieți molid,10250 puieți brad, 1980 puieți larice, 1600 puieți larice.
                    Pentru anul 2018 sunt prevăzuți plantarea a 25724 puieți molid, 4980 puieți larice, 12475 puieți fag, 9725 puieți brad și 2900 puieți paltin de munte.
                </p>

                <p>Programul lucrărilor de întreținere a regenerărilor pentru anul 2018 sunt următoarele:
                </p>

                <ul>
                    <li>
                        3,51 ha completarea pierderilor în regenerările din anii anteriori,
                    </li>
                    <li>
                        8,8 ha completarea regenerărilor naturale în urma lucrărilor de tăiere definitivă,
                    </li>
                    <li>
                        4,8 ha plantații integrale în urmă tăierilor rase,
                    </li>
                    <li>
                        19,0 ha revizuirea regenerărilor,
                    </li>
                    <li>
                        133,4 ha descopleșirea puieților.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Prezentare
