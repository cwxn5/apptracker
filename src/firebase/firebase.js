import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";
import "firebase/database";

let firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

firebaseConfig = {

  apiKey: "AIzaSyCy0KCEY36tDAoCH9yufNSSqwg0WC_YDRg",

  authDomain: "apptracker-f817f.firebaseapp.com",

  databaseURL: "https://apptracker-f817f.firebaseio.com",

  projectId: "apptracker-f817f",

  storageBucket: "apptracker-f817f.appspot.com",

  messagingSenderId: "1030155307474",

  appId: "1:1030155307474:web:771ba1fbc5193e5e1fe00b",

  measurementId: "G-ERWN7VKPHY"

};

firebase.initializeApp(firebaseConfig);
if(process.env.NODE_ENV === 'production'){
  firebase.analytics();
}

const database = firebase.database();
const fireStore = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, fireStore, database };
