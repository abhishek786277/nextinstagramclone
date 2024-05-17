import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCU79V83boCNLZrHB0Bs1KCsTSZo7yRakA",
  authDomain: "intsa-clone-34a62.firebaseapp.com",
  projectId: "intsa-clone-34a62",
  storageBucket: "intsa-clone-34a62.appspot.com",
  messagingSenderId: "994052278295",
  appId: "1:994052278295:web:32c616163ca6cf5ac53452",
};

export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore();
export const storage= getStorage();


