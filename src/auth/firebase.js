// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLmZ4a8Tl5xTaCeYYc7EvYgYkrLtr5oic",
  authDomain: "accounding-service.firebaseapp.com",
  projectId: "accounding-service",
  storageBucket: "accounding-service.appspot.com",
  messagingSenderId: "813404682161",
  appId: "1:813404682161:web:69b0f181a8ee3345a66f90",
  measurementId: "G-HPBWHZ7D6R"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);



export default firebase