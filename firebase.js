// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCn5S6O_00T-LnzlH4bReqF2fGZ0IIcHgM",
    authDomain: "os-ciucas.firebaseapp.com",
    projectId: "os-ciucas",
    storageBucket: "os-ciucas.appspot.com",
    messagingSenderId: "728474487656",
    appId: "1:728474487656:web:b161e610a2e7d33474e4dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app)

// Initialize Storage
export const storage = getStorage(app)