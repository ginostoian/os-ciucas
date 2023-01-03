import { collection, addDoc } from "firebase/firestore"

import { db } from '../firebase'

const addAnnouncement = async (postData) => {
    try {
        const docRef = await addDoc(collection(db, "anunturi"), {
            data: postData.date,
            descriere: postData.description,
            linkPdf: postData.fileUrl || null,
            textAnunt: postData.value,
            titlu: postData.title
        });

        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export default addAnnouncement