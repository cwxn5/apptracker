import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};
firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();
// database
//   .collection("cities")
//   .doc("LA")
//   .set({
//     name: "Los Angeles",
//     state: "CA",
//     country: "USA"
//   })
//   .then(function() {
//     console.log("Document successfully written!");
//   })
//   .catch(function(error) {
//     console.error("Error writing document: ", error);
//   });

// database
//   .collection("cities")
//   .get()
//   .then(collection => {
//     console.log(collection.docs);
//   });

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
