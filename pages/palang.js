// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
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
const app = initializeApp(firebaseConfig);
const rtdb = getDatabase(app);

const state_palang_ref = ref(rtdb, 'state_palang/');
onValue(state_palang_ref, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});

export default function Palang() {
  return <></>;
}
