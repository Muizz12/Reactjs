import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCBu3yBlyYFu0M9_0LdGJuEo_Z5ZWsYFY8",
    authDomain: "clone-afb9e.firebaseapp.com",
    projectId: "clone-afb9e",
    storageBucket: "clone-afb9e.appspot.com",
    messagingSenderId: "657120198273",
    appId: "1:657120198273:web:d94d4be7beda2c69c0d780",
    measurementId: "G-79Z3KDE8SM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { db, auth, provider };
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
