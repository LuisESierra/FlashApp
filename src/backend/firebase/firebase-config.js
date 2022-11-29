import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { getDatabase } from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyD5RhiMLJlvLhIHIqBbkBuq7sZBkXYjaak",
    authDomain: "flashapp-auth.firebaseapp.com",
    projectId: "flashapp-auth",
    storageBucket: "flashapp-auth.appspot.com",
    messagingSenderId: "1070499157864",
    appId: "1:1070499157864:web:62871409fde6e78b86e8dd",
    measurementId: "G-GZMFJ4T5QE"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app)

  const provider = new GoogleAuthProvider();

  export const db = getDatabase(app);
  
  export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      const name = result.user.displayName;
      const email = result.user.email
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name)
      localStorage.setItem("email", email)
      localStorage.setItem("profilePic", profilePic)
      console.log(result)
    }).catch((e) => {
      console.log(e)
    })
  };