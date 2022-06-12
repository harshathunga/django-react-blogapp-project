// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore';
import { getStorage} from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5dkOhsmXue7_y2jeQvg1PvipPLSrvdjQ",
  authDomain: "blog-562b9.firebaseapp.com",
  projectId: "blog-562b9",
  storageBucket: "blog-562b9.appspot.com",
  messagingSenderId: "226020206138",
  appId: "1:226020206138:web:1c73d926246b6bd27ab703"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db =  getFirestore(app);
