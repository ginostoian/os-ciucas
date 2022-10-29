import Link from 'next/link'
import { BsArrowDownCircle } from 'react-icons/bs'

import classes from './Navbar.module.css'

const NavDropdown = ({ onMouseLeave, links }) => {
    return (
        <div className={`${classes.navDropdown}`} onMouseLeave={onMouseLeave}>
            <ul className=''>
                {
                    links.map((link, index) => (
                        <li key={index}>
                            <Link href={`/${link.slug}`} >{link.text}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default NavDropdown
