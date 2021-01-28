// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

//config from firebase console
const firebaseConfig = {
  apiKey: "AIzaSyBiekmqiCGEFHXAk9AfS3W2jz0Aiym5Sag",
  authDomain: "pinterest-clone-2f971.firebaseapp.com",
  projectId: "pinterest-clone-2f971",
  storageBucket: "pinterest-clone-2f971.appspot.com",
  messagingSenderId: "420162755570",
  appId: "1:420162755570:web:bbc6dde9882dbf712f696b",
  measurementId: "G-JYZR3DWLLX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
