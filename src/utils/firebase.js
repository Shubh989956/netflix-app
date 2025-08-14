// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjD59XKGvpyMO_MaN2Guu-VcCDXxnR25g",
  authDomain: "netflix-app-d0c22.firebaseapp.com",
  projectId: "netflix-app-d0c22",
  storageBucket: "netflix-app-d0c22.firebasestorage.app",
  messagingSenderId: "423759385607",
  appId: "1:423759385607:web:86a5cada8cf12f22f706a2",
  measurementId: "G-72J53WSVND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();