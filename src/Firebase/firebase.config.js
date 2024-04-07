// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEfL7Mos4hZq7vJ8VVmcvgZ43cKc2mJ0U",
  authDomain: "travel-guru-2587f.firebaseapp.com",
  projectId: "travel-guru-2587f",
  storageBucket: "travel-guru-2587f.appspot.com",
  messagingSenderId: "297601718302",
  appId: "1:297601718302:web:ec5c11c6c68b139268b60f",
  measurementId: "G-B5HQ6JF40L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
