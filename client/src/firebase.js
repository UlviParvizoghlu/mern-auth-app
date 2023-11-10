// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "auth-9793f.firebaseapp.com",
  projectId: "auth-9793f",
  storageBucket: "auth-9793f.appspot.com",
  messagingSenderId: "955744209026",
  appId: "1:955744209026:web:dd0e3c2b6503d8a798cc9b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);