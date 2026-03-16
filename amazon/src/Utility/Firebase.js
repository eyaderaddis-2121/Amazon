
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth";
import "firebase/compat/firestore";




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd_FsZQ3SD5Br3M48TQnpfo8TMYTB10HI",
  authDomain: "eyu-f1468.firebaseapp.com",
  projectId: "eyu-f1468",
  storageBucket: "eyu-f1468.firebasestorage.app",
  messagingSenderId: "934650581283",
  appId: "1:934650581283:web:cb99b3281a7ef5d0d2fc96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);