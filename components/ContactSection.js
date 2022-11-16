import { Poppins } from "@next/font/google"
import { MdAlternateEmail } from 'react-icons/md'
import { MdPhone } from 'react-icons/md'
import { ImMap } from 'react-icons/im'

import classes from './ContactSection.module.css'

const poppins = Poppins({ weight: '400' })
const poppinsBold = Poppins({ weight: '700' })

const ContactSection = () => {
    return (
        <section className={`${classes.container} ${poppins.className}`}>
            <h2 className={`${classes.title} ${poppinsBold.className}`}>Contact</h2>

            <div className={classes.mainContent}>
                <div className={classes.contactMethod}>
                    <div className={classes.contactIcon}>
                        <MdPhone />
                    </div>
                    <div className={classes.contactText}>
                        <a href="callto:0268365556">0268 365 556</a>
                    </div>
                </div>

                <div className={classes.contactMethod}>
                    <div className={classes.contactIcon}>
                        <MdAlternateEmail />
                    </div>
                    <div className={classes.contactText}>
                        <a href="mailto:osciucas@yahoo.com">osciucas@yahoo.com</a>
                    </div>
                </div>

                <div className={classes.contactMethod}>
                    <div className={classes.contactIcon}>
                        <ImMap />
                    </div>
                    <div className={classes.contactText}>
                        Zizinului 2, Tarlungeni, Brasov
                    </div>
                </div>
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2789.0733444938983!2d25.760139051277505!3d45.64934882898814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b3674b4a7492e3%3A0xf06e9a569cbd66f5!2sStrada%20Zizinului%202%2C%20T%C4%83rlungeni%20507220!5e0!3m2!1sen!2sro!4v1667522600156!5m2!1sen!2sro" width="100%" height="450" style={{ border: 0, borderRadius: 18, marginTop: 20 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section >
    )
}

export default ContactSection
