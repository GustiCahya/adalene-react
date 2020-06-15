import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyDQvp-guNk8gB-eI__nT2EJWnihYehZGDs",
    authDomain: "adalene-e6ca8.firebaseapp.com",
    databaseURL: "https://adalene-e6ca8.firebaseio.com",
    projectId: "adalene-e6ca8",
    storageBucket: "adalene-e6ca8.appspot.com",
    messagingSenderId: "251637868535",
    appId: "1:251637868535:web:f3e6b538728fa40530b0f2",
    measurementId: "G-66BS098B7F"
}
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {email} = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                email,
                createdAt,
                ...additionalData
            });
        }catch(e){
            alert('Something went wrong : '+e.message)
        }
    }

    return userRef
}

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;