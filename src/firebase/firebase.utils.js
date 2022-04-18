import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAbybn0GXlJjjhqJI4eRSanfCDXg18-CJw",
    authDomain: "cloth-store-db-b6082.firebaseapp.com",
    projectId: "cloth-store-db-b6082",
    storageBucket: "cloth-store-db-b6082.appspot.com",
    messagingSenderId: "335439174834",
    appId: "1:335439174834:web:c041cf0c698c2a411cfdab",
    measurementId: "G-S8W5QE7WVL"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:"select_account"})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;