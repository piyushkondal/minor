// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8iet5Guz2s0W02gkA9sbhV_r4fk2Chss",
  authDomain: "study-group-firebase.firebaseapp.com",
  projectId: "study-group-firebase",
  storageBucket: "study-group-firebase.firebasestorage.app",
  messagingSenderId: "520600477851",
  appId: "1:520600477851:web:788e6aa3f40845b970263e",
  measurementId: "G-H7D4QPGB36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();
 export const db = getFirestore();