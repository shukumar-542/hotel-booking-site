// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPURWLo9kb4xlGG-60xAyOimnRTxuFv4Y",
  authDomain: "hotel-booking-auth-f33bf.firebaseapp.com",
  projectId: "hotel-booking-auth-f33bf",
  storageBucket: "hotel-booking-auth-f33bf.appspot.com",
  messagingSenderId: "581199597621",
  appId: "1:581199597621:web:4cd2199955de471389a17c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app