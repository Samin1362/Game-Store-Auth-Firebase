// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMG8vuv4I61-RKhivZfzZp-evcLr1zo0U",
  authDomain: "game-store-firebase-auth.firebaseapp.com",
  projectId: "game-store-firebase-auth",
  storageBucket: "game-store-firebase-auth.firebasestorage.app",
  messagingSenderId: "773688419333",
  appId: "1:773688419333:web:3b0608fea33aa4581d286c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;