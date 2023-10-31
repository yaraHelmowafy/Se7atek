import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";


const app = firebase.initializeApp({
  apiKey: "AIzaSyAU7FW7jP_I0NZzHh2oVFo3leeROcx_hdU",
  authDomain: "medical-care-d8b8b.firebaseapp.com",
  projectId: "medical-care-d8b8b",
  storageBucket: "medical-care-d8b8b.appspot.com",
  messagingSenderId: "709793006280",
  appId: "1:709793006280:web:47e9e06bfc5e365bff5bfd"
});

export default app;
export const db = getFirestore(app);
const analytics = getAnalytics(app);
export const storage = getStorage(app);