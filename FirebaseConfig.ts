import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Use Expo runtime env (EXPO_PUBLIC_*) which Metro inlines at build-time
// Define these in a .env file or via EAS secrets
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
