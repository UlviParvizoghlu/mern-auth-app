// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-4bb30.firebaseapp.com",
  projectId: "mern-auth-4bb30",
  storageBucket: "mern-auth-4bb30.appspot.com",
  messagingSenderId: "279067165196",
  appId: "1:279067165196:web:32d4fec90482ac31aa6429"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);