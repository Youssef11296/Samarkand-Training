import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA2o5xEI3T_8MT_mfR73BOIwOC-hnydZ-0",
  authDomain: "samarkand-dfe5e.firebaseapp.com",
  databaseURL: "https://samarkand-dfe5e.firebaseio.com",
  projectId: "samarkand-dfe5e",
  storageBucket: "samarkand-dfe5e.appspot.com",
  messagingSenderId: "884857473930",
  appId: "1:884857473930:web:7df49d65b96e9d53601673",
  measurementId: "G-HP4VPY3GDF",
});

const auth = firebase.auth();
const db = firebaseApp.firestore();

export { auth };
export default db;
