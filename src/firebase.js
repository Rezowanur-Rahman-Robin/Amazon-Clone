import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZNkzVuSLZaonLdh4LKIMy4OJU8FHHSS8",
  authDomain: "clone-d6780.firebaseapp.com",
  databaseURL: "https://clone-d6780.firebaseio.com",
  projectId: "clone-d6780",
  storageBucket: "clone-d6780.appspot.com",
  messagingSenderId: "524655064031",
  appId: "1:524655064031:web:2c2dac2dc78e61f3178a6a",
  measurementId: "G-6RD8GMGT9L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };