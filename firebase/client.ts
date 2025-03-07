// Import the functions you need from the SDKs you need

"use client";
import { initializeApp, getApps } from "firebase/app";
import { Auth } from "firebase/auth";
import { FirebaseStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKW6EBgPjzpx676CEJTs6x7pWRh0Kvcfg",
  authDomain: "fire-homes-course-b5637.firebaseapp.com",
  projectId: "fire-homes-course-b5637",
  storageBucket: "fire-homes-course-b5637.firebasestorage.app",
  messagingSenderId: "1022909676355",
  appId: "1:1022909676355:web:4f737ed93974b698288df6",
};

// Initialize Firebase

const currentApps = getApps();
let auth: Auth;
let storage: FirebaseStorage;

if (!currentApps.length) {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  storage = getStorage(app);
} else {
  const app = currentApps[0];
  auth = getAuth(app);
  storage = getStorage(app);
}

export { auth, storage };
