
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-8xyIyBEFhJ0zKMxTqT1Opn6cFutgb9Q",
  authDomain: "estore-53f97.firebaseapp.com",
  projectId: "estore-53f97",
  storageBucket: "estore-53f97.appspot.com",
  messagingSenderId: "461340304284",
  appId: "1:461340304284:web:dcb29640f6404b8e5a9e59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth