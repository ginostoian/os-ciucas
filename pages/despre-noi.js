import ContactSection from "../components/ContactSection"
import Prezentare from "../components/despre-noi/Prezentare"
import HomeHero from "../components/HomeHero"

const DespreNoiPage = () => {
    return (
        <main>
            <HomeHero title='Despre Ocolul Silvic Ciucas' height='50vh' />
            <Prezentare />
            <ContactSection />
        </main>
    )
}

export default DespreNoiPage
