// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJzPTLj8jjDsz8__KJ2qc5hseXZbAgHQQ",
  authDomain: "wardroberizz.firebaseapp.com",
  projectId: "wardroberizz",
  storageBucket: "wardroberizz.appspot.com",
  messagingSenderId: "739436777956",
  appId: "1:739436777956:web:35bf6c590d32d94c6437f1",
  measurementId: "G-36E0HX1WV2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(); // provides authentication
export const db = getFirestore(app);
export const storage = getStorage(app);