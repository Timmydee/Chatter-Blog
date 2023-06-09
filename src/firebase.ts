// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjALarIWbVJpYdmHJ4Ta8ikKuotGOgARE",
  authDomain: "chatterwrite.firebaseapp.com",
  projectId: "chatterwrite",
  storageBucket: "chatterwrite.appspot.com",
  messagingSenderId: "1092589238940",
  appId: "1:1092589238940:web:d6d1dae70cb4c2450ecb59",
  measurementId: "G-9QTXX5WF55"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
// const analytics = getAnalytics(app);

