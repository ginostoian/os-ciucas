import { useState, useEffect } from "react"
import { getDocs, collection } from "firebase/firestore"
import { Poppins } from "@next/font/google"
import { useRouter } from "next/router"

import { db } from "../../firebase"

import classes from './Login.module.css'

const poppins = Poppins({ weight: '400' })
const poppinsBold = Poppins({ weight: '700' })

const Login = () => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredPassword, setEnteredPassword] = useState('')
    const [users, setUsers] = useState([])

    const router = useRouter()

    const handleUsernameChange = (e) => setEnteredUsername(e.target.value)
    const handlePasswordChange = (e) => setEnteredPassword(e.target.value)

    useEffect(() => {
        const getData = async () => {
            const data = []
            const querySnapshot = await getDocs(collection(db, "users"));
            querySnapshot.forEach((doc) => {
                data.push(doc.data())
            });
            setUsers(data)
        }

        getData()
    }, [])

    const setWithExpiry = (key, value, ttl) => {
        const now = new Date()
        // `item` is an object which contains the original value
        // as well as the time when it's supposed to expire
        const item = {
            value: value,
            expiry: now.getTime() + ttl,
        }
        localStorage.setItem(key, JSON.stringify(item))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { username, password } = users[0]

        // check if user typed in credentials
        if (!enteredUsername) return
        if (!enteredPassword) return

        if (enteredUsername === username) {
            if (enteredPassword === password) {
                setWithExpiry('isLoggedIn', true, 43200000)
                setEnteredPassword('')
                setEnteredUsername('')
                router.push('/admin')
            } else {
                alert('wrong credentials')
            }
        }
    }

    return (
        <section className={`${poppins.className} ${classes.container}`}>
            <h2 className={classes.title}>Autentificare</h2>

            <form onSubmit={handleSubmit} className={classes.signInForm}>
                <div className={classes.inputGroup}>
                    <label htmlFor="username">Username</label>
                    <input value={enteredUsername} onChange={handleUsernameChange} type="text" id="username" />
                </div>

                <div className={classes.inputGroup}>
                    <label htmlFor="password">Password</label>
                    <input value={enteredPassword} onChange={handlePasswordChange} type="password" id="password" />
                </div>

                <div className={classes.inputGroup}>
                    <button type="submit">Login</button>
                </div>
            </form>

        </section>
    )
}

export default Login
