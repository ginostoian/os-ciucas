import { collection, addDoc } from "firebase/firestore"

import { db } from '../firebase'

const addAnnouncement = async (date, description, linkPdf, announcementText, title) => {
    try {
        const docRef = await addDoc(collection(db, "anunturi"), {
            data: date,
            descriere: description,
            linkPdf: linkPdf,
            textAnunt: announcementText,
            titlu: title
        });

        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export default addAnnouncement