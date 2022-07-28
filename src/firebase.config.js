// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAYShjXzn36DwGwf7f3o1G6dwqCzN73Xds',
  authDomain: 'house-marketplace-6b282.firebaseapp.com',
  projectId: 'house-marketplace-6b282',
  storageBucket: 'house-marketplace-6b282.appspot.com',
  messagingSenderId: '378849480406',
  appId: '1:378849480406:web:4b3141e3d0011689114377',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
