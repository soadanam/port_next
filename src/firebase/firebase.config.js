// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvwkoekL5vXRcai0qRdDlnbLCRy2F1hfw",
  authDomain: "portfolio-auth-f22ae.firebaseapp.com",
  projectId: "portfolio-auth-f22ae",
  storageBucket: "portfolio-auth-f22ae.appspot.com",
  messagingSenderId: "327955962986",
  appId: "1:327955962986:web:92f82d223d9e5fd5e1be13"
};

// Initialize Firebase

const signOutAuth = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
        setUser('')
    })
    .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
    })
};

const firebaseInitializer = () => initializeApp (firebaseConfig);

export default firebaseInitializer;

