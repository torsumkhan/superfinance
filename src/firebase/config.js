import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUioh6sfPTq2DgQZZytiUPwcgQF2NlL3s",
  authDomain: "superfinance-8dde6.firebaseapp.com",
  projectId: "superfinance-8dde6",
  storageBucket: "superfinance-8dde6.appspot.com",
  messagingSenderId: "527905135753",
  appId: "1:527905135753:web:87be6c93995339ca22ba58",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
