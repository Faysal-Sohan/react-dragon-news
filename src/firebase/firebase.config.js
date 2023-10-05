// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCu78qetDqmIl5sQKNIEbkAi2wNk6Gii2k",
  authDomain: "react-dragon-news-auth-ea6d5.firebaseapp.com",
  projectId: "react-dragon-news-auth-ea6d5",
  storageBucket: "react-dragon-news-auth-ea6d5.appspot.com",
  messagingSenderId: "723436785573",
  appId: "1:723436785573:web:8490468a0cf148ee17624c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;