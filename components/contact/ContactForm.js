import { useState } from 'react'
import { Poppins } from '@next/font/google'

import classes from './ContactForm.module.css'

const poppins = Poppins({ weight: '400' })
const poppinsBold = Poppins({ weight: '700' })

const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const onNameChange = (e) => {
        setName(e.target.value)
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const onPhoneChange = (e) => {
        setPhone(e.target.value)
    }

    const onMessageChange = (e) => {
        setMessage(e.target.value)
    }

    const onFormSubmit = (e) => {
        e.preventDefault()
        const formData = {}

        if (name) {
            formData.name = name
        }
        if (email) {
            formData.email = email
        }
        if (phone) {
            formData.phone = phone
        }
        if (message) {
            formData.message = message
        }

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(res => {
            console.log('Response Received')
            if (res.status === 200) {
                console.log('Response Succeded')
                setName('')
                setEmail('')
                setPhone('')
                setMessage('')
                alert('Mesajul dumneavoastra a fost trimis!')
            }
        })
        console.log(formData)
    }
    return (
        <section className={`${classes.container} ${poppins.className}`}>
            <h2 className={`${classes.title} ${poppinsBold.className}`}>Scrie-ne</h2>

            <form onSubmit={onFormSubmit} className={classes.formContainer}>
                <div className={classes.formInputs}>
                    <div className={classes.formLeft}>
                        <input onChange={onNameChange} type="text" placeholder='Nume*' value={name} required />
                        <input onChange={onEmailChange} type="email" placeholder='Email*' value={email} required />
                        <input onChange={onPhoneChange} type="number" placeholder='Telefon*' value={phone} required />
                    </div>

                    <div className={classes.formRight}>
                        <textarea onChange={onMessageChange} value={message} name="mesaj" placeholder="Mesaj" id="mesaj" className={classes.mesaj} cols="30" rows="10" required>

                        </textarea>
                    </div>
                </div>

                <button className={classes.submitBtn}>Trimite</button>
            </form>
        </section>
    )
}

export default ContactForm
