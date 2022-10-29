import Link from 'next/link'
import { BsArrowDownCircle } from 'react-icons/bs'

import classes from './Navbar.module.css'

const NavDropdown = ({ onMouseLeave }) => {
    return (
        <div className={`${classes.navDropdown}`} onMouseLeave={onMouseLeave}>
            <ul className=''>
                <li>
                    <Link href='/'>Acasa</Link>
                </li>
                <li>
                    <Link href='/despre-noi'>Despre noi</Link>
                </li>
                <li>
                    <Link href='/compartimente' className='flex justify-between gap-1 align items-center'>
                        Compartimente
                        <BsArrowDownCircle />
                    </Link>
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
    )
}

export default NavDropdown
