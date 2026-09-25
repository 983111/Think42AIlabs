import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  projectId: "bamboo-coil-r5xj8",
  appId: "1:778999655525:web:c4146ce6f178768f15aa8c",
  apiKey: "AIzaSyA3MASyttf2c8bqA_qLBE05Ea8RWzj5afk",
  authDomain: "bamboo-coil-r5xj8.firebaseapp.com",
  storageBucket: "bamboo-coil-r5xj8.firebasestorage.app",
  messagingSenderId: "778999655525"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, "ai-studio-c0ceff0f-c392-4912-a21b-694a825e994c");
