import Link from 'next/link'
import { IoIosPerson } from 'react-icons/io'
import { Poppins } from '@next/font/google'

import classes from './MembruConducere.module.css'

const poppins = Poppins({ weight: '400' })
const poppinsBold = Poppins({ weight: '700' })

const MembruConducere = ({ membru }) => {
    return (

        <div className={classes.mainContainerCard}>
            <div className={classes.mainContainerCardLeft}>
                <IoIosPerson />
            </div>

            <div className={classes.mainContainerCardRight}>
                <h3 className={classes.cardTitle}>{membru.name || 'Membru'}</h3>
                <p className={classes.cardText}>{membru.position || 'Postul ocupat de acest membru'}</p>
                {/* {membru.attributions && (
                    membru.attributions.map(attribution => {
                        return <p key={Math.random()} className={classes.cardText}>{attribution}</p>
                    })
                )} */}
                {membru.cv && (
                    <a href={`${membru.cv}`} target='_blank' rel='noreferrer'>Descarcati CV-ul</a>
                )}
            </div>
        </div>
    )
}

export default MembruConducere
