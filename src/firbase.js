
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {

   apiKey: "AIzaSyBD1IZUFU7b9h2IYMPbc0jX0pGY8LHuiTg",
  authDomain: "chat-app-ba88e.firebaseapp.com",
  projectId: "chat-app-ba88e",
  storageBucket: "chat-app-ba88e.appspot.com",
  messagingSenderId: "467909595903",
  appId: "1:467909595903:web:6f779f5fde2e782038f2ca"
};


export const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const storage = getStorage();
export const db=getFirestore()