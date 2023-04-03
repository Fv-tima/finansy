import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  OAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAQ_pVmUUch3WekDfSik5R-lY2L5x-PmLE",
  authDomain: "finansy-6fae8.firebaseapp.com",
  projectId: "finansy-6fae8",
  storageBucket: "finansy-6fae8.appspot.com",
  messagingSenderId: "731621333353",
  appId: "1:731621333353:web:0e650b4722c2954a4005f8",
  measurementId: "G-BQPHZ00MF5",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const fbProvider = new FacebookAuthProvider();
export const appleProvider = new OAuthProvider
export const db = getFirestore(app);
