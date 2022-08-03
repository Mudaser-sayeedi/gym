// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6-tZ3xRtiJKyolvktYEFFeLrhGBebIBo",
  authDomain: "gmis-6e813.firebaseapp.com",
  projectId: "gmis-6e813",
  storageBucket: "gmis-6e813.appspot.com",
  messagingSenderId: "275822191016",
  appId: "1:275822191016:web:80c595439d91dbf320fd9d",
  measurementId: "G-2CFCQQPQ1S",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
