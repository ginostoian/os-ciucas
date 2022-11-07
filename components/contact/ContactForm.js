import { useState } from 'react'
import { Poppins } from '@next/font/google'

import classes from './ContactForm.module.css'

const poppins = Poppins({ weight: '400' })
const poppinsBold = Poppins({ weight: '700' })

const ContactForm = () => {
    return (
        <section className={`${classes.container} ${poppins.className}`}>
            <h2 className={`${classes.title} ${poppinsBold.className}`}>Scrie-ne</h2>

            <form className={classes.formContainer}>
                <div className={classes.formInputs}>
                    <div className={classes.formLeft}>
                        <input type="text" placeholder='Nume*' required />
                        <input type="email" placeholder='Email*' required />
                        <input type="number" placeholder='Telefon*' required />
                    </div>

                    <div className={classes.formRight}>
                        <textarea name="mesaj" placeholder="Mesaj" id="mesaj" className={classes.mesaj} cols="30" rows="10" required>

                        </textarea>
                    </div>
                </div>

                <button className={classes.submitBtn}>Trimite</button>
            </form>
        </section>
    )
}

export default ContactForm
