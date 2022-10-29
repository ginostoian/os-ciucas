import { Poppins } from '@next/font/google'

import classes from './Footer.module.css'

const poppins = Poppins({ weight: '400' })

const Footer = () => {
    return (
        <footer className={`${poppins.className} ${classes.footer}`}>
            Footer
        </footer>
    )
}

export default Footer
