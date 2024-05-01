// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-c604a.firebaseapp.com",
  projectId: "mern-auth-c604a",
  storageBucket: "mern-auth-c604a.appspot.com",
  messagingSenderId: "190229859880",
  appId: "1:190229859880:web:a69fbc550cf364573eaf1d",
  measurementId: "G-Q4V9Y1CT72"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
