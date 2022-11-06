import ContactForm from "../components/contact/ContactForm"
import ContactSection from "../components/ContactSection"
import HomeHero from "../components/HomeHero"

const ContactPage = () => {
    return (
        <main>
            <HomeHero title='Contacteaza Ocolul Silvic Ciucas' height='40vh' />
            <ContactForm />
            <ContactSection />
        </main>
    )
}

export default ContactPage
