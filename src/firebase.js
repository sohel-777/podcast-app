// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCacA9bc41abdKKQvjvuVhq4ejpcDZe5JM",
  authDomain: "podcast-app-react-e4a3a.firebaseapp.com",
  projectId: "podcast-app-react-e4a3a",
  storageBucket: "podcast-app-react-e4a3a.appspot.com",
  messagingSenderId: "1093005605356",
  appId: "1:1093005605356:web:e48051d87a07e3982da8c9",
  measurementId: "G-D3QH8YLN90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, db, storage };