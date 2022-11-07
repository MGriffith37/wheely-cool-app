import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA-NN-P8TYbuB1ysB0uMVGu2387rnb6kCE",
    authDomain: "wheely-cool-app.firebaseapp.com",
    projectId: "wheely-cool-app",
    storageBucket: "wheely-cool-app.appspot.com",
    messagingSenderId: "753361104317",
    appId: "1:753361104317:web:6326c4a3d72399ec1076d4",
    measurementId: "G-XMDRLCLMCD"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore()