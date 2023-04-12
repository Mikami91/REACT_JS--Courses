import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDxmx2EUsoiABvbhEtkvjmII45E4DKteYA',
  authDomain: 'react-journal-app-d56c7.firebaseapp.com',
  projectId: 'react-journal-app-d56c7',
  storageBucket: 'react-journal-app-d56c7.appspot.com',
  messagingSenderId: '198634416157',
  appId: '1:198634416157:web:a33ce33a0943c415a3fef4',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);
