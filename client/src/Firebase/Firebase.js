// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyBFH7SrOXpxr5o3O25lE-tBtXKDTpUKOzQ",
   authDomain: "sell-skill-79ed7.firebaseapp.com",
   projectId: "sell-skill-79ed7",
   storageBucket: "sell-skill-79ed7.appspot.com",
   messagingSenderId: "454122967288",
   appId: "1:454122967288:web:1150ef291cef6f98766b0d",
   measurementId: "G-ZC5R2NKGQZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase storage reference
const storage = getStorage(app);

export { storage };

