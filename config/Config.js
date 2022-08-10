import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
import { collection } from "firebase/firestore";

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
export const authentication = getAuth(app)

// Initialize Firestore
export const db = getFirestore(app)