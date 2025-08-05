import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCO8iM-9F_ZkzpCIzau4JOkGVHb61xoBS0",
  authDomain: "men-store-9523b.firebaseapp.com",
  projectId: "men-store-9523b",
  storageBucket: "men-store-9523b.firebasestorage.app",
  messagingSenderId: "1023225339749",
  appId: "1:1023225339749:web:ead978127b2c4b85f40b8c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}