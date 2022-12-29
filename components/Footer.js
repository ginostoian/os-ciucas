import { Poppins } from '@next/font/google'
import { useRouter } from 'next/router'

import classes from './Footer.module.css'

const poppins = Poppins({ weight: '400' })

const Footer = () => {
    const router = useRouter()

    const handleAdminClick = (e) => {
        e.preventDefault()
        router.push('/admin/login')
    }

    return (
        <footer className={`${poppins.className} ${classes.footer}`}>
            <div onClick={handleAdminClick} className={classes.creatorLink}>Admin dashboard</div>
            <div>
                Copyright &copy; Ocolul Silvic Ciucas. Web application crafted by <a className={classes.creatorLink} href="https://hello10x.com" target='_blank' rel='noreferrer'>Gino Stoian</a>.
            </div>
        </footer>
    )
}

export default Footer
