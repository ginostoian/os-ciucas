import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Poppins } from '@next/font/google'
import { BsArrowDownCircle } from 'react-icons/bs'

import NavDropdown from './NavDropdown'
import classes from './Navbar.module.css'

const poppins = Poppins({ weight: '400' })
const compartimenteLinks = [
    { text: 'Fond Forestier', slug: 'fond-forestier' },
    { text: 'Paza si Protectie', slug: 'paza-si-protectie' },
    { text: 'Impaduriri', slug: 'impaduriri' },
    { text: 'Compartiment Cinegetic', slug: 'compartiment-cinegetic' }
]
const anunturiLinks = [
    { text: 'Licitatii masa lemnoasa fasonata', slug: 'licitatii-masa-lemnoasa-fasonata' },
    { text: 'Licitatii masa lemnoasa', slug: 'licitatii-masa-lemnoasa' },
    { text: 'Achizitii publice', slug: 'achizitii-publice' },
    { text: 'Cariere', slug: 'cariere' },
    { text: 'Informatii de interes public', slug: 'informatii-de-interes-public' },
    { text: 'Diverse', slug: 'diverse' }
]

function Navbar() {
    const [isCompartimenteHovered, setIsCompartimenteHovered] = useState(false)
    const [isAnunturiHovered, setIsAnunturiHovered] = useState(false)

    const onHoverHandler = (e) => {
        // e.target.innerText === 'Compartimente' ? setIsCompartimenteHovered(true) : setIsAnunturiHovered(true)
        if (e.target.innerText === 'Compartimente') {
            setIsCompartimenteHovered(true)
        }

        if (e.target.innerText === 'Anunturi') {
            setIsAnunturiHovered(true)
        }
    }
    const leaveHoverHandler = (e) => {
        setIsCompartimenteHovered(false)
        setIsAnunturiHovered(false)
    }

    return (
        <>
            <nav className={`${classes.nav} ${poppins.className}`}>
                <div className={classes.logoContainer}>
                    <Link href='/'>
                        <Image src='/images/os-ciucas-logo.png' alt='Logo Ocol Silvic Ciucas' width='80' height='80' priority />
                    </Link>
                </div>

                <div className={classes.linksContainer}>
                    <ul className={classes.linksContainer__links}>
                        <li>
                            <Link href='/'>Acasa</Link>
                        </li>
                        <li>
                            <Link href='/despre-noi'>Despre noi</Link>
                        </li>
                        <li onMouseEnter={onHoverHandler}>
                            <Link href='/compartimente' className='flex justify-between gap-1 align items-center'>
                                Compartimente
                                <BsArrowDownCircle />
                            </Link>
                            {isCompartimenteHovered && <NavDropdown links={compartimenteLinks} onMouseLeave={leaveHoverHandler} />}
                        </li>
                        <li onMouseEnter={onHoverHandler}>
                            <Link href='/anunturi' className='flex justify-between gap-1 align items-center'>
                                Anunturi
                                <BsArrowDownCircle />
                            </Link>
                            {isAnunturiHovered && <NavDropdown links={anunturiLinks} onMouseLeave={leaveHoverHandler} />}
                        </li>
                        <li>
                            <Link href='/galerie'>Galerie</Link>
                        </li>
                        <li>
                            <Link href='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav >
        </>
    )
}

export default Navbar
