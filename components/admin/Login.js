import { useState, useEffect } from "react"
import { getDocs, collection } from "firebase/firestore"
import { Poppins } from "@next/font/google"

import { db } from "../../firebase"

import classes from './Login.module.css'

const poppins = Poppins({ weight: '400' })
const poppinsBold = Poppins({ weight: '700' })

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [users, setUsers] = useState([])

    const handleUsernameChange = (e) => setUsername(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)

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

    console.log(users)

    return (
        <section className={`${poppins.className} ${classes.container}`}>
            <h2 className={classes.title}>Autentificare</h2>

            <form className={classes.signInForm}>
                <div className={classes.inputGroup}>
                    <label htmlFor="username">Username</label>
                    <input onChange={handleUsernameChange} type="text" id="username" />
                </div>

                <div className={classes.inputGroup}>
                    <label htmlFor="password">Password</label>
                    <input onChange={handlePasswordChange} type="password" id="password" />
                </div>

                <div className={classes.inputGroup}>
                    <button type="submit">Login</button>
                </div>
            </form>

        </section>
    )
}

export default Login
