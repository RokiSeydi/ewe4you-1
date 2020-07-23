import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzDjDEIau5RFUoX6sRl1_8XelwQl_0FuU",
  authDomain: "ewe4youselfie.firebaseapp.com",
  databaseURL: "https://ewe4youselfie.firebaseio.com",
  projectId: "ewe4youselfie",
  storageBucket: "ewe4youselfie.appspot.com",
  messagingSenderId: "942635150251",
  appId: "1:942635150251:web:3e66157aefd1d7d486c0ee",
  measurementId: "G-346RSTCV9E"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;