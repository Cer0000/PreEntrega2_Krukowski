import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjrCcpidsgrzWtpm9OiqY3gYiMERjoW-Q",
  authDomain: "mi-ecommerce-d20df.firebaseapp.com",
  projectId: "mi-ecommerce-d20df",
  storageBucket: "mi-ecommerce-d20df.firebasestorage.app",
  messagingSenderId: "444343533547",
  appId: "1:444343533547:web:b2ff3e6777627ce5a063ae"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);