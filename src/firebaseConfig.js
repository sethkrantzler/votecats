// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANFcqVV70xABq37nC2Tp_sNbJdaSZ0Efs",
  authDomain: "votecats.firebaseapp.com",
  projectId: "votecats",
  storageBucket: "votecats.appspot.com",
  messagingSenderId: "564792623026",
  appId: "1:564792623026:web:41fb67ea13bfe0a306eeab",
  measurementId: "G-F7M0XWB52M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
