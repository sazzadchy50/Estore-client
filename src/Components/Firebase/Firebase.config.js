// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDqkS_6Du7OrqzuRXyANHRhy-Jpoxhv9nc",
  authDomain: "corporate-event-manageme-66c4d.firebaseapp.com",
  projectId: "corporate-event-manageme-66c4d",
  storageBucket: "corporate-event-manageme-66c4d.appspot.com",
  messagingSenderId: "315428987639",
  appId: "1:315428987639:web:3f3287fa8bdca519d8e9f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;