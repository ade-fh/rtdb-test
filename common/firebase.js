// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

import { useEffect } from 'react';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCka-znZagrhu0R7RXE9eUvh9SphFTEgQc',
  authDomain: 'capstone-19278.firebaseapp.com',
  databaseURL:
    'https://capstone-19278-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'capstone-19278',
  storageBucket: 'capstone-19278.appspot.com',
  messagingSenderId: '285477320175',
  appId: '1:285477320175:web:e408ea22dd2aefd21df21a',
  measurementId: 'G-LJY6J6RHVY',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const rtdb = getDatabase(app);
