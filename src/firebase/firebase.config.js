import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDTeGeVssew5nP8p0nxOMhNUVzJYXFJ-1o",
  authDomain: "ph-a10-2ab9e.firebaseapp.com",
  projectId: "ph-a10-2ab9e",
  storageBucket: "ph-a10-2ab9e.firebasestorage.app",
  messagingSenderId: "436194604797",
  appId: "1:436194604797:web:3e2b889944921a423df094"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)