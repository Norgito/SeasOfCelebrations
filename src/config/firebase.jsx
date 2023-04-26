import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEf-DCO4iGlglxqA5oH9LIRJTWOaqbCTg",

  authDomain: "seasofcelebrations-6bce8.firebaseapp.com",

  projectId: "seasofcelebrations-6bce8",

  storageBucket: "seasofcelebrations-6bce8.appspot.com",

  messagingSenderId: "1052990966167",

  appId: "1:1052990966167:web:715099fc3c83a26e46dcd2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
