import Link from 'next/link'
import { BsArrowDownCircle } from 'react-icons/bs'
import { CgCloseR } from 'react-icons/cg'

import classes from './Navbar.module.css'

const MobileNavbar = ({ onClose }) => {
    return (
        <div className={classes.mobileNavOverlay}>
            <div className={classes.mobileNavButtonContainer} onClick={onClose}>
                <CgCloseR />
            </div>

            <div className={classes.mobileNavLinks}>
                <ul className={classes.linksContainer__links}>
                    <li onClick={onClose}>
                        <Link href='/'>Acasa</Link>
                    </li>
                    <li onClick={onClose}>
                        <Link href='/despre-noi'>Despre noi</Link>
                    </li>
                    <li onClick={onClose}>
                        <Link href='/compartimente'>
                            Compartimente
                        </Link>
                    </li>
                    <li onClick={onClose}>
                        <Link href='/anunturi'>
                            Anunturi
                        </Link>
                    </li>
                    <li onClick={onClose}>
                        <Link href='/galerie'>Galerie</Link>
                    </li>
                    <li onClick={onClose}>
                        <Link href='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MobileNavbar
