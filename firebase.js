// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIcEbrU243IcUiP1G2bcIckwdHJoZyee0",
  authDomain: "inventorymanagement-bcb3d.firebaseapp.com",
  projectId: "inventorymanagement-bcb3d",
  storageBucket: "inventorymanagement-bcb3d.appspot.com",
  messagingSenderId: "158376572113",
  appId: "1:158376572113:web:1823eac81a6d395fa4c1f0",
  measurementId: "G-9696B3T1G2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };