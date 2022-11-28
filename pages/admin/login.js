import { Poppins } from '@next/font/google'
import Login from '../../components/admin/Login'

import HomeHero from '../../components/HomeHero'

const poppins = Poppins({ weight: '400' })
const poppinsBold = Poppins({ weight: '700' })

const LoginPage = () => {
    return (
        <main>
            <HomeHero title='Login in dashboard' height='40vh' />
            <Login />
        </main>
    )
}

export default LoginPage
