import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDLWdrSsu0KXx-J24Fq8XIYdxxXFPo82g8",
    authDomain: "shutters-stacker.firebaseapp.com",
    projectId: "shutters-stacker",
    storageBucket: "shutters-stacker.appspot.com",
    messagingSenderId: "11872428905",
    appId: "1:11872428905:web:72f09996aabed4d1d2d3f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;