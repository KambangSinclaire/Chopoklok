// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoqyLFDRc2hyhQlaNELKGQAsl7w_-4nbA",
  authDomain: "chopoklok-55247.firebaseapp.com",
  projectId: "chopoklok-55247",
  storageBucket: "chopoklok-55247.appspot.com",
  messagingSenderId: "738454329068",
  appId: "1:738454329068:web:79a2815e8e02eb9cf7f7c9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
