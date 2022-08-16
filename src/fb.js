import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAnCrXHZ8BCE6GFBPCkTS1jjHp7IY1TkCI",
  authDomain: "linkedin-clone-yt-23c23.firebaseapp.com",
  projectId: "linkedin-clone-yt-23c23",
  storageBucket: "linkedin-clone-yt-23c23.appspot.com",
  messagingSenderId: "56363628079",
  appId: "1:56363628079:web:6c5083f915a4f7424b38da",
  measurementId: "G-GPXBYDLH97"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };