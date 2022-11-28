import { Poppins } from "@next/font/google"

import classes from './Login.module.css'

const poppins = Poppins({ weight: '400' })
const poppinsBold = Poppins({ weight: '700' })

const Login = () => {
    return (
        <section className={`${poppins.className} ${classes.container}`}>
            <h2 className={classes.title}>Autentificare</h2>

        </section>
    )
}

export default Login
