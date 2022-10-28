import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

import classes from './Navbar.module.css'

function Navbar() {
    return (
        <nav>
            <div className={classes.logoContainer}>
                <Link href='/'>
                    <Image src='/images/os-ciucas-logo.png' alt='Logo Ocol Silvic Ciucas' width='120' height='120' />
                </Link>
            </div>

            <div className={classes.linksContainer}>
                <ul>
                    <li>

                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
