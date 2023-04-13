import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chat-app-0000001.firebaseapp.com",
  projectId: "chat-app-0000001",
  storageBucket: "chat-app-0000001.appspot.com",
  messagingSenderId: "321533884366",
  appId: "1:321533884366:web:c3e6a35fdf62bf93b91d9f",
  measurementId: "G-33NQ69HL0E",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);