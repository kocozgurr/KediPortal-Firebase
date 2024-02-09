import firebase from "firebase/compat/app";

import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBp5Q3UUzr21FUORvDXxy64xDZd2_yX4mc",
    authDomain: "kedidb.firebaseapp.com",
    projectId: "kedidb",
    storageBucket: "kedidb.appspot.com",
    messagingSenderId: "295015087554",
    appId: "1:295015087554:web:880b8c015b0619d22baa5b",
    measurementId: "G-QQL2MZSVP8"
};


const db = firebase.initializeApp(firebaseConfig)


export { db };