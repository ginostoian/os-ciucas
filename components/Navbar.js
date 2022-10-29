import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Poppins } from '@next/font/google'
import { BsArrowDownCircle } from 'react-icons/bs'

import NavDropdown from './NavDropdown'
import classes from './Navbar.module.css'

const poppins = Poppins({ weight: '400' })

function Navbar() {
    const [isHovered, setIsHovered] = useState(false)

    const onHoverHandler = () => setIsHovered(true)
    const leaveHoverHandler = () => setIsHovered(false)

    return (
        <>
            <nav className={`${classes.nav} ${poppins.className}`}>
                <div className={classes.logoContainer}>
                    <Link href='/'>
                        <Image src='/images/os-ciucas-logo.png' alt='Logo Ocol Silvic Ciucas' width='90' height='90' />
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
                            {isHovered && <NavDropdown onMouseLeave={leaveHoverHandler} />}
                        </li>
                        <li>
                            <Link href='/anunturi' className='flex justify-between gap-1 align items-center'>
                                Anunturi
                                <BsArrowDownCircle />
                            </Link>
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
