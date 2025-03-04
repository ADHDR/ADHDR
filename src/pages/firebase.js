// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyAYKkX-MphFZ0nHBiIY3h1HT_An0RNc38A",
    authDomain: "adhdr-a921a.firebaseapp.com",
    projectId: "adhdr-a921a",
    storageBucket: "adhdr-a921a.firebasestorage.app",
    messagingSenderId: "250292828857",
    appId: "1:250292828857:web:d34eb1d6259dda2249f968",
    measurementId: "G-5Y04Y6Q515"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;