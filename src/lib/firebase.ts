// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzJkLvFRSvhD4BTS_KGWJZsnThJJZtCYg",
  authDomain: "collegeconnect-3e2b3.firebaseapp.com",
  projectId: "collegeconnect-3e2b3",
  storageBucket: "collegeconnect-3e2b3.firebasestorage.app",
  messagingSenderId: "887922424996",
  appId: "1:887922424996:web:cb27a029ed46fd7380fa31",
  measurementId: "G-GSP16Z15N1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

export default app;