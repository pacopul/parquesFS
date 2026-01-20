import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBu7f6U2uxRsBriSftVNlkuDVlHo4kWEC4",
  authDomain: "parquesnaturales-352f2.firebaseapp.com",
  projectId: "parquesnaturales-352f2",
  storageBucket: "parquesnaturales-352f2.firebasestorage.app",
  messagingSenderId: "1016887087866",
  appId: "1:1016887087866:web:0b73d9f177c2fa8996ef43"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
