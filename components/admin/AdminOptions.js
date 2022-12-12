import { useRouter } from 'next/router'
import { Poppins } from '@next/font/google'

import classes from './AdminOptions.module.css'

const poppins = Poppins({ weight: '400' })
const poppinsBold = Poppins({ weight: '700' })

const AdminOptions = ({ onLogout }) => {
    const router = useRouter()

    const handleLogout = () => {
        const loggedInStatus = JSON.parse(localStorage.getItem('isLoggedIn'))

        if (loggedInStatus.value === true) {
            localStorage.removeItem('isLoggedIn')
            onLogout(false)
            router.push('/')
        }
    }

    return (
        <div className={`${poppins.className} ${classes.container}`}>
            <h2 className={`${poppinsBold.className} ${classes.title}`}>Actiuni</h2>

            <div className={`${classes.mainContainer}`}>
                <div className={classes.optionContainer} onClick={handleLogout}>
                    Log out
                </div>

                <div className={classes.optionContainer}>
                    Publica anunt
                </div>
            </div>
        </div>
    )
}

export default AdminOptions
