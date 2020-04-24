import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDJE2LCpznqSz_LTXclbaJAuFPw50l_5fs",
    authDomain: "crown-clothing-849f6.firebaseapp.com",
    databaseURL: "https://crown-clothing-849f6.firebaseio.com",
    projectId: "crown-clothing-849f6",
    storageBucket: "crown-clothing-849f6.appspot.com",
    messagingSenderId: "282515555698",
    appId: "1:282515555698:web:d3ffab51010f095f5f09eb",
    measurementId: "G-TN6GMVCV4Y"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;