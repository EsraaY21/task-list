// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDhd4idB7R6jig07A0mxNvpK8DoWTNCBHc',
  authDomain: 'task-list-f9b6c.firebaseapp.com',
  projectId: 'task-list-f9b6c',
  storageBucket: 'task-list-f9b6c.appspot.com',
  messagingSenderId: '494304764518',
  appId: '1:494304764518:web:266b203434cbf8587383a7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
