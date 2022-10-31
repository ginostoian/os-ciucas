import { Poppins } from '@next/font/google'

import classes from './Footer.module.css'

const poppins = Poppins({ weight: '400' })

const Footer = () => {
    return (
        <footer className={`${poppins.className} ${classes.footer}`}>
            <div>
                Copyright &copy; Ocolul Silvic Ciucas. Website created by <a className={classes.creatorLink} href="https://hello10x.com" target='_blank' rel='noreferrer'>Gino Stoian</a>
            </div>
        </footer>
    )
}

export default Footer
