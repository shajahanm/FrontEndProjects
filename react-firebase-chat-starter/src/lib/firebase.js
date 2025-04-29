// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API,
    authDomain: "reactchat-e2513.firebaseapp.com",
    projectId: "reactchat-e2513",
    storageBucket: "reactchat-e2513.firebasestorage.app",
    messagingSenderId: "96938237046",
    appId: "1:96938237046:web:ccb74d0a32fc8bc3475357"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore()