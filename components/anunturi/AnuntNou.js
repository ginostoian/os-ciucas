import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Poppins } from '@next/font/google'
import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

const MDEditor = dynamic(
    () => import("@uiw/react-md-editor").then((mod) => mod.default),
    { ssr: false }
);

import { storage } from "../../firebase";
import classes from './AnuntNou.module.css'
import addAnnouncement from "../../utils/addAnnouncement"

const poppins = Poppins({ weight: '400' })
const poppinsBold = Poppins({ weight: '700' })

const AnuntNou = () => {
    // State for tracking form inputs
    const [value, setValue] = useState("**Scrie textul anuntului aici folosind editorul**");
    const [date, setDate] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [file, setFile] = useState('')
    const [fileUrl, setFileUrl] = useState('')
    // State for tracking upload progress
    const [percent, setPercent] = useState(0)
    // State for tracking login status
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

    const handleDateChange = (e) => setDate(e.target.value)
    const handleTitleChange = (e) => setTitle(e.target.value)
    const handleDescriptionChange = (e) => setDescription(e.target.value)
    const handleFileChange = (e) => setFile(e.target.files[0])

    const handleUpload = async () => {
        if (!file) {
            alert('Ataseaza document inainte de a posta anuntul!')
        }

        const storageRef = ref(storage, `/files/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );

                // update progress
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    setFileUrl(url)
                    postAd(url)
                });
            }
        );
    }

    const postAd = (url) => {
        const postData = {
            date,
            title,
            description,
            value,
            fileUrl: url
        }

        addAnnouncement(postData)
        // Reset form after submission
        setDate('')
        setDescription('')
        setTitle('')
        setValue('**Scrie textul anuntului aici folosind editorul**')
        setFile('')
        setFileUrl('')
        // Let user know that ad has been posted
        alert('Anuntul a fost postat')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleUpload()
    }

    return (
        <div className={`${poppins.className} ${classes.container}`}>
            <form className={classes.editorContainer}>
                <div className={classes.inputContainer}>
                    <div className={classes.inputGroup}>
                        <label htmlFor="date">Data anuntului</label>
                        <input type="date" name="date" id="date" onChange={handleDateChange} value={date} />
                    </div>

                    <div className={classes.inputGroup}>
                        <label htmlFor="title">Titlul anuntului</label>
                        <input type="text" name="title" id="title" onChange={handleTitleChange} value={title} />
                    </div>

                    <div className={classes.inputGroup}>
                        <label htmlFor="description">Descrierea anuntului</label>
                        <input type="text" name="description" id="description" placeholder="O propozitie care sa descrie anuntul" onChange={handleDescriptionChange} value={description} />
                    </div>

                    <div className={classes.inputGroup}>
                        <label htmlFor="file">Incarca anunt PDF</label>
                        <input type="file" name="file" id="file" accept="application/pdf" onChange={handleFileChange} />
                    </div>

                </div>
                <MDEditor value={value} onChange={setValue} height='400px' />

                <button className={classes.postAdButton} onClick={handleSubmit}>Posteaza Anunt</button>
            </form>
        </div>
    )
}

export default AnuntNou
