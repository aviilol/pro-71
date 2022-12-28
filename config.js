import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyB9HRnQdXQhcakCGPtG3DZpyvP9cxgNJUg",
  authDomain: "pro-71-b673d.firebaseapp.com",
  databaseURL: "https://pro-71-b673d-default-rtdb.firebaseio.com",
  projectId: "pro-71-b673d",
  storageBucket: "pro-71-b673d.appspot.com",
  messagingSenderId: "384986112890",
  appId: "1:384986112890:web:05790da1068fdaa94eecc3"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
