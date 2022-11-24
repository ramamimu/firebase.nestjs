// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDYEjMV1weqUSZKh9XxvBif_9iVYE-tYvs',
  authDomain: 'ets-pweb-77785.firebaseapp.com',
  projectId: 'ets-pweb-77785',
  storageBucket: 'ets-pweb-77785.appspot.com',
  messagingSenderId: '893346562248',
  appId: '1:893346562248:web:15b33cfd5c8e8f451825fd',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
