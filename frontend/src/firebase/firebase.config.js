// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_APIKEY,
//     authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//     projectId: import.meta.env.VITE_PROJECT_ID,
//     storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//     messagingSenderId: import.meta.env.VITE_MESSAGE_SENDER_ID,
//     appId: import.meta.env.VITE_APP_ID
// };
const firebaseConfig = {
    apiKey: "AIzaSyBRQyejVw_QZBSY-lApP6Z1G_-n2Tq2AjI",
    authDomain: "book-store-mern-f7171.firebaseapp.com",
    projectId: "book-store-mern-f7171",
    storageBucket: "book-store-mern-f7171.firebasestorage.app",
    messagingSenderId: "874370989170",
    appId: "1:874370989170:web:f407f1ad9946daaabcd6eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);