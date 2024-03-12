import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYE-zNGOs9OG7iewdyaqqrkvNbx9MCk-g",
  authDomain: "stall-99.firebaseapp.com",
  projectId: "stall-99",
  storageBucket: "stall-99.appspot.com",
  messagingSenderId: "510769917341",
  appId: "1:510769917341:web:47f3abb52d91c40b925374",
  measurementId: "G-6MJ9BHDN0S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
