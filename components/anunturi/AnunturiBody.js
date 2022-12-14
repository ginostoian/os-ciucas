import Link from "next/link"
import { Poppins } from "@next/font/google"
import { collection, getDocs, orderBy, query } from "firebase/firestore"
import { useEffect, useState } from "react"

import classes from './AnunturiBody.module.css'
import Anunt from "./Anunt"
import { db } from "../../firebase"

const poppins = Poppins({ weight: '400' })
const poppinsBold = Poppins({ weight: '700' })

// Try to render different types of announcements based on props coming in
const AnunturiBody = (props) => {
    const [anunturi, setAnunturi] = useState([])

    useEffect(() => {
        const getData = async () => {
            const data = []
            const querySnapshot = await getDocs(query(collection(db, "anunturi"), orderBy('data', 'desc')));
            querySnapshot.forEach((doc) => {
                data.push(doc.data())
            });

            setAnunturi(data)
        }

        getData()
    }, [])

    return (
        <section className={`${classes.container} ${poppins.className}`}>
            <h2 className={`${classes.title} ${poppinsBold.className}`}>Toate anunturile</h2>

            <div className={classes.anunturiContainer}>
                {anunturi.map((doc) => {
                    return <Anunt key={doc.titlu} anunt={doc} />
                })}
            </div>
        </section>
    )
}

export default AnunturiBody
