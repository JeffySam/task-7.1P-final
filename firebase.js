// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCKyzbPQKdSOQUi93KytqQS-ra6SA-XVAU",
    authDomain: "devdeakin-806c4.firebaseapp.com",
    projectId: "devdeakin-806c4",
    storageBucket: "devdeakin-806c4.appspot.com",
    messagingSenderId: "711329846680",
    appId: "1:711329846680:web:134004461fb93c890bc7ed",
    measurementId: "G-W0PL7QL1JD"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// to Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
