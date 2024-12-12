// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
 API = Hidden
  authDomain: "clone-2024-f1710.firebaseapp.com",
  projectId: "clone-2024-f1710",
  storageBucket: "clone-2024-f1710.firebasestorage.app",
  messagingSenderId: "46555410149",
  appId: "1:46555410149:web:ab1015817130f5d1d4ae0c",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
