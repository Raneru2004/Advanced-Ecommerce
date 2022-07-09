// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa7w_mfMt2MQFoQQKV71FuVRlMJFrsEvE",
  authDomain: "frontend-nav-pratice.firebaseapp.com",
  projectId: "frontend-nav-pratice",
  storageBucket: "frontend-nav-pratice.appspot.com",
  messagingSenderId: "738393716685",
  appId: "1:738393716685:web:ac1ea5f4777d013f3b3684"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();