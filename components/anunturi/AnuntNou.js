import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Poppins } from '@next/font/google'
import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

const MDEditor = dynamic(
    () => import("@uiw/react-md-editor").then((mod) => mod.default),
    { ssr: false }
);

import classes from './AnuntNou.module.css'
import addAnnouncement from "../../utils/addAnnouncement"

const poppins = Poppins({ weight: '400' })
const poppinsBold = Poppins({ weight: '700' })

const AnuntNou = () => {
    const [value, setValue] = useState("**Scrie textul anuntului aici folosind editorul**");
    const [date, setDate] = useState(null)
    const [title, setTitle] = useState(null)
    const [description, setDescription] = useState(null)
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

    return (
        <div className={`${poppins.className} ${classes.container}`}>
            <form className={classes.editorContainer}>
                <div className={classes.inputGroup}>
                    <label htmlFor="date">Data anuntului</label>
                    <input type="date" name="date" id="date" />
                </div>

                <div className={classes.inputGroup}>
                    <label htmlFor="title">Titlul anuntului</label>
                    <input type="text" name="title" id="title" />
                </div>

                <div className={classes.inputGroup}>
                    <label htmlFor="description">Descrierea anuntului</label>
                    <input type="text" name="description" id="description" placeholder="O propozitie care sa descrie anuntul" />
                </div>

                {/* Link PDF */}


                <MDEditor value={value} onChange={setValue} height='400px' />
                <button className={classes.postAdButton}>Posteaza Anunt</button>
            </form>
        </div>
    )
}

export default AnuntNou
