// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaNoaL2dJx5_QCqIcKZV7DqUaZLSne4HI",
  authDomain: "practice-coffee-store.firebaseapp.com",
  projectId: "practice-coffee-store",
  storageBucket: "practice-coffee-store.appspot.com",
  messagingSenderId: "178589860474",
  appId: "1:178589860474:web:c34355a3ae6003a7cc31c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth