import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDifRV52ZMLSi4VQ1AWVHiaAbk8Htrwg2A",
  authDomain: "aistheticstores.firebaseapp.com",
  projectId: "aistheticstores",
  storageBucket: "aistheticstores.appspot.com",
  messagingSenderId: "751792628051",
  appId: "1:751792628051:web:778d5305d2b533262f01a6",
  measurementId: "G-XK71E2Y8PZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
