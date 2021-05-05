import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDKduRgLaWU_AuxRRWYgrQQfTBAelT3QjQ",
    authDomain: "aux-collab.firebaseapp.com",
    projectId: "aux-collab",
    storageBucket: "aux-collab.appspot.com",
    messagingSenderId: "31338257305",
    appId: "1:31338257305:web:62399d469ed72006d45108",
    measurementId: "G-4P2LL43S76"
};

firebase.initializeApp(config);
const db = firebase.firestore();

export { db };