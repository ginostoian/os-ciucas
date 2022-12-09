import { useState, useEffect } from "react"
import { useRouter } from "next/router"

import HomeHero from "../../components/HomeHero"

const AdminPage = () => {
    const [loginStatus, setLoginStatus] = useState(null)
    const router = useRouter()

    useEffect(() => {
        const getWithExpiry = (key) => {
            const itemStr = localStorage.getItem(key)
            // if the item doesn't exist, return null
            if (!itemStr) {
                router.push('/admin/login')
                return null
            }
            const item = JSON.parse(itemStr)
            const now = new Date()
            // compare the expiry time of the item with the current time
            if (now.getTime() > item.expiry) {
                // If the item is expired, delete the item from storage
                // and return null
                localStorage.removeItem(key)
                router.push('/admin/login')
                return null
            }
            return item.value
        }

        setLoginStatus(getWithExpiry('isLoggedIn'))
    }, [router])

    console.log(loginStatus)

    if (loginStatus === true) {
        return (
            <main>
                <HomeHero title={'Panou de control'} height={'40vh'} />
            </main>
        )
    }
}

export default AdminPage
