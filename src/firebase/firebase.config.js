// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk6635FI3bmRVBG-i4KrGca44rMITsXkg",
  authDomain: "castle-disney.firebaseapp.com",
  projectId: "castle-disney",
  storageBucket: "castle-disney.appspot.com",
  messagingSenderId: "640949661017",
  appId: "1:640949661017:web:121cdb74c5e02997c7b048"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app