 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1cMx-xwBsie79rTFkx2hcrUUO_hpYt0k",
  authDomain: "notes-8be7d.firebaseapp.com",
  projectId: "notes-8be7d",
  storageBucket: "notes-8be7d.appspot.com",
  messagingSenderId: "198892283839",
  appId: "1:198892283839:web:2d5860991d28e2dbdce30a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app)