// Import necessary Firebase functions
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVWRXdIYur1ai-QSTI99y5tXSXYmoGLT4",
  authDomain: "disneyplusclone-296d7.firebaseapp.com",
  projectId: "disneyplusclone-296d7",
  storageBucket: "disneyplusclone-296d7.appspot.com",
  messagingSenderId: "193688466881",
  appId: "1:193688466881:web:f7ccab1a1bb4e49f15ab40",
  measurementId: "G-FX30Q3J4M3"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase services
const auth = getAuth(app); // Authentication
const provider = new GoogleAuthProvider(); // Google Auth Provider
const db = getFirestore(app); // Firestore Database
const storage = getStorage(app); // Firebase Storage

// Export services to use them in other parts of the app
export { auth, provider, storage };
export default db;
