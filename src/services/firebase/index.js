// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI2eTQyv0pczOwKPTz207gMKgZjpooh2k",
  authDomain: "applibregraff.firebaseapp.com",
  projectId: "applibregraff",
  storageBucket: "applibregraff.appspot.com",
  messagingSenderId: "1043194184178",
  appId: "1:1043194184178:web:98f3e1d0617debf4c86b6b"
};

// Initialize Firebase
//conecto al proyecto
const app = initializeApp(firebaseConfig);

//me conecto a los servicios que quiero utilizar
export const firestoreDb = getFirestore (app)