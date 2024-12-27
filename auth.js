// auth.js

// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { 
    getFirestore, 
    collection, 
    addDoc,
    deleteDoc,
    doc,
    getDoc,
    updateDoc,
    query, 
    where, 
    orderBy, 
    limit,
    getDocs,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxpDkK5iruNwwW5_RevYd0q9hut6rhQNM",
    authDomain: "my-home-events.firebaseapp.com",
    projectId: "my-home-events",
    storageBucket: "my-home-events.firestorage.app",
    messagingSenderId: "132719765347",
    appId: "1:132719765347:web:5a2b8d16d39c3e58f35556",
    measurementId: "G-4TXVSJ70QW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Export Firestore functions
export const firestore = {
    collection,
    addDoc,
    deleteDoc,
    doc,
    getDoc,
    updateDoc,
    query,
    where,
    orderBy,
    limit,
    getDocs,
    onSnapshot
};

// Also keep the global assignments:
window.auth = auth;
window.db = db;
window.firestore = firestore;
