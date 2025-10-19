import {initializeApp} from 'firebase/app'
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCzeAh_cUJAbQyxskTV73dRz_2Mzt4sKtM",
  authDomain: "http://sit313-381e8.firebaseapp.com",
  projectId: "sit313-381e8",
  storageBucket: "http://sit313-381e8.firebasestorage.app",
  messagingSenderId: "54322356905",
  appId: "1:54322356905:web:37841977f6f9bbe794ffb8",
  measurementId: "G-BQ8SBNB540"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app)